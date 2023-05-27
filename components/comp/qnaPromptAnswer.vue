<template>
  <div class="typing-effect">
    <ul >
      <li v-for="(sentence, index) in typedText" :key="index" :class="{ active: index === currentIndex }">
        <div class="text-900 font-bold text-2xl mb-2" style="font-family: 'Noto Sans CJK KR'; font-feature-settings:'kern' ">
          {{ typedText[index] }} </div>
      </li>
    </ul>
  </div>

</template>
<!--  27~ 29 -->
<script setup>

import { onMounted } from 'vue';
const props = defineProps(['scrollNum','startNum','endNum']);

const typedText=ref([]);
const currentIndex = ref(0);
const index = ref(0);
const sentences=ref([
  '밤 늦게까지 프로그램 개발을 하고',
  '잠에 들 때면 너구리 같구나 라는 느낌을 받았어요.',
  '* 너구리 닮음'
]);



onMounted(() => {
  startType();
  
})
const startType=()=>{
  if(props.scrollNum>props.startNum+1&& props.scrollNum<props.endNum){
    typeSentences();
    return;
  }
  setTimeout(startType,500);
}

const typeSentences = () => {
  const currentSentence = sentences.value[currentIndex.value];
  typedText.value[currentIndex.value] = currentSentence.slice(0,index.value);
  index.value++;
  if(index.value>currentSentence.length){
    index.value=0;
    currentIndex.value++;
    if(currentIndex.value==3){
      return ;
    }
  }
  if(typedText.value[currentIndex.value]){
    typedText.value[currentIndex.value] += ' |';
  }

  setTimeout(typeSentences, 50); // 다음 문장이 나타나는 간격 (ms)
}

</script>

<style scoped>

.typing-effect li.active {
  /* 활성화된 문장 스타일링 (옵션) */
  font-weight: bold;
  color: blue;
}

</style>