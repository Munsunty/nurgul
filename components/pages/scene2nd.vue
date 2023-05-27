<template>
  <div id="_scene2" class="grid col-12">
    <div  class="col-4 flex align-items-center justify-content-center">
      <div class="col-5 p-2 gap-4 h-5rd " :class="scrollNum>30?'_fadeIn':'_fadeOut'">
        <CompMainImage></CompMainImage>
      </div>
    </div>
    <div style=" flex-direction: column;"  class="col-8 flex h-8rd align-items-center justify-content-center p-5" >
      <Panel id="__panel" :class="scrollNum>31?'_fadeIn':'_fadeOut'" >
        <template #header >
          <div  class="col-12 h-full flex align-items-center justify-content-center">
            <component :is="s2_rightTop_Area" :scrollNum="scrollNum" :startNum="startNumbers[scene_number]" :endNum="startNumbers[scene_number+1]" fromPage="CompQnaPrompt"  />

          </div>
        </template>
        
        <div  class="col-12 h-7rd flex align-items-center justify-content-center">
          <component :is="s2_rightBottom_Area" :scrollNum="scrollNum" :startNum="startNumbers[scene_number]" :endNum="startNumbers[scene_number+1]" fromPage="CompQnaPromptAnswer" style="width:100%; height: 100%;" />

        </div>
    </Panel>
      
     
    </div>

  </div>

</template>
<!--
Q&A 질의 응답
좌측 너구리 우측 Q&A

시작 26 ~45
-->

<script setup>

const props = defineProps(['scrollNum']);
const startNumbers= ref([31,35,40,45,50]);
const scene_number = ref(0);
const scene_chanage = ref(false);

watch(()=>props.scrollNum,(val_af,val_bf)=>{
    let beforeStep = scene_number.value;
    scene_number.value=val_af<startNumbers.value[1]?
        0:
        val_af<startNumbers.value[2]?
        1:
        val_af<startNumbers.value[3]?
        2:
        3
    
});


const s2_rightTop_componentArr = ref([
    h(resolveComponent('CompQnaPrompt')),
    h(resolveComponent('CompQnaPrompt2')),  
    h(resolveComponent('CompQnaPrompt3')),
    h(resolveComponent('CompQnaPrompt4'))
  ]);

 

  const s2_rightTop_Area = computed({
    get:()=>{
      return s2_rightTop_componentArr.value[
       scene_number.value
      ];
    }
  })  

  const s2_rightBottom_componentArr = ref([
    h(resolveComponent('CompQnaPromptAnswer')),
    h(resolveComponent('CompQnaPrompt2Answer')),  
    h(resolveComponent('CompQnaPrompt3Answer')),
    h(resolveComponent('CompQnaPrompt4Answer'))
  ]);

  const s2_rightBottom_Area = computed({
    get:()=>{
      return s2_rightBottom_componentArr.value[
        scene_number.value
      ];
    }
  })

</script>

<style scoped lang="scss">
div#_scene2{
  position: sticky;
  left: 2%;
  top: 5%;
  width: 95%;
  height: 90%;
}

.rightPrompt{
    background-image: url("~/assets/IPad_Pro_12.9_3rd_gen_mockup.png");
    background-size: contain;
    background-repeat: no-repeat;
}

::v-deep(#__panel){
  .p-panel-content{
    border: none !important;

  }
  .p-panel-header{
    background-color: #e7eaed !important;
    border: none !important;


  } 

}
</style>