<template>
  <h3>EDIT PRODUCT</h3>
  <form @submit.prevent="edit()" style="background-image: url('https://static-cse.canva.com/blob/572026/removingbackgroundimages_Unsplash.jpeg');">
    <div class="form-group">
      <label for="exampleInputEmail1">Name</label>
      <input
        type="text"
        class="form-control"
        v-model="productChoose.name"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter name"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Price</label>
      <input
        type="number"
        class="form-control"
        v-model="productChoose.price"
        id="exampleInputPassword1"
        placeholder="Enter price"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Description</label>
      <input
        type="text"
        class="form-control"
        v-model="productChoose.description"
        id="exampleInputPassword1"
        placeholder="Enter description"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Image</label>
      <input
        type="text"
        class="form-control"
        v-model="productChoose.image"
        id="exampleInputPassword1"
        placeholder="Enter image"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Qty</label>
      <input
        type="number"
        class="form-control"
        v-model="productChoose.qty"
        id="exampleInputPassword1"
        placeholder="Enter qty"
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import { onBeforeMount,  } from "vue";
import { mapGetters } from "vuex";
export default {
  setup() {
    onBeforeMount(() => {
    });
    return {
    };
  },
  data() {
    return {
    };
  },
  computed: {
      ...mapGetters(["productChoose"]),
  },
  methods: {
    edit() {
        this.$store.dispatch("edit", this.productChoose);
        },
  },
  mounted() {
     console.log(this.productChoose);
  },
};
</script>

<style></style>
