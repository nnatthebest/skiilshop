<template>
  <section class="catalog">
    <ProductList :products="products"/>

    <BaseProducts v-model="page" :count="countProducts" :per-page="productPerPage" />
  </section>
</template>

<script>
import products from './data/products';
import ProductList from './components/ProductList.vue';
import BaseProducts from './components/BasePagination.vue';

export default {
  name: 'App',
  components: {
    ProductList,
    BaseProducts,
  },
  data() {
    return {
      productPerPage: 3,
      page: 1,
    };
  },
  computed: {
    products() {
      const offset = (this.page - 1) * this.productPerPage;
      return products.slice(offset, offset + this.productPerPage);
    },
    countProducts() {
      return products.length;
    },
  },
};
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
