export  class managementViewKey {
    viewKeySet:any;
    viewKeyArr:viewKey[];
    currentKey:string;
    currentIndex:number;
    currentIndexKeyMap:any;
    currentKeyIndexMap:any;
    constructor() {
        this.viewKeySet = new Set();
        this.viewKeyArr=[];
        this.currentIndexKeyMap= new Map();
        this.currentKeyIndexMap= new Map();

        this.viewKeyArr.push(this.createViewKey(0,null));
        this.viewKeySet.add(this.viewKeyArr[0].id);
        this.currentKey=this.viewKeyArr[0].id;
        this.currentIndex=0;

    }

    addViewKey(index:number){
        this.viewKeyArr.push(this.createViewKey(index,null));
        this.viewKeySet.add(this.viewKeyArr[this.viewKeyArr.length-1].id)
        return this.viewKeyArr[this.viewKeyArr.length-1].id;
    }

    editView(id:string,opt:settingPage){
        if(this.viewKeySet.has(id)){
            let view = this.viewKeyArr.filter(view=>view.id==id);
            if(typeof view != 'undefined'&&Array.isArray(view)){
                view[0].setting=this.defaultSettingPage(id,opt);
            }
        }
        return id;
    }

    deleteViewKey(id:string){
        if(this.viewKeySet.has(id)){
            let view = this.viewKeyArr.filter(view=>view.id==id);
            if(typeof view != 'undefined'&&Array.isArray(view)){
                this.viewKeySet.delete(view[0].id);
                this.viewKeyArr.splice(view[0].index,1);
            }
        }
    }

    changeCurrentViewKey(id:string) {
        if (this.viewKeySet.has(id)) {
            let view = this.viewKeyArr.filter(view => view.id == id);
            if (typeof view != 'undefined' && Array.isArray(view)) {
                this.currentKey = view[0].id;
            }
        }
    }

    createViewKey(index:number,opt:any):viewKey{
        let setting = this.defaultSettingPage(new Date().getTime().toString(),null);
        this.currentIndexKeyMap.set(setting.id,index);
        this.currentKeyIndexMap.set(index,setting.id);
        return {
            id: setting.id,
            index:index,
            setting:setting
        }
    }

    defaultSettingPage(id:string,opt:any):settingPage{
        if(opt==null||!opt.hasOwnProperty('page')){
            return {
                type:0,
                create:true,
                read:true,
                edit:true,
                delete:true,
                add:false,
                from:false,
                fromPage:'',
                page:'start',
                sessionStorageKey:id+'_start',
                id:id,
                data:{}
            }
        }else{
            return {
                type:0,
                create:true,
                read:true,
                edit:true,
                delete:true,
                add:false,
                from:false,
                fromPage:'',
                page:opt.page,
                sessionStorageKey:id+'_'+opt.page,
                id:id,
                data:{}
            }
        }

    }
}


interface viewKey {
    id:string,
    index:number
    setting:settingPage
}

interface settingPage {
    type: pageType
    create:boolean
    read:boolean
    edit:boolean
    delete:boolean

    add:boolean
    from:boolean
    fromPage:string
    page:string
    sessionStorageKey:string
    id:string,
    data:any
}

enum pageType{
    table ,
    form ,
    tree,
    treeTable
}
