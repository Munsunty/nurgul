<template>
  <Dialog  style="width:40%;">
    <template #header>
      <h3>파트 생성</h3>
    </template>

    <div class="grid">
      <div class="col-12 md:col-6">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon"><i class="pi pi-cloud"/></span>
          <TreeSelect v-model="selectedNode" :options="nodes" placeholder="분류를 선택해주세요."
                      display="chip"
          ></TreeSelect>
        </div>
      </div>
    </div>

    <div class="grid">
      <div class="col-12 md:col-6">
        <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">N</span>
          <InputText placeholder="품명" class="p-invalid"/>
        </div>
      </div>
    </div>

    <div class="grid">
      <div class="col-12 md:col-6">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">S</span>
          <InputText placeholder="규격" />
          <span class="p-inputgroup-addon">*</span>
        </div>
      </div>
    </div>



    <template #footer>
      <Button label="Yes" icon="pi pi-check" autofocus />
    </template>
  </Dialog>

</template>

<script setup>


const selectedNode = ref();

const nodes = ref([
  {key:"0",label:"대분류",data:"P1",icon:"pi pi-car",
    children:[
      {key:"1",label:"중분류1",data:"P2",icon:"pi pi-bolt",
        children:[
          {key:"4",label:"소분류1",data:"P5",icon:"pi pi-apple",
            children:[
              {key:"5",label:"상세분류1",data:"P6",icon:"pi pi-camera"}
            ]}
        ]
      },
      {key:"2",label:"중분류2",data:"P3",icon:"pi pi-bitcoin"},
      {key:"3",label:"중분류3",data:"P4",icon:"pi pi-box"}
    ]
  }
]);

</script>

<style scoped>

</style>