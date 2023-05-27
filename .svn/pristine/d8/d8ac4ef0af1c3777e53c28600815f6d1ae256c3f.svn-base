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
    <div style="">
      <TreeTable :value="nodes"  :expandedKeys="expandedKeys"
                 :resizableColumns="true"
                 showGridlines
                 :scrollable="true"
                 scrollHeight="85vh"
                 selectionMode="checkbox"
                 v-model:selectionKeys="selectedKeys"
      >
        <Column field="level" header="레벨" :expander="true" style="min-width: 150px; justify-content: center;"></Column>
        <Column field="partNumber" header="파트번호" style="min-width: 200px; justify-content: center;"></Column>
        <Column field="version" header="버전" style="min-width: 70px; justify-content: center;"></Column>
        <Column field="partName" header="품명" style="min-width: 300px; justify-content: center;"></Column>
        <Column field="spec" header="스펙" style="min-width: 300px; justify-content: center;"></Column>
        <Column field="qty" header="수량"  style="min-width: 100px; justify-content: center;" />
        <Column field="unit" header="단위" style="min-width: 70px; justify-content: center;"></Column>
        <Column field="is2D" header="2D도면" style="min-width: 70px; justify-content: center;"></Column>
        <Column field="is3D" header="3D도면" style="min-width: 70px; justify-content: center;"></Column>
        <Column field="isDocument" header="문서" style="min-width: 70px; justify-content: center;" ></Column>


        <Column field="erpCode" header="ERP" style="min-width: 200px; justify-content: center;"></Column>
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


</style>