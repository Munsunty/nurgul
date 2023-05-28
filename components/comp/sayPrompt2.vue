<template>
  <div class="typing-effect speech-bubble col-12  shadow-2 p-3 " :class="scrollNum<15?'_fadeIn':'_fadeOut'">
    <ul  class="  col-12">
      <li v-for="(sentence, index) in typedText" :key="index" :class="{ active: index === currentIndex }">
        <div class="text-900 font-bold text-2xl mb-2" >
          {{ typedText[index] }} </div>
      </li>
    </ul>
  </div>

</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps(['scrollNum']);
const typedText=ref([]);
const currentIndex = ref(0);
const index = ref(0);
const reverse = ref(false);


const sentences=ref(['개발 2년차',
  '능수능란한 일처리',
  '프로그램 신규 개발 설계부터',
  '실시간 서버 관리 ',
  '#개발',
  '#아이디어',
  '#함께 일하기 좋은',
  '#도전적인'
]);




onMounted(() => {
  typeSentences();
})

const typeSentences = () => {
  const currentSentence = sentences.value[currentIndex.value];
  typedText.value[currentIndex.value] = currentSentence.slice(0,index.value);
  if(reverse.value){
    index.value--;
  }else{
    index.value++;
  }
  


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