<template>
    <div class="card col-12 flex" style="flex-direction: column;" id="_history">
        <div class="text-900 col-12 font-bold text-6xl mb-4 text-center" :class="scrollNum>startStep_h1+2?'_fadeIn':'_fadeOut'"> 이력 </div>
        <div class="grid col-12">
            <div class="col-12 md:col-4" >
                <CompWorkList :class="scrollNum>startStep_h1+2?'_fadeIn':'_fadeOut'"></CompWorkList>
            </div>
            <div class="col-12 md:col-4">
                <CompProjectList :class="scrollNum>startStep_h1+4?'_fadeIn':'_fadeOut'"></CompProjectList>
            </div>
            <div class="col-12 md:col-4">
                <CompStackList :class="scrollNum>=startStep_h1+5?'_fadeIn':'_fadeOut'"></CompStackList>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['scrollNum']);
const self_step = ref(props.scrollNum);
const startStep_h1 = ref(65);
const endStep_h1 = ref(100);

const tlOPT = ref([1,10,1,10]);


onMounted(()=>{
    fadeOut(document.getElementById('_history'),props.scrollNum>=startStep_h1.value&&props.scrollNum<endStep_h1.value?true:false);
    
})

watch(()=>props.scrollNum,(val_af,val_bf)=>{
    let beforeStep = self_step.value;
    if(val_af!=beforeStep){
        self_step.value=val_af;
   
        if(val_af<startStep_h1.value){
            fadeIn(document.getElementById('_history'),false);
        }else if(val_af>endStep_h1.value){
            fadeOut(document.getElementById('_history'),false);
        }else {
            fadeOut(document.getElementById('_history'),true);
        }
    }
});

const fadeOut = (div_t,turn)=>{
    if(turn){
        div_t.style.opacity = 1;
        setStyleRect(div_t,tlOPT.value[0],tlOPT.value[1]);
    }else{
        div_t.style.opacity = 0;
        setStyleRect(div_t,tlOPT.value[0],-50);
    }
}

const fadeIn = (div_t,turn)=>{
    if(turn){
        div_t.style.opacity = 1;
        setStyleRect(div_t,tlOPT.value[0],tlOPT.value[1]);
    }else{
        div_t.style.opacity = 0;
        setStyleRect(div_t,tlOPT.value[0],150);
    }
}


const setStyleRect=(t1,x,y)=>{
    t1.style.left = x+"%";
    t1.style.top = y+"%";
}

</script>

<style scoped>
#_history{
    position: sticky;
    transition: all 2s ease;
}


</style>