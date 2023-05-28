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
const sentences=ref(['프로그램 설계-구현, 데이터 모델 설계-구현 ',
 'Rest API 개발, DB 개발, 프로그램 영향도 평가,테스트 케이스 작성 등',
'프로그램 개발 및 유지보수 전반에 필요한 업무를 수행할 수 있어요.',
' ',
'여러 회사들과 프로젝트를 하며 개발자, 비개발자 분들과',
'자유롭게 소통하고 발전적인 토의를 이끌어갈 수 있어요.',
' ',
'매주 코딩스터디 그룹을 통해 자료구조 와 알고리즘을 학습해요.']);




  
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
    if(currentIndex.value==8){
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