<template>
    
    <img src="~/assets/self.jpg" alt="Image" id="selfy_img" class="selfy"   :class="scrollNum<endnumber?'unhide___':'hide___'">

    
</template>

<script setup>
const props = defineProps(['scrollNum','endnumber']);

const self_step = ref(props.scrollNum);
const tlOPT = ref([60,20,86,4]);

onMounted(()=>{
    let temp= document.getElementById('selfy_img');
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
    }
});

const  moveImg = (step)=>{
    let temp= document.getElementById('selfy_img');
    let sCnt = easeOutQuart(step/5);
    let val_top = tlOPT.value[1]+(tlOPT.value[3] - tlOPT.value[1])*sCnt;
    let val_left = tlOPT.value[0]+(tlOPT.value[2] - tlOPT.value[0])*(step/5);
    setStyleRect(temp,val_left, val_top);
    temp.style.width = (350-200*(sCnt))+"px";
    temp.style.height = (450-250*(sCnt))+"px";
    
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
img.selfy{
    position: absolute;
    float: left;
    transition: all 2s;
}




</style>