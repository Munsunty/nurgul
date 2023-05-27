<template>
    <div  :class="scrollNum<=50?'_fadeIn':'_fadeOut'" style="z-index: 10;">
        <img id="__ipad"  src="~/assets/IPad_Pro_12.9_3rd_gen_mockup.png"   >
        <img id="__noteing" src="~/assets/seshat.png" alt="Image"  :class="scrollNum<=startNumber+5?'_fadeIn':'_fadeOut'">
    </div>
     


</template>

<script setup>

const props = defineProps(['scrollNum']);

const startNumber=ref(25);
const self_step = ref(props.scrollNum);
const tlOPT = ref([45,28,32,1]);
const IPOPT = ref([52,37,58.5,30]);

const tlOPT_2 = ref([[-80,-4,-74],[0,0,0]]);


onMounted(()=>{
    moveImg(0);
})

watch(()=>props.scrollNum,(val_af,val_bf)=>{
    let beforeStep = self_step.value;
    if(val_af!=beforeStep){
        self_step.value=val_af;
        if(val_af<=startNumber.value){
            moveImg(0);    
        }else if(val_af<=startNumber.value+5){
            moveImg((val_af-startNumber.value));
        }else{
            moveImg(5);
        }
    }
});

const  moveImg = (step)=>{
    let temp= document.getElementById('__ipad');
    let temp2 = document.getElementById('__noteing');
    let sCnt = easeOutQuart(step/5);
    let val_top = tlOPT.value[1]+(tlOPT.value[3] - tlOPT.value[1])*sCnt;
    let val_left = tlOPT.value[0]+(tlOPT.value[2] - tlOPT.value[0])*(step/5);
    let rectX = tlOPT_2.value[0][0]+(tlOPT_2.value[1][0]-tlOPT_2.value[0][0])*(step/5);
    let rectY = tlOPT_2.value[0][1]+(tlOPT_2.value[1][1]-tlOPT_2.value[0][1])*(step/5);
    let rectZ = tlOPT_2.value[0][2]+(tlOPT_2.value[1][2]-tlOPT_2.value[0][2])*(step/5);
    temp.style.width = 20 + (66-20)*(step/5) +'%';

    temp2.style.width = 80 + (200-80)*(step/5) +'px';
    temp2.style.opacity = 1 - sCnt;


    let val_top2 = IPOPT.value[1]+(IPOPT.value[3] - IPOPT.value[1])*sCnt;
    let val_left2 = IPOPT.value[0]+(IPOPT.value[2] - IPOPT.value[0])*sCnt;
    
    

    rotateRect(temp,rectX,rectY,rectZ);
    setStyleRect(temp,val_left, val_top);
    
    rotateRect(temp2,rectX,rectY,rectZ);
    setStyleRect(temp2,val_left2, val_top2);
}

const setStyleRect=(t1,x,y)=>{
    t1.style.left = x+"%";
    t1.style.top = y+"%";
    
}
const rotateRect=(t1,x,y,z)=>{
  t1.style.transform='rotateX('+x+'deg) '+'rotateY('+y+'deg) '+'rotateZ('+z+'deg)';
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

img#__ipad{
  position: absolute;
  float: left;
  /* width: 250px; */
  /* transform: rotateX(-80deg) rotateY(-4deg) rotateZ(-74deg);  */
  transition: all 1s ease;  
}

img#__noteing{
  position: absolute;
  float: left;
  /* width: 80px; */
  /* transform: rotateX(-80deg) rotateY(-4deg) rotateZ(-74deg);  */
  transition: all 1s ease;  
  /* left: 50%;
  top: 37%; */


}

</style>