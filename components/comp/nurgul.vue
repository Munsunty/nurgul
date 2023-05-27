<template>
    <div id="nurgul_img" class="selfy grid" >
        <div class="col-12 md:col-12">
            <img src="~/assets/nurgul.png" alt="Image"  style="position: relative;float: left; left: -1rem; top: 8rem;" height="150"  
            :class="[scrollNum>startNumber?'unhide___':'hide___',
                    scrollNum>nextNumber+15?'future':'']"  >
        </div>
        <div class="col-12 md:col-12">
            <div class="text-900 font-bold text-8xl mb-4 text-right p-component" :class="scrollNum>startNumber&&scrollNum<=nextNumber+10?'unhide___':'hide___'"> 
                 Nurgul 
            </div>
        </div>      
    </div>
    
    
    
</template>

<script setup>


const props = defineProps(['scrollNum','startNumber','nextNumber']);
const self_step = ref(props.scrollNum);
const tlOPT = ref([15,20,33,45,20,24]);

onMounted(()=>{
    if(self_step.value<=props.nextNumber){
        moveImg(0);
    }else if(self_step.value<=props.nextNumber+5){
        moveImg((self_step.value-props.nextNumber));
    }else if(self_step.value<=props.nextNumber+10){
        moveImg(5);
    }else if(self_step.value<=props.nextNumber+15){
        moveImg2(self_step.value-props.nextNumber-10);
    }else{
        moveImg2(5);
    }
})

watch(()=>props.scrollNum,(val_af,val_bf)=>{
    let beforeStep = self_step.value;
    if(val_af!=beforeStep){
        self_step.value=val_af;
        if(self_step.value<=props.nextNumber){
            moveImg(0);
        }else if(self_step.value<=props.nextNumber+5){
            moveImg((self_step.value-props.nextNumber));
        }else if(self_step.value<=props.nextNumber+10){
            moveImg(5);
        }else if(self_step.value<=props.nextNumber+15){
            moveImg2(self_step.value-props.nextNumber-10);
        }else{
            moveImg2(5);
        }
    }
});

const  moveImg = (step)=>{
    if(step>5)step=5;
    let temp= document.getElementById('nurgul_img');
    let sCnt = easeOutQuart(step/5);
    let val_top = tlOPT.value[1]+(tlOPT.value[3] - tlOPT.value[1])*(step/5);
    let val_left = tlOPT.value[0]+(tlOPT.value[2] - tlOPT.value[0])*sCnt;
    setStyleRect(temp,val_left, val_top);
}
const  moveImg2 = (step)=>{
    if(step>5)step=5;
    let temp= document.getElementById('nurgul_img');
    let sCnt = easeOutQuart(step/5);
    let val_top = tlOPT.value[3]+(tlOPT.value[5] - tlOPT.value[3])*(step/5);
    let val_left = tlOPT.value[2]+(tlOPT.value[4] - tlOPT.value[2])*sCnt;
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