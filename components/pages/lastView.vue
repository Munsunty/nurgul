<template>
    <div class="card" id="_lastView">
        <div class="col-12 md:col-12">
            <div class="text-900 font-bold text-8xl mb-4 text-center" :class="self_step>startStep+4?'_fadeIn':'_fadeOut'"> 
            X
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['scrollNum']);
const self_step = ref(props.scrollNum);
const startStep = ref(60);
const endStep_h1 = ref(71);

const tlOPT = ref([13,57,88,8]);

onMounted(()=>{
    fadeIn(document.getElementById('_lastView'),props.scrollNum>=startStep.value&&props.scrollNum<endStep_h1.value);
})

watch(()=>props.scrollNum,(val_af,val_bf)=>{
    let beforeStep = self_step.value;
    if(val_af!=beforeStep){
        self_step.value=val_af;
   
        if(val_af<startStep.value){
            fadeIn(document.getElementById('_lastView'),false);
        }else if(val_af>endStep_h1.value){
            fadeOut(document.getElementById('_lastView'),false);
        }else {
            fadeOut(document.getElementById('_lastView'),true);
        }
        
    }
});

const fadeOut = (div_t,turn)=>{
    if(turn){
        div_t.style.opacity = 1;
        setStyleRect(div_t,2,50);
    }else{
        div_t.style.opacity = 0;
        setStyleRect(div_t,2,-50);
    }
}

const fadeIn = (div_t,turn)=>{
    if(turn){
        div_t.style.opacity = 1;
        setStyleRect(div_t,2,50);
    }else{
        div_t.style.opacity = 0;
        setStyleRect(div_t,2,150);
    }
}


const setStyleRect=(t1,x,y)=>{
    t1.style.left = x+"%";
    t1.style.top = 'calc( '+ y+"%" +' - 6rem )';
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
#_lastView{
    position: sticky;
    width: 100%;
    transition: all 2s ease;
}


</style>