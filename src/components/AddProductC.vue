<template>
  <h3>ADD PRODUCT</h3>
  <form @submit.prevent="addProduct()" style="background-image: url('https://static-cse.canva.com/blob/572026/removingbackgroundimages_Unsplash.jpeg');">
    <div class="form-group">
      <label for="exampleInputEmail1">Name</label>
      <input
        required
        type="text"
        class="form-control"
        v-model="product.name"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter name"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Price</label>
      <input
        required
        type="number"
        class="form-control"
        v-model="product.price"
        id="exampleInputPassword1"
        placeholder="Enter price"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Description</label>
      <input
        required
        type="text"
        class="form-control"
        v-model="product.description"
        id="exampleInputPassword1"
        placeholder="Enter description"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Image</label>
      <input
        required
        type="text"
        class="form-control"
        v-model="product.image"
        id="exampleInputPassword1"
        placeholder="Enter image"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Qty</label>
      <input
        required
        type="number"
        class="form-control"
        v-model="product.qty"
        id="exampleInputPassword1"
        placeholder="Enter qty"
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    <br />
    <br />
    <a href="/admin">Admin page</a>
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "AddProductC",
  setup() {
    const product = ref({});
    const store = useStore();

    const addProduct = () => {
      store.dispatch("addProduct", product.value);
    };

    return {
      product,
      addProduct,
    };
  },
  data() {
    return {
      ...mapGetters(["products"]),
    };
  },
  methods: {},
};
</script>
<style></style>
