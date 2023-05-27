<template>
<!-- <CompSelfIntro></CompSelfIntro>
    <CompSelfy></CompSelfy> -->
    <div class="col-12 h-full grid">
        <div  id="sel_introduce" class="col-3 p-6 text-center md:text-left flex align-items-center flex-column justify-content-center" style="flex-direction: column;">       
            <img src="~/assets/self.jpg" alt="Image" id="selfy_img" class="selfy"  width="150" :class="scrollNum<100?'unhide___':'hide___'">

            <ul :class="scrollNum<100?'unhide___':'hide___'" >    
                <li class="flex align-items-center mb-3">
                    <img src="~/assets/assignment_ind_FILL0_wght400_GRAD0_opsz48.png" width="24">
                    <span>강성민 (31)</span>
                </li>
                <li class="flex align-items-center mb-3">
                    <img src="~/assets/nurgul.png" width="24">
                    <span>Dev_Nurgul</span>
                </li>
                <li class="flex align-items-center mb-3">
                    <img src="~/assets/terminal_FILL1_wght400_GRAD0_opsz48.png" width="24">
                    <span>2021.06~</span>
                </li>
                <li class="flex align-items-center mb-3">
                    <img src="~/assets/send_FILL0_wght400_GRAD0_opsz48.png" width="24">
                    <span>munsunty<br>@naver.com</span>
                </li>
            </ul>
        </div>  
        <div class="col-9 h-8rd">
            <PagesHistory  :scrollNum="scrollNum"></PagesHistory>
        </div>

    </div>
   
</template>
<!--
마지막
기존에 만들었던
처음과 2번째
-->
<script setup>
const props = defineProps(['scrollNum']);


</script>

<style scoped>


</style>