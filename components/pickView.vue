<template>
  <div>
    <PickList v-model="products" listStyle="height:342px" dataKey="id">
      <template #sourceheader>
        Available
      </template>
      <template #targetheader>
        Selected
      </template>
      <template #item="slotProps">
        <div class="product-item">
          <div class="image-container">
            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" />
          </div>
          <div class="product-list-detail">
            <h6 class="mb-2">{{slotProps.item.name}}</h6>
            <i class="pi pi-tag product-category-icon"></i>
            <span class="product-category">{{slotProps.item.category}}</span>
          </div>
          <div class="product-list-action">
            <h6 class="mb-2">${{slotProps.item.price}}</h6>
            <span :class="'product-badge status-'+slotProps.item.inventoryStatus">{{slotProps.item.inventoryStatus}}</span>
          </div>
        </div>
      </template>
    </PickList>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import * as data  from '../data/products-small.json';

const products = ref(null);

onMounted(() => {
  products.value = [data.data,[]]
})

</script>

<style lang="scss" scoped>
.product-item {
  display: flex;
  align-items: center;
  padding: .5rem;
  width: 100%;

  img {
    width: 75px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-right: 1rem;
  }

  .product-list-detail {
    flex: 1 1 0;
  }

  .product-list-action {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .product-category-icon {
    vertical-align: middle;
    margin-right: .5rem;
    font-size: .875rem;
  }

  .product-category {
    vertical-align: middle;
    line-height: 1;
    font-size: .875rem;
  }
}

@media screen and (max-width: 576px) {
  .product-item {
    flex-wrap: wrap;

    .image-container {
      width: 100%;
      text-align: center;
    }

    img {
      margin: 0 0 1rem 0;
      width: 100px;
    }
  }
}
</style>