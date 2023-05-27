<template>
  <div id="mainView" >
    <img src="../assets/background/social-media-5187243_1920.png" v-show="pickCnt==0" >
    <img src="../assets/background/windows-6938478_1920.jpg" v-show="pickCnt==1">
    <img src="../assets/background/neurons-7420670_1920.jpg" v-show="pickCnt==2">
    <img src="../assets/background/watercolor-4117017.png" v-show="pickCnt==3">
  </div>

</template>

<script setup>

const pickCnt = ref(0);

const changeBackGround= setInterval(()=>{
  pickCnt.value++;
  if(pickCnt.value>3){
    pickCnt.value=0
  }
},30000);
</script>

<style lang="scss" scoped>
#mainView{
  width: 100%;
  height: 100%;

  img{
    width: 100%;
    height: 100%;
  }
}

</style>