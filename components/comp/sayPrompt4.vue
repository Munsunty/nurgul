<template>
  <div class="typing-effect speech-bubble col-12  shadow-2 p-3 " >
    <ul  class=" col-12">
      <li v-for="(sentence, index) in typedText" :key="index" :class="{ active: index === currentIndex }">
        <div class="text-900 font-bold text-2xl mb-2" >
          {{ typedText[index] }} </div>
      </li>
    </ul>
  </div>

</template>

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
  '"배움은 인생의 가장 큰 기쁨이다."',
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