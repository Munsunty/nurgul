<template>
    <div class="card" id="_history" >
        <div class="text-900 font-bold text-6xl mb-4 text-center" :class="self_step>startStep_sc1+2&&self_step<endStep_sc1?'_fadeIn':'_fadeOut'"> Passed </div>
        <div class="col-12 md:col-12" id="_stepChange" :class="self_step>startStep_sc1+3&&self_step<endStep_sc1?'_fadeIn':'_fadeOut'">
            <Steps
                :model="items"
                :readonly="true"
                :exact="false"
                :pt="{
                    root: { class: 'w-12' }
                }"
            />
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['scrollNum']);
const self_step = ref(props.scrollNum);
const startStep_sc1 = ref(26);
const endStep_sc1 = ref(38);
const items = ref([
    {
        label: 'Personal'
    
    },
    {
        label: 'Seat'
    },
    {
        label: 'Payment'
    },
    {
        label: 'Confirmation'
    }
]);

onMounted(()=>{
    fadeOut(document.getElementById('_history'),props.scrollNum>=startStep_sc1.value&&props.scrollNum<endStep_sc1.value?true:false);
    
})

watch(()=>props.scrollNum,(val_af,val_bf)=>{
    let beforeStep = self_step.value;
    if(val_af!=beforeStep){
        self_step.value=val_af;
   
        if(val_af<startStep_sc1.value){
            fadeIn(document.getElementById('_history'),false);
        }else if(val_af>endStep_sc1.value){
            fadeOut(document.getElementById('_history'),false);
        }else {
            fadeOut(document.getElementById('_history'),true);
        }
    }
});

const fadeOut = (div_t,turn)=>{
    if(turn){
        div_t.style.opacity = 1;
        setStyleRect(div_t,2,20);
    }else{
        div_t.style.opacity = 0;
        setStyleRect(div_t,2,-50);
    }
}

const fadeIn = (div_t,turn)=>{
    if(turn){
        div_t.style.opacity = 1;
        setStyleRect(div_t,2,20);
    }else{
        div_t.style.opacity = 0;
        setStyleRect(div_t,2,150);
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
    top: 15%;
    left: 2%;
    width: 80%;
    transition: all 2s ease;
}
#_stepChange{
    position: sticky;
    top: 20%;
    left: 30%;
    display: flex;
    justify-content: center;
    transition: all 2s ease;

}


</style>