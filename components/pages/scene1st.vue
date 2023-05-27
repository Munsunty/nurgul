<template>
  <div id="_scene1" class="grid col-12" :class="scrollNum>=0?'_fadeIn':'_fadeOut'">
    <div class="col-6 ">
      <div class="flex align-items-center justify-content-center" :class="scene_number<=1?'col-12':'col-9'" style="transition: all 1s ease;">
        <component :is="s1_left_Area" :scrollNum="scrollNum" />
      </div>
    </div>
    <div  class="col-2 p-2 gap-4 h-5rd " >
        <CompMainImage :class="scrollNum<25?'_fadeIn':'_fadeOut'" :scrollNum="scrollNum"></CompMainImage>
      </div>
    <div  class="col-4 flex align-items-start justify-content-center p-4" >
      <component :is="s1_right_Area"  :scrollNum="scrollNum"  style="overflow:visible"/>

     
    </div>

  </div>


</template>
<!--
좌측 자료 우측 너구리
1. 인사말
2. 자기소개
3. 이력 살펴보기

-->

<script setup>
const props = defineProps(['scrollNum']);
const scene_number = ref(0);
const scene_chanage = ref(false);

watch(()=>props.scrollNum,(val_af,val_bf)=>{
    let beforeStep = scene_number.value;
    scene_number.value=val_af<5?
        0:
        val_af<10?
        1:
        val_af<15?
        2:
        val_af<20?
        3:
        val_af<25?
        4:
        5
    if(beforeStep!=scene_number.value){
      scene_chanage.value=false;
    }else{
      scene_chanage.value=false;
    }
});


const s1_left_componentArr = ref([
    h(resolveComponent('CompIntroduce')),
    h(resolveComponent('CompDeveloper')),  
    h(resolveComponent('CompWorkList')),
    h(resolveComponent('CompProjectList')),
    h(resolveComponent('CompStackList'))


  ]);

  const s1_left_Area = computed({
    get:()=>{
      return s1_left_componentArr.value[
       scene_number.value
      ];
    }
  })  

  const s1_right_componentArr = ref([
    h(resolveComponent('CompBlank')),
    h(resolveComponent('CompSayPrompt')),
    h(resolveComponent('CompSayPrompt2')),
    h(resolveComponent('CompSayPrompt3')),
    h(resolveComponent('CompSayPrompt4'))


  ]);

  const s1_right_Area = computed({
    get:()=>{
      return s1_right_componentArr.value[
        scene_number.value
      ];
    }
  })

</script>

<style scoped>
div#_scene1{
  position: sticky;
  left: 2%;
  top: 5%;
  width: 95%;
  height: 90%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}


</style>