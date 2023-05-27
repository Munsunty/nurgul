<template>
  <div class="card" style="position:absolute; top:50px" >
    <div id="PMSGanttChart" style="height:100%">
      <DataTable :value="products.tasks"   class="p-datatable-sm" :showGridlines="true" editMode="cell" @cell-edit-complete="onCellEditComplete"
      >
        <ColumnGroup type="header">
          <Row>
            <Column header="Task명" :rowspan="columnH.length" header-class="widthMin2"  class="p-frozen-column" />
            <Column header="시작일" :rowspan="columnH.length"  header-class="widthMin2"/>
            <Column header="기간" :rowspan="columnH.length"    header-class="widthMin1"/>
            <Column header="종료일" :rowspan="columnH.length"    header-class="widthMin2"/>
            <Column header="담당자" :rowspan="columnH.length"  header-class="widthMin2"/>
            <Column header="진행률" :rowspan="columnH.length"  header-class="widthMin2"/>
            <Column header="2022" :colspan="columnH.length" />
          </Row>
          <Row>
            <Column v-for="col of columnH" :header="col.date" :style="divStyle"/>
          </Row>
          <Row>
            <Column v-for="col of columnH" :header="col.header" :style="divStyle"/>
          </Row>
        </ColumnGroup>

        <Column  field="name" body-class="widthMin2" frozen>
          <template #editor="{ data, field }">
            <InputText v-model="data[field]" autofocus />
          </template>
          <template #body="slotProps" >
            <span v-if="slotProps.data.id">{{slotProps.data.name}}</span>
            <Button v-else type="button" icon="pi pi-plus" class="mr-2"></Button>
          </template>
        </Column>

        <Column  field="date"  body-class="widthMin2" frozen>
          <template #editor="{ data, field }">
            <InputNumber  inputId="integeronly" v-if="data.id" v-model="data[field]" autofocus />
          </template>
        </Column>

        <Column field="duration" body-class="widthMin1" frozen>
          <template #editor="{ data, field }">
            <InputNumber  inputId="integeronly" v-if="data.id" v-model="data[field]" autofocus />
          </template>
        </Column>

        <Column  field="endDate"  body-class="widthMin2" frozen>
          <template #editor="{ data, field }">
            <InputNumber  inputId="integeronly" v-if="data.id" v-model="data[field]" autofocus />
          </template>
        </Column>

        <Column header="담당자" field="manager" body-class="widthMin2"/>
        <Column header="진행률" field="progress" body-class="widthMin2"/>
        <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.id" :style="divStyle" />
<!--          <template #body="slotProps" >-->
<!--            <ProjectTaskBar  v-if="slotProps.data.column[slotProps.field]" :taskD="slotProps" :taskList="products"  :bWidth="width" :startViewDate="value1"></ProjectTaskBar>-->
<!--          </template>-->
<!--        </Column>-->

      </DataTable>
      <div id="TaskSVGrid" :style="gridStyle">
        <svg :width="screenSize[0]+'px'" :height="screenSize[1]+'px'">
          <svg width="10000px" height="10000px" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               :y="scrollY" :x="-value1*width"

               style="transition: y 1s ease-out"
          >
            <!--          <defs>-->
            <!--            <pattern id="smallGrid" width="70" height="50" patternUnits="userSpaceOnUse">-->
            <!--              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" stroke-width="0.5"/>-->
            <!--            </pattern>-->
            <!--            <pattern id="grid" width="70" height="50" patternUnits="userSpaceOnUse">-->
            <!--              <rect width="80" height="80" fill="url(#smallGrid)"/>-->
            <!--              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" stroke-width="0.5"/>-->
            <!--            </pattern>-->
            <!--          </defs>-->
            <!--          <rect width="100%" height="100%" fill="red" />-->
            <svg v-for="task of variableTasks" >
              <ProjectTaskRect  v-if="task.id"  :taskD="task" :taskList="products"  :bWidth="width"></ProjectTaskRect>
            </svg>
          </svg>
        </svg>

      </div>
    </div>
    <div class="card" id="sliderBar">
      <Slider v-model="value1" :style="sliderStyle"/>
    </div>

  </div>

</template>

<script setup>

import TaskDataModel from "../../composables/Task/TaskDataModel";

const props = defineProps(['fromPage']);
const tablePrevWidth=570;
const tableHeight=ref(window.innerHeight-200);
const divHeight = 50;
const THeadHeight =114;
const screenSize = ref([(window.innerWidth-tablePrevWidth-2),tableHeight.value-THeadHeight]);
const width =ref(70);

const value1 = ref(0);

const divStyle = ref({
  "max-width":width.value+"px",
  "min-width":width.value+"px",
  width:width.value+"px"
})


const columnH = computed({
  get:()=>{

    return columns.value.slice(value1.value,value1.value+parseInt(screenSize.value[0]/width.value+2))
  }
})

const columns  =  ref ([

]);
for (let i = 0; i < 100+parseInt(screenSize.value[0]/width.value+2); i++) {
  columns.value.push(
      {
        field:(i+1)+"th",
        header:(i+1)+"th",
        date:getDatesStartToLast(i)
      }
  )
}

