<template>
  <div class="typing-effect speech-bubble col-12  shadow-2 p-3 " >
    <ul  class=" col-12">
      <li v-for="(sentence, index) in typedText" :key="index" :class="{ active: index === currentIndex }">
        <div class="text-900 font-bold text-3xl mb-2" style="font-family: 'Noto Sans CJK KR'; font-feature-settings:'kern' ">
          {{ typedText[index] }} </div>
      </li>
    </ul>
  </div>

</template>
<!--
1
-->
<script setup>
import { onMounted } from 'vue';

const props = defineProps(['scrollNum']);
const typedText=ref([]);
const currentIndex = ref(0);
const index = ref(0);
const sentences=ref(
  ['개발자 Nurgul이',
  '참여한 프로젝트에요. ',
  '프로젝트관리 프로그램',
  'Chart 대쉬보드',
  '서버 관리 모듈',
  'Rest API 개발',
  'ETC..'
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