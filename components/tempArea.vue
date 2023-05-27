<template>
  <div class="card" style="padding: 2px">
    <h5>Temp</h5>
    <div class="custom-skeleton p-4">
      <div class="flex mb-3">
        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
        <div>
          <Skeleton width="10rem" class="mb-2"></Skeleton>
          <Skeleton width="5rem" class="mb-2"></Skeleton>
          <Skeleton height=".5rem"></Skeleton>
        </div>
      </div>
      <Skeleton width="100%" height="500px"></Skeleton>
      <div class="flex justify-content-center mt-3">
        <Skeleton width="4rem" height="2rem"></Skeleton>
        <Skeleton width="4rem" height="2rem"></Skeleton>
      </div>
    </div>
  </div>

</template>

<script setup>

</script>

<style scoped lang="scss">
.custom-skeleton {
  border: 1px solid var(--surface-border);
  border-radius: 4px;

  ul {
    list-style: none;
  }
}
</style>