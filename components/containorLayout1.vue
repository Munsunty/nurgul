<template>
  <Splitter style="height:100%" >
    <SplitterPanel class="flex align-items-center justify-content-center" :size="sizeNum" :minSize="30">
      <bom-edit-view/>

    </SplitterPanel>
    <SplitterPanel :size="(100-sizeNum)" resizeend="spResize" :minSize="10" style="min-width: 0%;">
      <Splitter style="width:100%" layout="vertical">
        <SplitterPanel class="flex align-items-center justify-content-center" :size="50" :minSize="10" style="min-height: 20%;">
          <div style="width: 100%; height: 100%;">
            <component :is="bomWorkArea" fromPage="bomEdit" />
          </div>
        </SplitterPanel>
        <SplitterPanel class="flex align-items-center justify-content-center" :size="50" :minSize="10" style="min-height: 30%;">
          <div style="width: 100%; height: 100%;" class="card">
            <component :is="bomResultArea" fromPage="bomEdit" />
          </div>
        </SplitterPanel>
      </Splitter>
    </SplitterPanel>
  </Splitter>
</template>

<script setup>
const sizeNum = ref(50);

const rightSide = computed({
  get:()=>{
    return sizeNum.value<40;
  }
});


const spResize = useState('spResize',()=>{
})
const componentArr = ref([h(resolveComponent('partSearchLayout')),h(resolveComponent('bomAddList'))])


const bomResultArea = computed({
  get:()=>{
    return componentArr.value[1];
  }
})
const bomWorkArea = computed({
  get:()=>{
    return componentArr.value[0];
  }
})

</script>

<style scoped>

</style>