<template>
  <div class="card" style="width: 100%; height: 100%;">
    <DataTable :value="products"  :scrollable="true" scrollHeight="flex"  :resizableColumns="true" :columnResizeMode="setting.default?'expand':'fit'"
               showGridlines class="p-datatable-products" :paginator="true" :rows="20"  :rowsPerPageOptions="[10,20,50]"
               v-model:selection="selectedProducts"
               selectionMode="multiple" dataKey="id" :metaKeySelection="false"
    >
<!--               stateStorage="session" :stateKey="stateKey"-->
<!--    >-->

      <Column selectionMode="multiple" style="max-width:5%" v-if="setting.selection"/>
      <Column header="순번" body-class="pstCenter pstCol3" header-class="pstCenter pstCol3" style="max-width:5%">
        <template #body="slotProps" >
          <div @click="asdf(slotProps)">{{slotProps.index+1}}</div>
        </template>
      </Column>
      <Column field="partNumber" header="품번"      body-class="pstLeft pstCol1"     header-class="pstCenter pstCol1"    >
        <template #body="slotProps" >
          <div @click="showPartInfo(slotProps)" style="color:blue; cursor:pointer">{{slotProps.data.partNumber}}</div>
        </template>
      </Column>
      <Column field="partName" header="품명"        body-class="pstCenter pstCol0"   header-class="pstCenter pstCol0"   />
      <Column field="spec" header="규격"            body-class="pstCenter pstCol0"   header-class="pstCenter pstCol0" v-if="setting.default"  />
      <Column field="originator" header="등록자"    body-class="pstCenter pstCol2"   header-class="pstCenter pstCol2"   />
      <Column field="createDate" header="등록일"    body-class="pstCenter pstCol2"   header-class="pstCenter pstCol2"  v-if="setting.default" />
      <Column field="approveDate" header="승인일"   body-class="pstCenter pstCol2"   header-class="pstCenter pstCol2"  v-if="setting.default" />
      <Column field="isDocument" header="문서"      body-class="pstCenter pstCol3"   header-class="pstCenter pstCol3"  v-if="setting.default" />
      <Column field="is2D" header="2D"             body-class="pstCenter pstCol3"   header-class="pstCenter pstCol3"  v-if="setting.default" />
      <Column field="is3D" header="3D"             body-class="pstCenter pstCol3"   header-class="pstCenter pstCol3"  v-if="setting.default" />
      <template #paginatorstart>
        <Button type="button" icon="pi pi-refresh" class="p-button-text" />
      </template>
      <template #paginatorend>
        <Button type="button" icon="pi pi-cart-plus" class="p-button-text"  v-if="setting.selection" @click="addCartForBOM()"/>
      </template>
    </DataTable>
  </div>

  <component :is="partSearchComponent" />


</template>

<script setup>
import * as data from '/data/searchTableData.json'
import {showDialogInfo} from "../../composables/mainViewDockerItem";
import {activateCart, addCart} from "../../composables/manage/manageCart";
const asdf =(node)=>{
  console.log(node)
}
const props = defineProps(['fromPage','permit'])


const selectedProducts = ref(null);


const setting = {
  default : !props.permit.bom,
  create : props.permit.create,
  add : props.permit.add,
  selection : props.permit.bom,
}
if(setting.selection){
  activateCart(props.fromPage);
}


const stateKey=computed({
  get:()=>{

    return '_partSearch';
  },
  set:()=>{
    console.log('sdaf')
  }
});



const products = useState('products',()=>{
  return data.default
})

const currentCnt = ref(0);

const currentDialog=showDialogInfo({
  dialog:'partSearchComp'
},true);



const showPartInfo =(node)=>{
  showDialogInfo({
    dialog:'partSearchComp',
    resovle:h(resolveComponent('partInfoDialog'))
  },false)

  useState('PartInfo').value={
    display:true,
    node:node
  };

}

const partSearchComponent= computed({
  get: ()=>{
    return useState('partSearchComp').value[0];
  },
  set: (value)=>{
  }
});

const addCartForBOM = ()=>{
  let result = selectedProducts.value;

  addCart(result,props.fromPage);

  selectedProducts.value=null;
}

</script>




<style scoped lang="scss">

::v-deep(.p-datatable.p-datatable-products) {
  width: 100%!important;

  .pstLeft{
    justify-content: left;
  }
  .pstCenter{
    justify-content: center;
  }
  .pstCol0{
    min-width: 20%;
  }
  .pstCol1{
    min-width: 10%;
  }
  .pstCol2{
    min-width: 7%;
  }
  .pstCol3{
    min-width: 3%;
  }

}


</style>