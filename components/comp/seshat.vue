<template>
    <div id="seshat_img" class="selfy grid" >
        <div class="col-12 md:col-12">
            <div class="text-900 font-bold text-8xl mb-4 text-left" :class="scrollNum>startNumber+4&& scrollNum<=startNumber+10?'unhide___':'hide___'"> 
                Noteing 
            </div>
        </div>
        <div class="col-12 md:col-12">
            <img src="~/assets/seshat.png" alt="Image"  style="position: relative;float: right; right: -2rem; top: -10rem;" height="150" 
            :class="[scrollNum>startNumber+4?'unhide___':'hide___',
                   scrollNum>startNumber+15?'future':'']"  >

        </div>
    </div>    
    
</template>

<script setup>
const props = defineProps(['scrollNum','startNumber']);
const self_step = ref(props.scrollNum);
const tlOPT = ref([35,16,38,40]);

onMounted(()=>{
    moveImg(0);
})

watch(()=>props.scrollNum,(val_af,val_bf)=>{
    let beforeStep = self_step.value;
    if(val_af!=beforeStep){
        self_step.value=val_af;
        if(val_af<=props.startNumber+10){
            moveImg(0);    
        }else if(val_af<=props.startNumber+15){
            moveImg((val_af-props.startNumber-10));
        }else{
            moveImg(5);
        }
    }
});

const  moveImg = (step)=>{
    let temp= document.getElementById('seshat_img');
    let sCnt = easeOutQuart(step/5);
    let val_top = tlOPT.value[1]+(tlOPT.value[3] - tlOPT.value[1])*sCnt;
    let val_left = tlOPT.value[0]+(tlOPT.value[2] - tlOPT.value[0])*(step/5);
    setStyleRect(temp,val_left, val_top);
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
.selfy{
    position: absolute;
    float: left;
    transition: all 2s;
}




</style>