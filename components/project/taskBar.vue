<template>
  <div :style="moveStyle"  >
    <svg version="1.1"
         baseProfile="full"
         :width="width" height="30"
         xmlns="http://www.w3.org/2000/svg"
         style="overflow: visible"
    >
      <rect :x="start" width="100%" height="100%" fill="red" @click="changeColor($event,this)" ></rect>

      <text :x="start+20" y="18" font-size="10" text-anchor="middle" fill="white" class="stop-dragging">{{props.taskD.data.name}}</text>


      <ProjectTaskRelationLine v-for="next of props.taskD.data.dependency" :width="width" :taskD="props.taskD.data" :next="next" :rectX="rectX" :start="start"/>

    </svg>
  </div>
  <div style="height:33px; opacity:0">style</div>

</template>

<script setup>

const props = defineProps(['taskD','taskList','bWidth','startViewDate'])

const width=computed({
  get:()=>{
    return task.duration*props.bWidth-18
  }
})

const start=computed({
  get:()=>{
    return -props.startViewDate*props.bWidth
  }
})

const moveStyle=ref({
  width: "inherit",
  height: "inherit",
  "z-index": 1000,
  position:"absolute"

});




const task = props.taskD.data;

const rectX=ref(0);

const divX=ref(0);




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


  function changeDate(moveDate,target){
    if(moveDate+task.date<1){
      // target.remove();
      if(task.dependency instanceof Array){
        t.taskList.calculatorCoordT(task)
      }
    }else{
      t.taskList.changeDateTask(task,moveDate+task.date)
      target.remove();
    }

  }


  function mouseDownEvent(){
    let shiftX = event.clientX;
    let nowRectX = rectX.value;
    let initX = e.target.getBoundingClientRect().x;

    e.path[2].style.left=(initX)+'px';




    // 초기 이동을 고려한 좌표 (pageX, pageY)에서
    // 공을 이동합니다.
    function moveAt(pageX) {
      if(Math.abs(pageX - shiftX - rectX.value)>1){
        rectX.value = (pageX - shiftX);
        divX.value=initX+rectX.value;
        e.path[2].style.left= (divX.value)+'px';
        t.taskList.moveCoord(task,rectX.value)
      }


    }

    function onMouseMove(event) {
      moveAt(event.pageX);
    }

    // mousemove로 공을 움직입니다.
    document.onmousemove=onMouseMove;

    // 공을 드롭하고, 불필요한 핸들러를 제거합니다.
    document.onmouseup=() => {


      document.onmousemove=null;
      let calCnt = rectX.value-nowRectX
      let moveDate = parseInt((calCnt>0?calCnt+9:calCnt-41)/props.bWidth);

      e.path[2].style.left='';
      if(moveDate>0||moveDate<0){
        changeDate(moveDate,e.target);
      }
      rectX.value=nowRectX;
      t.taskList.reArrangeCoord(task);
      task.selected=false;
      document.onmouseup = null;
    };
  }


}

</script>

<style scoped lang="scss">
.selected{
  fill:green;
  cursor: grab!important;
}
rect:not(:has(.selected)){
  cursor:pointer
}

.stop-dragging
{
  -ms-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

</style>