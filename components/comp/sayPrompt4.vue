<template>
  <div class="typing-effect  speech-bubble col-12  shadow-2 p-3 " >
    <div class="arrow-bublle"></div>
    <ul  class="   col-12">
      <li v-for="(sentence, index) in sentences" :key="index" :class="{ active: index === currentIndex }">
        <div class="text-900 font-bold text-2xl mb-2" style="font-family: 'Noto Sans CJK KR'; font-feature-settings:'kern' ">
          {{ sentences[index] }} </div>
      </li>
    </ul>
  </div>

</template>
<!--
1. 내 소개
'제 소개를 할게요.'
'30세 수...아니'
'30세 수...아 '
'30세 수... '
'30세 수.. '
'30세 수. '
'30세 수 '
'30세 남자이구요. 결혼했어요.'
'전 이렇게 생겼어요.'
''
-----이력 살펴보기
'현재 CPMS를 다니고 있어요.',
'다양한 회사함께 일하면서'
'BackEnd, FrontEnd, SoftWare Design'
'시스템 유지보수 및 개발'


-->
<script setup>
import { onMounted } from 'vue';

const props = defineProps(['scrollNum' ]);
const typedText=ref([]);
const currentIndex = ref(0);
const index = ref(0);
const sentences=ref(
  ['너구리는 낮에 일하고',
  '밤에는 공부한답니다.',
  '배움에는 끝이 없으니까요.',
  ' ',
  '"배움은 인생의 가장 큰 기쁨이다." ',
  '- 알버트 아인슈타인'
]);










onMounted(() => {
  typeSentences();
})

const typeSentences = () => {
  const currentSentence = sentences.value[currentIndex.value];
  typedText.value[currentIndex.value] = currentSentence.slice(0,index.value);  
  index.value++;


  if(index.value>currentSentence.length){
    index.value=0;
    currentIndex.value++;
    if(currentIndex.value>=sentences.value.length){
      return ;
    }
  }
  if(typedText.value[currentIndex.value]){
    typedText.value[currentIndex.value] += ' |';
  }else{
    typedText.value[currentIndex.value] = ' |';
  }

  setTimeout(typeSentences, 50); // 다음 문장이 나타나는 간격 (ms)
}

</script>

<style scoped>

</style>