<template>
  <div id="_scene3" class="grid col-12" :class="scrollNum>startNumber&&scrollNum<endNumber?'_fadeIn':'_fadeOut'">
    <div  class="col-5 flex align-items-center justify-content-center">
      <img id="__nurgul3" src="~/assets/nurgul.png" width="250">
    </div>
    <div  class="col-2 flex align-items-center justify-content-center">
      <div class="text-900 font-bold text-8xl mb-4 text-center" > 
            <p>X</p>
      </div>
    </div>
    <div class="col-5 flex align-items-center justify-content-center">
      <img id="__seshat3" src="~/assets/seshat.png" alt="Image" width="230">
    </div>
    <div style="position: absolute; float: left; top: 7%;"  :class="scrollNum>startNumber&&scrollNum<endNumber?'_fadeIn':'_fadeOut'"
      class="col-12 flex align-items-center justify-content-center text-900 font-bold text-2xl">
      <span :class="scrollNum>startNumber&&scrollNum<=startNumber+6?'_fadeIn':'_fadeOut'">“서로 돕고 의지하면 더 큰 일을 이룰 수 있다.” - 마틴 루터 킹 주니어</span>
      <span :class="scrollNum>startNumber+6&&scrollNum<endNumber?'_fadeIn':'_fadeOut'">“우리는 함께, 높게, 멀리 갈 수 있어.” -  개발자 Nurgul</span>

    </div>
  </div>
 
   

</template>
<!--
너구리는 생각해요
노팅과 함께하는 너구리는
더 넓은 세상 높은 곳으로 갈 수 있다는 것을

-->

<script setup>
const props = defineProps(['scrollNum']);
const startNumber=ref(61);
const endNumber=ref(74);

const self_step = ref(60);



onMounted(()=>{
    moveImg(0);
})
watch(()=>props.scrollNum,(val_af,val_bf)=>{
    let beforeStep = self_step.value;
    if(val_af!=beforeStep ){
        self_step.value=val_af;
        if(val_af<startNumber.value){
            moveImg(0);    
        }else if(val_af<=startNumber.value+5){
            moveImg((val_af-startNumber.value));
        }else{
            moveImg(5);
        }
        
    }
});

const  moveImg = (step)=>{
    let temp= document.getElementById('__nurgul3');
    let temp2 = document.getElementById('__seshat3');
    if(temp && temp2){
      temp.style.width= (250+(400-250)*(step/5)) + 'px';
      temp2.style.width= (230+(400-230)*(step/5)) +'px';

    }
}


// const easeOutQuart= (x ) => {
//     const c5 = (2 * Math.PI) / 4.5;

//     return x === 0
//     ? 0
//     : x === 1
//     ? 1
//     : x < 0.5
//     ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
//     : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
// }
</script>

<style scoped>
div#_scene3{
  position: sticky;
  left: 2%;
  top: 5%;
  width: 95%;
  height: 90%;
}

img#__nurgul3,img#__seshat3{
  transition: width 0.5s ease;

}

</style>