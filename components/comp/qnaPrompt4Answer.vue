<template>

<Accordion :activeIndex="activeIdx" >
    <AccordionTab header="1. E-Drawing 기반 전자책 플랫폼" >
      <CompQnaPromptAutoAnswer :scrollNum="scrollNum" :content="typedPrompt[0]"></CompQnaPromptAutoAnswer>

    </AccordionTab>
    <AccordionTab header="2. Startup 백앤드 서버 개발자">
      <CompQnaPromptAutoAnswer :scrollNum="scrollNum" :content="typedPrompt[1]"></CompQnaPromptAutoAnswer>

    </AccordionTab>
    <AccordionTab header="3. 명우빌딩">
      <CompQnaPromptAutoAnswer :scrollNum="scrollNum" :content="typedPrompt[2]"></CompQnaPromptAutoAnswer>

    </AccordionTab>
</Accordion>

</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps(['scrollNum','startNum','endNum']);
const activeIdx = ref(0);
const typedPrompt = ref([
  [
          '대학시절부터 태블릿PC를 이용해 전자책, 수업필기, 메모 등을 해왔어요.',
          '여러가지 앱을 사용해보았지만 전자책 열람, 필기, 관리를',
          '각각 다른 프로그램을 사용해야하는 아쉬움이  항상 있었어요.',
          '3가지를 통합한 노팅을 경험한 순간, 우와~~~ 내가 찾던 기능이야 ',
          '개발자 공고문을 보자마자 꼭 참여해야겠다 라고 마음 먹었어요.'
  ],[
          '서버 개발자는 24시간 서버와 함께 살아가는 사람들이죠.',
          '너구리는 밤에도 일할 수 있어요 ^.^',
          'Node JS 기반 서버를 운용하는 일은 매우 매력적인 일이에요.',
          '앱 서비스 기반에 필요한 모든 데이터를 관리하고',
          '최신 기술 동향을 간편하게 접목시켜 볼 수 있죠.',
          '노력하는 만큼 높은 품질의 서비스를 제공할 수 있잖아요.'
  ],[
          '제대로 코딩 공부를 해보려고 코딩 스터디 그룹에 가입했는데',
          '스터디장님이 바로 Quora 개발자_명우 님인데요.',
          '명우님께서 뛰어난 코딩 지식과 기반을 잘 나누어주셔서',
          '탄탄한 코딩 실력을 갖추어가고 있어요.',
          '공고문을 자세히 보다보니 회사 위치가 [역삼로 169, 명우빌딩 6층] (?__)',
          '상상도 못했던 우연이 운명이 되도록 SESHAT에 지원합니다.'
  ]
]);



watch(()=>props.scrollNum,(val_af,val_bf)=>{
    activeIdx.value=val_af<props.startNum+5?
        0:
        val_af<props.startNum+10?
        1:
        2
    
});


</script>

<style scoped>


.acTab{
  border: none;
}

</style>