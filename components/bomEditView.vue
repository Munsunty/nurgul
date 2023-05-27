<template>
  <div class="card" style="max-height: 100%; min-height: 93%; max-width:inherit">
    <Toolbar >
      <template #start>
        <div >
          <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />
          <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
        </div>
        <i class="pi pi-bars p-toolbar-separator mr-2" />
        <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></SplitButton>
      </template>

      <template #end>
        <Button icon="pi pi-search" class="mr-2" />
        <Button icon="pi pi-calendar" class="p-button-success mr-2" />
        <Button icon="pi pi-times" class="p-button-danger" />
      </template>
    </Toolbar>
    <div id="bomEditTable" style="">
      <TreeTable :value="nodes"  :expandedKeys="expandedKeys"
                 :resizableColumns="true"
                 showGridlines
                 :scrollable="true"
                 scrollHeight="85vh"
                 selectionMode="checkbox"
                 v-model:selectionKeys="selectedKeys"
      >
        <Column field="level" header="레벨" :expander="true" class="tree-col-1 tree-col-c"></Column>
        <Column field="partNumber" header="파트번호" class="tree-col-3 tree-col-c"></Column>
        <Column field="version" header="버전" class="tree-col-0 tree-col-c" ></Column>
        <Column field="partName" header="품명" class="tree-col-4" header-class="tree-col-c" body-class="tree-col-l"></Column>
        <Column field="spec" header="스펙" class="tree-col-4" header-class="tree-col-c" body-class="tree-col-l"></Column>
        <Column style="min-width: 100px;" header="수량" >
          <template #body="slotProps" >
            <div v-if="slotProps.node.data.qty<1">{{slotProps.node.data.qty}}</div>
            <InputNumber v-else v-model="slotProps.node.data.qty" :min="0" :max="100" style="width: 100px" @click="asdf(slotProps.node)"/>
          </template>
          <template #editor="slotProps">
            <InputNumber v-model="slotProps.node[slotProps.field]" :min="0" :max="100"  showButtons  />
          </template>
        </Column>
        <Column field="unit" header="단위" style="min-width: 70px; justify-content: center;"></Column>
      </TreeTable>
    </div>



  </div>
</template>

<script setup>

import {useTreeTable} from "~/composables/useTreeTable";


const asdf = (b)=>{

  console.log(b);

}
const nodes= useTreeTable('');
const expandedKeys = useState('expandedKeys',() => {return{"a-0":false}});
const selectedKeys = useState('selectedKeys',() => null);
const items = ref([
  {
    label: 'Update',
    icon: 'pi pi-refresh'
  },
  {
    label: 'Delete',
    icon: 'pi pi-times'
  },
  {
    label: 'Vue Website',
    icon: 'pi pi-external-link',
    command: () => {
      window.location.href = 'https://vuejs.org/'
    }
  },
  {   label: 'Upload',
    icon: 'pi pi-upload',
    command: () => {
      window.location.hash = "/fileupload"
    }
  }
]);
const expandAll = ()=>{
  for (let node of nodes.value) {
    expandNode(node);
  }

  // expandedKeys.value = {...this.expandedKeys};
}
const collapseAll = ()=>{
  expandedKeys.value={};
}
const expandNode = (node)=>{
  if (node.hasOwnProperty('children') && node.children.length>0) {
    expandedKeys.value[node.key] = true;

    for (let child of node.children) {
      expandNode(child);
    }
  }
}
// onMounted( () => {
//
//   nodes.value=[data.data];
//
// })

const onCellEditComplete = (event) => {
  let { data, newValue, field } = event;

  switch (field) {
    case 'qty':

    default:
      if (newValue.trim().length > 0)
        data[field] = newValue;
      else
        event.preventDefault();
      break;
  }
};


</script>

<style  scoped lang="scss">

.p-button,
.p-splitbutton {
  margin-bottom: 0.5rem;
}

::v-deep(#bomEditTable){
  .tree-col-c{
    justify-content: center;
  }
  .tree-col-l{
    justify-content: left;
  }
  .tree-col-r{
    justify-content: right;
  }
  .tree-col-0{
    min-width: 2%;

  }
  .tree-col-1{
    min-width: 4%;

  }
  .tree-col-2{
    min-width: 6%;

  }
  .tree-col-3{
    min-width: 8%;

  }
  .tree-col-4{
    min-width: 10%;

  }

}

</style>