function getDatesStartToLast(add) {
  var regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);

  var curDate = new Date();
  curDate.setDate(curDate.getDate() + add);
  return (curDate.getMonth()+1)+"-"+curDate.getDate();
}


const products = ref(new TaskDataModel([
  {id:1, name:'Task-1', date:40, progress:50 ,duration:1, dependency:[{id:14}]},
  {id:2, name:'Task-2', date:6, progress:100 ,duration:5 },
  {id:3, name:'Task-3', date:6, progress:100 ,duration:5 , dependency:[{id:4}]},
  {id:4, name:'Task-4', date:11, progress:100 ,duration:4 , dependency:[{id:7}]},
  {id:5, name:'Task-5', date:27, progress:100 ,duration:10},
  {id:6, name:'Task-6', date:1, progress:100 ,duration:5 , dependency:[{id:2},{id:3}]},
  {id:7, name:'Task-7', date:15, progress:100 ,duration:3, dependency:[{id:9},{id:10},{id:11},{id:12},{id:13}] },
  {id:8, name:'Task-8', date:37, progress:100 ,duration:3},
  {id:9, name:'Task-9', date:18, progress:100 ,duration:9},
  {id:10, name:'Task-10', date:18, progress:100 ,duration:9},
  {id:11, name:'Task-11', date:18, progress:100 ,duration:9},
  {id:12, name:'Task-12', date:18, progress:100 ,duration:9},
  {id:13, name:'Task-13', date:18, progress:100 ,duration:9},
  {id:14, name:'Task-14', date:41, progress:0 ,duration:9},
  {}
],width.value,divHeight))

const variableTasks = computed({
  get:()=>{
    return products.value.tasks
  }
})

const gridStyle= ref({
  position:"absolute",
  left:tablePrevWidth+"px",
  top:THeadHeight+"px",
  width:"calc(100vw - "+tablePrevWidth+"px)",
  height:"inherit",
  "max-height": "calc("+tableHeight.value+"px - "+THeadHeight+"px)"
})

const sliderStyle = ref({
  left:tablePrevWidth+"px",
  width:"calc(100vw - "+tablePrevWidth+"px )"
})

const idCnt=ref(products.value.tasks.length);


const onCellEditComplete=(event)=>{
  let { data, newValue, field } = event;
  if(typeof data.id =='undefined'){
    if(field=='name'&&typeof newValue ==="string"){
      let param ={id:idCnt.value,name:idCnt,date:1,duration:1,progress:0};
      param[field]=newValue;
      data.reConstructor(param)
      products.value._clearUndefined(param.id)
      products.value._add({});
      idCnt.value++;
    }else{
      return ;
    }
  }else{
    switch (field){
      case 'date':
        products.value.changeDateTask(data,newValue);
        break;
      case 'duration':
        products.value.changeDurationTask(data,newValue)
        break;
      case 'endDate':
          let changeDuration = (newValue-data.date+1)
          products.value.changeDurationTask(data,changeDuration>0?changeDuration:1)
          break;
      default:data[field] = newValue;
        break;
    }
  }
}
const scrollY = ref(0);




onMounted(()=>{
  document.querySelector('tbody.p-datatable-tbody').addEventListener('scroll',(e)=>{
    scrollY.value=-event.target.scrollTop;
  })
  document.getElementById('TaskSVGrid').addEventListener('wheel',(e)=>{
    let target =  document.querySelector('tbody.p-datatable-tbody');
    const wheelDelta=event.wheelDeltaY/10;


    if(target.scrollTop-wheelDelta<0){
      scrollY.value=0;
    }else if(target.scrollTop+target.clientHeight==target.scrollHeight){
      if(wheelDelta>0){
        scrollY.value-=wheelDelta;
        target.scrollTop=scrollY.value;
      }else{
        return
      }
    }else{
      target.scrollTop-=wheelDelta;
      scrollY.value=target.scrollTop;

    }
  })

  // window.removeEventListener('resizePMS');


  window.addEventListener('resize',resizePMS)
  function resizePMS (){
    screenSize.value[0]=document.getElementById('TaskSVGrid').clientWidth-2;
    screenSize.value[1]=document.getElementById('TaskSVGrid').clientHeight;
  }


})

</script>

<style scoped lang="scss">
::v-deep(#PMSGanttChart){
  width: 100%;
  -ms-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  .p-datatable table{
    display:block;
    max-height: calc(100vh - 200px);
    overflow:hidden;
  }
  .p-datatable-tbody{
    display:block;
    width:100%;
    max-height: calc(100vh - 314px);
    overflow-y:auto;
    overflow-x:hidden;
  }

  .p-datatable.p-datatable-sm .p-datatable-tbody > tr {
    max-height: 50px;
    min-height: 50px;
    height:50px;
  }
  .p-inputtext {
    width: 100%;
    height: 100%;
    padding: 5px 8px 5px 8px;
  }

  #sliderBar{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .widthMin1{
    min-width: 70px;
    text-align: center;
  }
  thead>tr> th >div{

  }
  .widthMin2{
    min-width: 100px;
    text-align: center;
  }

}



</style>