<template>
  <div id="pslTop">
    <Toolbar >
      <template #start>
        <img src="~/assets/clouds-7081496_1920.png" style="height: 32px; width: 32px;" class="mr-2"/>
        <Button type="button" icon="pi pi-plus" class="mr-2"  @click="openCreatePart" v-if="permitList.data.value.dataList.create" />
      </template>
      <template #end>
        <Button icon="pi pi-search-plus"/>
        <InputText placeholder="품번" type="text" />
        <Button icon="pi pi-search" @click="test"/>
      </template>
    </Toolbar>
  </div>
  <part-create-dialog v-model:visible="createPart"/>
  <div id="pslMiddle" >
    <part-search  :fromPage="props.fromPage" :permit="permitList.data.value.dataList" />
  </div>
</template>

<script setup>
const permitList = await useFetch(() => `/api/permit/partSearch`,
    {
      params: {
        fromPage:props.fromPage
      }
    }
);

const props = defineProps(['fromPage'])




const setting = ref({create:true});


const items = ref([{

  },
  {
    icon:'pi pi-fw pi-plus',
  },
  {
    icon:'pi pi-shopping-cart',
  },
  {
    icon:'pi pi-fw pi-sitemap'
  }
]);

const searchForm={

};

const test = ()=>{
  debugger;
}


const createPart = ref(false);
const openCreatePart = ()=>{
  createPart.value=true
}

</script>

<style scoped lang="scss">

#pslTop{
  width:100%;
  height: 60px;
  .p-toolbar {
    padding: 0.6rem;
  }
}
#pslMiddle{
  top:60px;
  width:100%;
  height:calc(100% - 60px);
}


</style>