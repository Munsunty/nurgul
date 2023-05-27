<template>
  <span>환영합니다. </span>
  <span class="p-menuitem-text">CoreQ⁺를 사용해주셔서 감사합니다.</span>
  <span>종료시간 : {{todayNow}}</span>
</template>

<script setup>
const time = ref(1000);
const todayNow = ref(time);

let interval = setInterval(()=>{
  getTime();
},1000);

setTimeout(()=>{
  clearInterval(interval);
},1000000);


function getTime(){
  return time.value--;
}
</script>

<style scoped>

</style>