<template>
  <div class="row" style="background-image:url('https://www.teahub.io/photos/full/41-412275_com-apple-iphone-wallpaper-sm41-red-blue-soft.jpg')">
   <form class="d-flex" >
              <input
                class="form-control me-2"
                type="text"
                placeholder="Search"
                v-model="searchKey"
              />
            </form>
    <div
      v-for="product in search"
      :key="product.id"
      class="card"
      style="width: 350px; margin-left: 30px; margin-top: 10px;"
    >
      <img
        class="card-img-top"
        :src="product.image"
        alt="Card image"
        style="width: 100%"
      />
      <div class="card-body">
        <router-link :to="{ name: 'detail', params: { id: product.id } }">{{
          product.name
        }}</router-link>
        <h4 class="card-title">{{ product.name }}</h4>
        <p class="card-text">{{ product.price }}$</p>
        <p class="card-text">{{ product.description }}</p>
        <button class="btn btn-primary" @click="addToCart(product)">
          Add To Cart
        </button>
      </div>
      <div>

      </div>
    </div>
  </div>
    <h1 v-if="products.length==0">Page loading...</h1>
</template>

<script>
///////////////////////////////////////////
import { onBeforeMount } from 'vue'
import { useStore } from "vuex";
import { mapGetters, mapActions } from "vuex";
// import { data} from "../config/firebase";

export default {
   setup() {
    const store = useStore()
    onBeforeMount(() => {
      store.dispatch('fetchProducts')
    })
  },

  name: "ProductC",
  computed: {
    ...mapGetters(["cart","products"]),
    // search
            search() {
                if (this.searchKey == "") {
                    return this.products;
                }
                console.log(this.searchKey);

                var search = this.searchKey.trim().toLowerCase();
                console.log(search);
                
                return this.products.filter(item => {
                    return item.name.toLowerCase().includes(search);
                });
            },
  },
  data(){
    return{
      searchKey:""
    }
  },
  mounted() {
    
    console.log(this.products);
  },
  methods: {
      ...mapActions(["addToCart"]),

  },
};
</script>

<style></style>
