<template>
  <div class="typing-effect flex speech-bubble col-12  shadow-2 p-3 " :class="scrollNum>=5&&scrollNum<9?'_fadeIn':'_fadeOut'" >
    <ul class="  col-12">
      <li v-for="(sentence, index) in typedText" :key="index" :class="{ active: index === currentIndex }" >
        <div class="text-900 font-bold text-2xl mb-2" style="font-family: 'Noto Sans CJK KR'; font-feature-settings:'kern' " >
          {{ typedText[index] }} </div>
      </li>
    </ul>
  </div>

</template>
<!--
1. 내 소개
'제 소개를 할게요.'
'30세 수...아니'
'30세 수...아 '
'30세 수... '
'30세 수.. '
'30세 수. '
'30세 수 '
'30세 남자이구요. 결혼했어요.'
'전 이렇게 생겼어요.'
''
-----이력 살펴보기
'현재 CPMS를 다니고 있어요.',
'다양한 회사함께 일하면서'
'BackEnd, FrontEnd, SoftWare Design'
'시스템 유지보수 및 개발'


-->
<script setup>
import { onMounted } from 'vue';

const props = defineProps(['scrollNum']);
const typedText=ref(['']);
const currentIndex = ref(0);
const index = ref(0);
const reverse = ref(false);
const sentences=ref(['제 소개를 할게요.',
  '이름 강성민 ',
  '개발 경력 2년',
  '31세 수컷...아! ',
  '왼쪽은 제 사진이에요.',
  '저 닮았나요?'
]);
const replaceSentence=ref('31세 남자');


onMounted(() => {
  startType();
  
})
const startType=()=>{
  if(props.scrollNum>+5&& props.scrollNum<9){
    typeSentences();
    return;
  }
  setTimeout(startType,500);
}

const typeSentences = () => {
  const currentSentence = sentences.value[currentIndex.value];
  typedText.value[currentIndex.value] = currentSentence.slice(0,index.value);
  if(reverse.value){
    index.value--;
  }else{
    index.value++;
  }
  if (currentIndex.value==3){
    if(typedText.value[currentIndex.value].endsWith("!")){
      reverse.value=true;
    }else if(reverse.value&&(typedText.value[currentIndex.value].endsWith("세 ")||index.value==0)){
      reverse.value=false;
      sentences.value[currentIndex.value]=replaceSentence.value;
    }
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