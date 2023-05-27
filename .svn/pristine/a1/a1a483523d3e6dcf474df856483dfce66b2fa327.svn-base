<template>
  <g v-if="props.taskD.progress==100">
    <rect :x="rectX" :y="rectY+9" :width="width" :height="33" fill="#3B82F6" @click="changeColor($event,this)" />

  </g>

  <g v-else>
    <rect :x="rectX+width2" :y="rectY+9" :width="width1" :height="33" fill="green" @click="changeColor($event,this)" />
    <rect :x="rectX" :y="rectY+9" :width="width2" :height="33" fill="yellow" @click="changeColor($event,this)" />
  </g>
  <rect v-show="props.taskD.selected" :x="rectX+width" :y="rectY+9" :width="10" :height="33" @mousedown="moveEnd($event,this)"/>

  <ProjectTaskRelationLine v-for="next of props.taskD.dependency" :width="width" :next="next"  :bWidth="props.bWidth" :moveX="moveX"/>


</template>

<script setup>
const props = defineProps(['taskD','taskList','bWidth'])
const task = props.taskD;
const width= computed({
  get:()=>{
    return (props.taskD.duration*props.bWidth-18+moveWidth.value)
  }
})
const width1= computed({
  get:()=>{
    return (props.taskD.duration*props.bWidth-18+moveWidth.value)*(100-task.progress)/100
  }
})
const width2= computed({
  get:()=>{
    return (props.taskD.duration*props.bWidth-18+moveWidth.value)*task.progress/100
  }
})

const moveX = ref(0);
const moveWidth = ref(0);



const rectX = computed({
  get:()=>{
    return ((props.taskD.date-1)*props.bWidth+9+moveX.value)
  }
})



const rectY = ref(props.taskD.index*50)

const changeColor = (e,t)=>{
  if(task.selected){

  }else{
    document.onmouseup = null;
    e.target.onmousedown=null;
    let prev = document.getElementsByClassName('selected');
    if(prev.length>0){
      prev[0].classList.remove('selected')
    }
    t.taskList.tasks.filter(task=>task.selected).forEach(task=>{
      task.selected=false;
    })
    task.selected=true;
    e.target.classList.add('selected');
    e.target.onmousedown=mouseDownEvent;
  }


  function changeDate(moveDate){
    if(moveDate+task.date<1){
      if(task.dependency instanceof Array){
        t.taskList.calculatorCoordT(task)
      }
    }else{
      t.taskList.changeDateTask(task,moveDate+task.date)
    }

  }


  function mouseDownEvent(){
    let shiftX = event.clientX;
    let nowRectX = moveX.value;
    // let initX = e.target.getBoundingClientRect().x;



    function moveAt(pageX) {
      moveX.value = (pageX - shiftX);
      t.taskList.moveCoord(task,moveX.value)
    }

    function onMouseMove(event) {
      moveAt(event.pageX);
    }

    document.onmousemove=onMouseMove;


    document.onmouseup=() => {


      document.onmousemove=null;
      let calCnt = moveX.value-nowRectX
      let moveDate = parseInt((calCnt>0?calCnt+9:calCnt-41)/props.bWidth);

      if(moveDate>0||moveDate<0){
        changeDate(moveDate);
      }
      moveX.value=nowRectX;
      t.taskList.reArrangeCoord(task);
      task.selected=false;
      document.onmouseup = null;
    };
  }


}

const moveEnd=(e,t)=>{
  let shiftX = event.clientX;
  let nowRectX = moveWidth.value;
  // let initX = e.target.getBoundingClientRect().x;


  function changeDuration(moveDate){
    if(moveDate+task.duration<1){
      if(task.dependency instanceof Array){
        t.taskList.calculatorCoordT(task)
      }
    }else{
      t.taskList.changeDurationTask(task,moveDate+task.duration)
    }

  }

  function moveAt(pageX) {
    moveWidth.value = (pageX - shiftX);
    t.taskList.moveCoord2(task,moveWidth.value)
  }

  function onMouseMove(event) {
    moveAt(event.pageX);
  }

  document.onmousemove=onMouseMove;


  document.onmouseup=() => {

    document.onmousemove=null;
    let calCnt = moveWidth.value-nowRectX
    let moveDate = parseInt((calCnt>0?calCnt+9:calCnt-41)/props.bWidth);

    if(moveDate>0||moveDate<0){
      changeDuration(moveDate);
    }
    moveWidth.value=nowRectX;
    t.taskList.reArrangeCoord(task);
    document.onmouseup = null;
  };
}
</script>
<style scoped lang="scss">
.selected{
  fill:red;
  cursor: grab!important;
}
rect:not(:has(.selected)){
  cursor:pointer
}

g>rect,text{
  transition: x 5ms ease-out;
}

</style>