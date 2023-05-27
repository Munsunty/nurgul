<template>
  <div id="_mainImage" class="flex align-items-center justify-content-center " style="flex-direction: column;" >
    <img id="__nurgul" src="~/assets/nurgul.png" width="250">
    
  </div>

</template>

<script setup>

const props = defineProps(['scrollNum']);


</script>

<style scoped>
div#_mainImage{
  position: sticky;
  height: 100%;
  width: 100%;
}
div#_mainImage img{
  
  transition: all 1.5s ease;  
}
img#__nurgul{
  position: sticky;
  top: 12.5%;
  left: 0;
  z-index: 1000;
}


</style>