<template>
  <div class="typing-effect ">
    <ul :class="scrollNum>startNum+1&&scrollNum<endNum?'_fadeIn':'_fadeOut'">
      <li >
        <div class="text-900 font-bold text-3xl mb-2">
          {{ sentences }} </div>
      </li>
      <!-- <li v-for="(sentence, index) in typedText" :key="index" :class="{ active: index === currentIndex }">
        
      </li> -->
    </ul>
  </div>

</template>

<script setup>

import { onMounted } from 'vue';
const props = defineProps(['scrollNum','startNum','endNum']);
const typedText=ref([]);
const currentIndex = ref(0);
const index = ref(0);
const sentences=ref('0. 왜 개발자명이 Nurgul 인가요?');
  
onMounted(() => {
  // typeSentences();


})

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

  setTimeout(typeSentences, 100); // 다음 문장이 나타나는 간격 (ms)
}

</script>

<style scoped>

.typing-effect li.active {
  /* 활성화된 문장 스타일링 (옵션) */
  font-weight: bold;
  color: blue;
}

</style>