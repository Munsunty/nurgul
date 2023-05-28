<template>
  <div class="typing-effect2">
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
const props = defineProps(['scrollNum','content']);

const typedText=ref([]);
const currentIndex = ref(0);
const index = ref(0);
const sentences=ref(props.content);

  
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
    let leng = props.content.length;
    if(currentIndex.value==leng){
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
div.typing-effect2 li{
  overflow: hidden; /* 텍스트 오버플로우 숨김 */
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  margin: 0 auto; /* 가운데 정렬을 위한 마진 설정 */
  font-family: monospace; /* 모노스페이스 글꼴 설정 (옵션) */
  padding-bottom: 5px; /* 리스트 아이템 사이 간격 설정 (옵션) */
}
div.typing-effect2 ul{
  margin-block-start: 10px;
  margin-block-end: 10px;

}

.typing-effect li.active {
  /* 활성화된 문장 스타일링 (옵션) */
  font-weight: bold;
  color: blue;
}



</style>