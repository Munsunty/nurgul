import {data, DataModel} from "~/composables/dataModel";
import {ColumnModel} from "~/composables/ColumnModel";


interface TaskDataModel extends DataModel{
    date:number
    duration:number
    endDate:number
    dependency:TaskDependency[]
    progress:number
    manager:string
}
interface TaskColumnDataModel extends TaskDataModel,ColumnModel{
    date:number,
    duration:number
}

interface XYCoordinate {
    x1:number
    y1:number
    x2:number
    y2:number
}

interface TaskDependency extends data{
    coordinate:XYCoordinate;
    origin:XYCoordinate;
}


class TaskI implements TaskColumnDataModel {
    id: string | number;
    name: string;
    date: number;
    duration: number;
    dependency: TaskDependency[];
    column: object;
    columnKey: string;
    columnValue: string | number | boolean;
    index: number;
    selected: boolean;
    manager: string;
    progress: number;
    endDate:number;


    constructor(param:TaskDataModel,index:number) {
        this.id = param.id;
        this.name = param.name;
        this.date = param.date;
        this.duration = param.duration;
        this.dependency = param.dependency;
        this.manager = param.manager;
        this.progress = param.progress;

        this.endDate=this.getEndDate();
        this.columnKey = this.getColumnKey();
        this.columnValue = this.duration;
        this.column=this.getColumn();
        this.index=index;
        this.selected=false;
    }

    reConstructor(param:TaskDataModel) {
        this.id = param.id;
        this.name = param.name;
        this.date = param.date;
        this.duration = param.duration;
        this.dependency = param.dependency;
        this.manager = param.manager;
        this.progress = param.progress;

        this.endDate=this.getEndDate();
        this.columnKey = this.getColumnKey();
        this.columnValue = this.duration;
        this.column=this.getColumn();
        this.selected=false;
    }

    getEndDate():number{
        return this.endDate=this.date+this.duration-1;
    }

    getColumnKey() : string{
        return this.date+'th';
    }

    getColumn() : object{
        return {[this.columnKey]:this.columnValue}
    }

    changeDate(date:number){
        this.date=date;
        this.endDate=this.getEndDate();
        this.columnKey = this.getColumnKey();
        this.column=this.getColumn();
    }

    changeDuration(duration:number){
        this.duration=duration;
        this.endDate=this.getEndDate();
        this.columnValue=duration;
        this.column=this.getColumn();
    }
}

export default class {
    tasks: TaskI[]
    taskSet: any
    width:number;
    height:number;
    _get:any;
    _add:any;
    _delete:any;
    _reIndex:any;
    _clearUndefined:any;


    constructor(Arr: TaskDataModel[],width:number,height:number) {
        this.tasks = [];
        this.taskSet = new Set();
        this.width=width;
        this.height=height;

        let t = this;
        Arr.forEach(task => {
            t.add(task);
        })
        this.tasks.filter(tasks=>tasks.dependency).forEach(task=>
            t.calculatorCoordT(task)
        )

        this._get=this.get;
        this._add=this.add;
        this._delete=this.delete;
        this._clearUndefined=(id:string)=>{
            t.taskSet.delete(undefined);
            t.taskSet.add(id);
        }


    }

    get(): TaskI[] {
        return this.tasks;
    }

    add(param: TaskDataModel): void {
        if (!this.taskSet.has(param.id)) {
            this.taskSet.add(param.id);
            this.tasks.push(new TaskI(param,this.tasks.length));
        }
    }

    delete(id: string): void {
        if (this.taskSet.has(id)) {
            let target = this.tasks.find(task=>task.id===id);
            if(target instanceof TaskI){
              this.tasks.splice(target.index,1);
              this.reIndex();
            }
        }
    }

    reIndex():void{
        this.tasks.forEach((task,idx)=>{
            task.index=idx
        })
    }

    findTask(id: string | number){
        if (this.taskSet.has(id)) {
            return this.tasks.find(task=>task.id===id)
        }
    }

    changeDateTask(task:TaskI,moveDate:number){
        task.changeDate(moveDate);
        if(task.dependency instanceof Array){
            this.calculatorCoordT(task)
        }
        this.reArrangeCoord(task);
    }
    changeDurationTask(task:TaskI,duration:number){
        task.changeDuration(duration);
        if(task.dependency instanceof Array){
            this.calculatorCoordT(task)
        }
        this.reArrangeCoord(task);
    }

    calculatorCoord(task:TaskI,width:number,height:number){
        this.width=width;
        this.height=height;
        this.calculatorCoordT(task);
    }


    calculatorCoordT(task:TaskI){
        let t = this;
        task.dependency.forEach(node=>{
            let nextTask = t.findTask(node.id)
            if(nextTask instanceof TaskI){
                node.coordinate={
                    x1:(task.duration+task.date-1)*t.width,
                    y1:25+task.index*t.height,
                    x2:(nextTask.date-1)*t.width,
                    y2:(nextTask.index-task.index)*t.height
                }
                node.origin={
                    x1:node.coordinate.x1,
                    y1:node.coordinate.y1,
                    x2:node.coordinate.x2,
                    y2:node.coordinate.y2,
                }
            }
        })
    }

    moveCoord(task:TaskI,moveX:number){
        if(task.dependency instanceof Array){
            task.dependency.forEach(node=>{
                node.coordinate.x2=node.origin.x2-moveX
            })
        }
        this.tasks.filter(n=>n.dependency).forEach(nextTask=>{
            nextTask.dependency.filter(nT=>nT.id==task.id).forEach(node=>{
                node.coordinate.x2=node.origin.x2+moveX;
            })
        })
    }

    moveCoord2(task:TaskI,moveWidth:number){
        if(task.dependency instanceof Array){
            task.dependency.forEach(node=>{
                node.coordinate.x1=node.origin.x1+moveWidth
            })
        }
    }

    reArrangeCoord(task:TaskI){
        let t=this;
        this.tasks.filter(n=>n.dependency).forEach(prevTask=>{
            if(prevTask.dependency.filter(nT=>nT.id==task.id).length>0){
                t.calculatorCoordT(prevTask);
            }
        })
    }

}