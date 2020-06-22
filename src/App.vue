<template>
  <section class="catalog">
        <ul class="catalog__list">
          <li class="catalog__item" v-for="(product, index) in products" :key="index">
            <a class="catalog__pic" href="#">
              <img :src="product.img" :alt="product.title">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                {{ product.title }}
              </a>
            </h3>

            <span class="catalog__price">
              {{ product.price }} ₽
            </span>
          </li>
        </ul>
      </section>
</template>

<script>
import products from './data/products';

export default {
  name: 'App',
  data() {
    return {
      products,
    };
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
