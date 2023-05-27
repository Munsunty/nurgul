<template>
    
    <div id="selfIntro" class="grid grid-nogutter surface-section text-800" :class="scrollNum<15?'unhide___':'hide___'">
        <section id="catchprase">
            <span class="block text-6xl font-bold mb-1">Priase The Lord</span>
            <div class="text-6xl text-primary font-bold mb-3">Trust Him</div>
        </section>       
    </div>
    <div  id="sel_introduce" class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center " >           
        <section :class="scrollNum<props.endnumber?'unhide___':'hide___'" >    
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
           
        </section>
    </div>  
    <Divider layout="vertical" :class="props.scrollNum>10 &&props.scrollNum<props.endnumber?'unhide___':'hide___'"/>
    
</template>

<script setup>
const props = defineProps(['scrollNum','endnumber']);
const self_step = ref(props.scrollNum);
const tlOPT = ref([20,40,83,30]);

onMounted(()=>{
    moveImg(props.scrollNum>1?5:0);
    
})
watch(()=>props.scrollNum,(val_af,val_bf)=>{
    let beforeStep = self_step.value;
    if(val_af!=beforeStep){
        self_step.value=val_af;
        if(val_af<=5){
            moveImg(val_af);
        }else{
            moveImg(5);
        }
        if(val_af>7){
            fadeOut(document.getElementById('selfIntro'),false);
        }else {
            fadeOut(document.getElementById('selfIntro'),true);
        }
    }
});

const  moveImg = (step)=>{
    let temp= document.getElementById('sel_introduce');
    let sCnt = easeOutQuart(step/5);
    let val_top = tlOPT.value[1]+(tlOPT.value[3] - tlOPT.value[1])*sCnt;
    let val_left = tlOPT.value[0]+(tlOPT.value[2] - tlOPT.value[0])*(step/5);
    setStyleRect(temp,val_left, val_top);  
}

const fadeOut = (div_t,turn)=>{
    if(turn){
        div_t.style.opacity = 1;
        setStyleRect(div_t,20,20);
    }else{
        div_t.style.opacity = 0;
        setStyleRect(div_t,20,-50);
    }
    
}

const setStyleRect=(t1,x,y)=>{
    t1.style.left = x+"%";
    t1.style.top = y+"%";
}
const easeOutQuart= (x ) => {
    const c5 = (2 * Math.PI) / 4.5;

    return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
    : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
}


</script>

<style scoped>
div#selfIntro{
    position: absolute;
    float: left;
    top:20%;
    left :20%;
    transition: all 2s ease;
}
div#sel_introduce{
    position: absolute;
    float: left;
    transition: all 2s;
}

.p-divider{
    position: absolute;
    float: left;
    top:0%;
    left : 83%;
    transition: all 2s ease;
}




</style>