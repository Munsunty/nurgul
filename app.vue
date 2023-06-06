<template>
  <div class="col-12 h-8rd shadow-2 p-3 h-full flex-column flex align-items-center justify-content-center surface-card" style="background-color: antiquewhite;">
    <div class="col-10 grid" style="background-color:aquamarine">
      <div class="col-4 p-2 flex align-items-center justify-content-center" style="background-color: brown;">
        <img src="~/assets/self.jpg" alt="Image" id="selfy_img" class="selfy" height="300">
      </div>
      <div class="col-8 p-2" style="background-color: red;">
        <ul>    
                <li class="flex align-items-center mb-2">
                  <div class="col-1">
                    <img src="~/assets/assignment_ind_FILL0_wght400_GRAD0_opsz48.png" width="30">
                  </div>
                  <div class="col-9">
                    <span class="p-2 text-900 font-bold text-4xl"> 강성민 (31)</span>
                  </div>
                </li>
                <li class="flex align-items-center mb-1">
                  <div class="col-1">
                    <img src="~/assets/nurgul.png" width="36">
                  </div>
                  <div class="col-9">
                    <span class="p-2 text-900  text-xl"> Dev_Nurgul</span>
                  </div>
                </li>
                <li class="flex align-items-center mb-1">
                  <div class="col-1">
                    <img src="~/assets/terminal_FILL1_wght400_GRAD0_opsz48.png" width="36">
                  </div>
                  <div class="col-9">
                    <span class="p-2 text-900  text-xl"> 2021.06~</span>
                  </div>
                </li>
                <li class="flex align-items-center mb-1">
                  <div class="col-1 flex align-items-center ml-1">
                    <i class="pi pi-github" style="font-size: 30px"></i>
                  </div>
                  <div class="col-9">
                    <span class="p-1 text-900  text-xl"> munsunty@naver.com</span>
                  </div>
                </li>
                <li class="flex align-items-center mb-1">
                  <div class="col-1 flex align-items-center">
                    <img src="~/assets/send_FILL0_wght400_GRAD0_opsz48.png" width="36">
                  </div>
                  <div class="col-9">
                    <span class="p-2 text-900  text-xl"> munsunty@naver.com</span>
                  </div>
                </li>
            </ul>
      </div>
    </div>
  
  </div>
</template>

<script setup>

</script>

<style >
  ul{
    list-style-type: none; /* 리스트 스타일 제거 */
    padding: 0;
    margin: 0;
  }
  li {
    overflow: hidden; /* 텍스트 오버플로우 숨김 */
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
    margin: 0 auto; /* 가운데 정렬을 위한 마진 설정 */
    font-family: monospace; /* 모노스페이스 글꼴 설정 (옵션) */
    margin-bottom: 1rem;
  }

</style>