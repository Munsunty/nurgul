<template>
<div class="col-12  h-8rd shadow-2 p-3 flex  surface-card" style="border-radius: 6px" :class="scrollNum>5&&scrollNum<9?'_fadeIn':'_fadeOut'">
    <div class="col-12 md:col-6 pt-4 pb-4 mb-2 mt-2 text-center md:text-left flex align-items-center  " >
        <img src="~/assets/self.jpg" alt="Image" id="selfy_img" width="250"  >

    </div>  
    <div  class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center " >         
        <section :class="scrollNum>5&&scrollNum<9?'_fadeIn':'_fadeOut'">    
            <li class="flex align-items-center mb-3 justify-content-center">
                <div class="md:col-3 p-2">
                    <img src="~/assets/assignment_ind_FILL0_wght400_GRAD0_opsz48.png" width="36" >
                </div>
                
                <div class="col-9 text-900 font-bold text-2xl mb-2 text-left" style="font-family: 'Noto Sans CJK KR'; font-feature-settings:'kern' ">강성민 (31) </div>
            </li>
            <li class="flex align-items-center mb-3 justify-content-center">
                <div class="md:col-3 p-2">
                    <img src="~/assets/terminal_FILL1_wght400_GRAD0_opsz48.png" width="36" >
                </div>
                <div class="col-9  text-900 font-bold text-3xl mb-2 p-2 text-left" style="font-family: 'Noto Sans CJK KR'; font-feature-settings:'kern' ">2021.06~</div>
            </li>
            <li class="flex align-items-center mb-3 justify-content-center">
                <div class="md:col-3 p-2">
                    <img src="~/assets/send_FILL0_wght400_GRAD0_opsz48.png" width="36">
                </div>
                <div class="col-9 text-900 font-bold text-3xl mb-2 text-left" style="font-family: 'Noto Sans CJK KR'; font-feature-settings:'kern' ">munsunty<br>@naver.com</div>
            </li>
           
        </section>
    </div>
</div>
    
</template>


<script setup>
const props = defineProps(['scrollNum']);

</script>

<style scoped>

</style>