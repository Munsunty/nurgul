<template>
    <div class="card" style="position: sticky;">
          <ScrollPanel style="width: 100%; height: 98vh" class="custombar1" id="mainScroll" >
              <div id="temp" style="width: 100%; height: 30000px;">
                <div id="__main">
                  <component :is="bomWorkArea" :scrollNum="scrollNum" fromPage="PagesBase" />
  
                </div>
              </div>
          </ScrollPanel>
         
          <CompIpadImage  :scrollNum="scrollNum" v-if="scrollNum<=scene_count[1]+5" ></CompIpadImage>
  
      </div>
  
    <div id="temp1" v-show="scrollNum<=4"   :class="scrollNum<=3?'_fadeIn':'_fadeOut'">
      <!-- <div id="temp1" > -->
      <p>1. 전체화면으로 화면을 설정해주세요. </p>
      <p>2. 아래로 스크롤 해주세요. </p>
      <!-- {{ scrollNum }} -->
     
    </div>
  
  </template>
  
  <script setup>
    const scrollNum = ref(0);
    const isScroll = ref(false);
    const scrollTarget = ref(null);
    const scrollParentTarget = ref(null);
    const scene_count = ref([25,60,75,100]);
    const autoTF = ref(false);
    
  
  
    const scroll_function =()=>{
      if(autoTF.value==false){
        if(isScroll.value){
          let tnt = scrollTarget.value.style.top.substring(5,scrollTarget.value.style.top.indexOf('%'));
          scrollNum.value  = parseFloat(tnt);
  
        }else if(typeof document !='undefined'){
          scrollTarget.value=document.getElementById('mainScroll').lastChild;
          scrollParentTarget.value=window.getComputedStyle(document.getElementById('mainScroll'));
          if(scrollTarget.value!=null){
            isScroll.value=true;
          }
        }
      }
      
    }
    setInterval(scroll_function,50);
    
    const componentArr = ref([
      h(resolveComponent('PagesScene1st')),
      h(resolveComponent('PagesScene2nd')),
      h(resolveComponent('PagesScene3st')),
      h(resolveComponent('PagesScene4st')),
      h(resolveComponent('PagesLastView'))
    ]);
  
    const bomWorkArea = computed({
      get:()=>{
        return componentArr.value[
          scrollNum.value<=scene_count.value[0]?
          0:
          scrollNum.value<=scene_count.value[1]?
          1:
          scrollNum.value<=scene_count.value[2]?
          2:
          scrollNum.value<=scene_count.value[3]?
          3
          :4
        ];
      }
    })
  
  </script>
  
  <style  lang="scss">
  body{
    margin: 2px 0 0 0;
    overflow:hidden;
    width: 100%;
    height: 100%;
  }
  div#__main{
    position: sticky;
    top: 1vh;
    width: 100%;
    height: 98vh;
  }
  
  .h-8rd{
    height: 85%!important;
  }
  
  .h-7rd{
    height: 76%!important;
  }
  
  .h-5rd{
    height: 50%!important;
  }
  
  .h-3rd{
    height: 33%!important;
  }
  
  .typing-effect ul {
    list-style-type: none; /* 리스트 스타일 제거 */
    padding: 0;
    margin: 0;
  
  }
  
  .typing-effect li {
    overflow: hidden; /* 텍스트 오버플로우 숨김 */
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
    margin: 0 auto; /* 가운데 정렬을 위한 마진 설정 */
    font-family: monospace; /* 모노스페이스 글꼴 설정 (옵션) */
    padding-bottom: 5px; /* 리스트 아이템 사이 간격 설정 (옵션) */
    margin-bottom: 1rem;
  }
  
  
  .typeShowing{
    animation: typing_word 4s steps(40, end);
  }
  @keyframes typing_word {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  
  
  div#temp1{
    position: absolute;
    top: 70%;
    left: 45%;
  }
  
  .p-scrollpanel.custombar1 .p-scrollpanel-wrapper {
      border-right: 10px solid var(--surface-ground);
  }
  
  .p-scrollpanel.custombar1 .p-scrollpanel-bar {
      background-color: var(--primary-300);
      opacity: 1;
      transition: background-color 0.3s;
  }
  
  .p-scrollpanel.custombar1 .p-scrollpanel-bar:hover {
      background-color: var(--primary-400);
  }
  
  ._fadeOut{
   opacity: 0;
   transition: all 1s ease;
  }
  ._fadeIn{
   opacity: 1;
   transition: all 2s ease;
  }
  
  .unhide___{
    animation: _apper 1s ease;
    animation-fill-mode: forwards;
  
  }
  .hide___{
      animation: disapper 1s ease;
      animation-fill-mode: forwards;
  }
  .future{
      animation: future 5s linear infinite;
  }
  
  @keyframes future {
      from{
          transform: scale(1);
      }
      to{
          transform: scale(3);
      }
  }
  
  @keyframes _apper {
    from{
          opacity: 0;
    }
    to{
        opacity: 1;
    }
  }
  
  @keyframes disapper{
      from{
          opacity: 1;
      }
      to{
          opacity: 0;
      }
  }
  
  
  .speech-bubble {
      position: relative;
      background: #ebebeb;
      border-radius: .4em;
    
  }
  
  .p-accordion-content{
    border: none !important;
    padding: 0 !important;
  }
  .p-accordion-header {
    border: none !important;
  
  }
  
  
  </style>