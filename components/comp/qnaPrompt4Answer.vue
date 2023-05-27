<template>
  <TabView class="tabview-custom" :class="scrollNum>startNum&&scrollNum<endNum?'_fadeIn':'_fadeOut'" style="z-index: 10000;">
    <TabPanel >
        <template #header>
            <span>1. E-Drawing 기반 전자책 플랫폼</span>
        </template>
        <p  class="text-900 font-bold text-xl mb-2 tabview-p"  v-on:style="handleStyleChange">
          대학시절부터 태블릿PC를 이용해 전자책, 수업필기, 메모 등을 해왔어요.<br>
          여러가지 앱을 사용해보았지만 전자책 열람, 필기, 관리를<br>
          각각 다른 프로그램을 사용해야하는 아쉬움이  항상 있었어요.<br>
          3가지를 통합한 노팅을 경험한 순간, 우와~~~ <br>
          백앤드 개발자를 영입한다는 공고를 본 후 꼭 참여 해야겠다는 마음을 가지게 되었어요.
        </p>
    </TabPanel>
    <TabPanel>
        <template #header>
            <span>2. Startup 백앤드 서버 개발자 </span>
        </template>
        <p  class="text-900 font-bold text-xl mb-2 tabview-p" v-on:style="handleStyleChange" >
          서버 개발자는 24시간 서버와 함께 살아가는 사람들이죠.<br>
          너구리는 밤에도 일할 수 있어요 ^.^<br>
          Node JS 기반 서버를 운용하는 일은 매우 매력적인 일이에요.<br>
          앱 서비스 기반에 필요한 모든 데이터를 관리하고<br>
          최신 기술 동향을 간편하게 접목시켜 볼 수 있죠.<br>
          노력하는 만큼 높은 품질의 서비스를 제공할 수 있잖아요.<br>

        </p>
    </TabPanel>
    <TabPanel>
        <template #header>
            <span>3. 명우빌딩 </span>
        </template>
        <p  class="text-900 font-bold text-xl mb-2 tabview-p" v-on:style="handleStyleChange" >
          프로그래머를 시작하며 독학으로 공부했어요.<br>
          그러다가 한계에 부딪혀 코딩 스터디 그룹에 참여했어요.<br>
          스터디장님이 Quora 개발자_명우 님인데요.<br>
          명우님께서 뛰어난 코딩 지식과 기반을 잘 나누어주셔서<br>
          탄탄한 코딩 실력을 갖추어가고 있어요.<br>

          공고문을 자세히 보다보니 회사 위치가 [역삼로 169, 명우빌딩 6층] (?__)<br>

          상상도 못했던 우연이 운명이 되도록 SESHAT에 지원합니다.
        </p>
    </TabPanel>
</TabView>

</template>

<script setup>
const props = defineProps(['scrollNum','startNum','endNum']);

const handleStyleChange = (event)=>{
  const div = event.target;
  console.log(123);
  if (div.style.display === '') {
    div.style.opacity=1;
    // Do something when the display property is changed to "".
  }else{
    div.style.opacity === 0;
  }
}

</script>

<style scoped>
.tabview-p{
  font-family: 'Noto Sans CJK KR';
   font-feature-settings:'kern';  
    line-height: 40px;  
    transition: all 1s ease-in-out;

}
.tabview-custom{
  transition: all 1s ease;

}

</style>