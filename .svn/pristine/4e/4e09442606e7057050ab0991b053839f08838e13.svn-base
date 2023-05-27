<template>
  <div class="card" style="width:100%; height: 100%; ">
    <OrderList v-model="products"  dataKey="id">
      <template #header>
        List of Products
      </template>
      <template #item="slotProps">
        <div class="product-item">
          <div class="image-container">
            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.item.id"/>
          </div>
          <div class="product-list-detail">
            <h6 class="mb-2">{{slotProps.item.partNumber}}</h6>
            <i class="pi pi-tag product-category-icon"></i>
            <span class="product-category">{{slotProps.item.partName}}</span>
          </div>
        </div>
      </template>
      <template #controlsend>
        <i class="pi pi-bars p-toolbar-separator"  />
        <Button  icon="pi pi-plus" class="p-button p-component p-button-icon-only" />
      </template>
    </OrderList>
  </div>
</template>

<script setup>
const asdf = (a)=>{
  console.log(a);
}
const productsList = ref([])
const products = computed({
  get:()=>{
    return useState('cart').value
  }
})

</script>

<style lang="scss" scoped>
.p-orderlist-list {
  min-height: 10rem;
}
.p-orderlist.p-component{
  max-height:100%;
}
.p-orderlist.p-component>div{
  max-width: 200px;
}

.card {
  background: #ffffff;
  padding: 2rem;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
  border-radius: 4px;
  margin-bottom: 2rem;
}
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
.p-toolbar-separator{
  display:flex;
  justify-content: center;
  margin-bottom: 0.5rem;

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