<template>
  <div class="typing-effect">
    <ul :class="scrollNum>startNum&&scrollNum<endNum?'_fadeIn':'_fadeOut'">
      <li v-for="(sentence, index) in sentences" :key="index" :class="{ active: index === currentIndex }">
        <div class="text-900 font-bold text-3xl mb-1" style="font-family: 'Noto Sans CJK KR'; font-feature-settings:'kern' ">
          3. [세샤트] <img src="~/assets/seshat.png" alt="Image"  height="70"  style="z-index: -10;">
          {{sentence }} </div>
        </li>
    </ul>

  </div>

</template>

<script setup>

import { onMounted } from 'vue';
const props = defineProps(['scrollNum','startNum','endNum']);

    
const typedText=ref([]);
const currentIndex = ref(0);
const index = ref(0);
const sentences=ref([' 노팅에 참여하고 싶은 이유가 무엇인가요? ']);


onMounted(() => {
  // typedText.value=sentences.value;

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

  setTimeout(typeSentences, 200); // 다음 문장이 나타나는 간격 (ms)
}

</script>

<style scoped>


</style>