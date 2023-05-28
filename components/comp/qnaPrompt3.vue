<template>
  <div class="typing-effect">
    <ul :class="scrollNum>startNum&&scrollNum<endNum?'_fadeIn':'_fadeOut'">
      <li v-for="(sentence, index) in sentences" :key="index" :class="{ active: index === currentIndex }">
        <div class="text-900 font-bold text-3xl mb-1" >
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
const sentences=ref(['2. 2년동안 프로그래머로 일하면서 얼마나 성장했나요? ']);


onMounted(() => {
  // setTimeout(()=>{
  //   typedText.value=sentences.value;
  // },500);
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

.typing-effect li.active {
  /* 활성화된 문장 스타일링 (옵션) */
  font-weight: bold;
  color: blue;
}

</style>