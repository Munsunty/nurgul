<template>
  <div  class="typing-effect col-10 flex align-items-center justify-content-center" >
    <ul :class="scrollNum<4?'_fadeIn':'_fadeOut'" >
      <li><div class="text-900 font-bold text-7xl mb-2 text-left" style="font-family: 'Noto Sans CJK KR'; font-feature-settings:'kern' ">안녕하세요.</div></li>
      <li><div class="text-900 font-bold text-7xl mb-2 text-center" style="font-family: 'Noto Sans CJK KR'; font-feature-settings:'kern' ">개발자 Nurgul</div></li>
      <li><div class="text-900 font-bold text-7xl mb-2 text-right" style="font-family: 'Noto Sans CJK KR'; font-feature-settings:'kern' ">입니다.</div></li>
    </ul>
  </div>
</template>
<!--
인사말
1. 글자 왼중오
2. 1,2번 크기 같게
3. 약간 작게
4. 다 스티키하게 움직이도록
-->

<script setup>
const props = defineProps(['scrollNum']);


</script>

<style scoped>
.typing-effect ul{
  width: 90%
}

</style>