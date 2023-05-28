<template>
  <div class="typing-effect">
    <ul>
      <li v-for="(sentence, index) in typedText" :key="index" :class="{ active: index === currentIndex }">
        <div >
          {{ typedText[index] }} </div>
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
const sentences=ref(['고등학교시절, 물리학에 매료되어 물리교육을 전공하게 되었고',
'사범대를 다니다 보니 기회가 있어서 교사가 될 수 있었어요.',
'그렇지만 새로운 것을 배우고 만들어 내는 일을 하고 싶었어요.',
'대학시절 연구실에서 Matlab으로 시작한 프로그래밍을 떠올리며',
'프로그래머가 되기로 마음먹었어요.']);
  
onMounted(() => {
  startType();
  
})
const startType=()=>{
  if(props.scrollNum>props.startNum&& props.scrollNum<props.endNum){
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
    if(currentIndex.value==6){
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