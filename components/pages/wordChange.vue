<template>
    <div class="card" id="_wordChange">
        <div id="__developer" style="position: absolute; float: left; left: 55%; transition: all 2s ease;" :class="self_step>startStep_sc1+2&&self_step<endStep_sc1?'unhide___':'hide___'">
            <div class="text-900 font-bold text-7xl mb-4">
                Developer
            </div>
        </div>
        <CompWcBoard></CompWcBoard>
       
        
    </div>
</template>

<script setup>
const props = defineProps(['scrollNum']);
const self_step = ref(props.scrollNum);
const startStep_sc1 = ref(42);
const endStep_sc1 = ref(56);
const tlOPT = ref([80,40,1,10]);


onMounted(()=>{
    fadeIn(document.getElementById('_wordChange'),props.scrollNum>startStep_sc1.value+2&&props.scrollNum<endStep_sc1.value);

})

watch(()=>props.scrollNum,(val_af,val_bf)=>{
    let beforeStep = self_step.value;
    if(val_af!=beforeStep){
        self_step.value=val_af;
        if(val_af<startStep_sc1.value){
            fadeIn(document.getElementById('_wordChange'),false);

        }else if(val_af>endStep_sc1.value){
            fadeOut(document.getElementById('_wordChange'),false);

        }else {
            fadeOut(document.getElementById('_wordChange'),true);

        }
    }
});

const fadeIn = (div_t,turn)=>{
    if(turn){
        div_t.style.opacity = 1;
    }else{
        div_t.style.opacity = 0;
    }
}
const fadeOut = (div_t,turn)=>{
    if(turn){
        div_t.style.opacity = 1;
    }else{
        div_t.style.opacity = 0;
    }
}

</script>

<style scoped>
#_wordChange{
    position: sticky;
    transition: all 2s ease;
    top: calc( 50% - 4rem );
}



</style>