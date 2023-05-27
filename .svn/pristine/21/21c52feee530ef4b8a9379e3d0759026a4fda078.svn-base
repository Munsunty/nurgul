<template >
  <splitter layout="vertical" style="height: 100%; width:100%">
    <SplitterPanel :size="40" style="overflow-y: scroll">
      <Tree :value="[nodes2]" style="height: inherit" v-model:selectionKeys="bomOrgSelectionKey">
        <template #default="slotProps">
          <span @click="onNodeSelect(slotProps.node)">{{slotProps.node.data.partNumber}}</span>
        </template>
      </Tree>
    </SplitterPanel>
    <SplitterPanel :size="60">
      <OrganizationChart :value="nodes2" :collapsible="true" selectionMode="single" v-model:selectionKeys="bomOrgSelectionKey"
                         style="overflow-x: scroll; height: 100%">
        <template #default="slotProps">
          <span :id="slotProps.node.key">{{slotProps.node.data.partNumber}}</span>
        </template>
      </OrganizationChart>
    </SplitterPanel>

  </splitter>




</template>

<script setup>
import {useTreeTable} from "~/composables/useTreeTable";


const nodes2= useTreeTable('').value[0];

const  onNodeSelect = (node)=>{
  bomOrgSelectionKey.value={};
  bomOrgSelectionKey.value={[node.key]:true};
  moveToNode(node);


}

const bomOrgSelectionKey = ref(null);

function moveToNode(node){
  let target = document.getElementById(node.key);
  if(target !=null){
    target.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
  }
}

onMounted(()=>{
  bomOrgSelectionKey.value={[nodes2.key]:true};
  moveToNode(nodes2)
})




</script>

<style scoped  lang="scss">

::v-deep(.p-organizationchart) {
.p-person {
  padding: 0;
  border: 0 none;
}

.node-header, .node-content {
  padding: .5em .7rem;
}

.node-header {
  background-color: #495ebb;
  color: #ffffff;
}

.node-content {
  text-align: center;
  border: 1px solid #495ebb;
}

.node-content img {
  border-radius: 50%;
}

.department-cfo {
  background-color: #7247bc;
  color: #ffffff;
}

.department-coo {
  background-color: #a534b6;
  color: #ffffff;
}

.department-cto {
  background-color: #e9286f;
  color: #ffffff;
}
}


</style>