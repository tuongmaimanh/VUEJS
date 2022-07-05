<template>
    <div class="row w-75">
        <div class="col-md-12">
        <div class="card">
            <div class="card-header">
            <h4 class="card-title">Danh sách sản phẩm</h4>
            </div>
            <div>
                <button class="btn btn-primary" ><router-link to="/addProduct" style="color:aliceblue" >Add Product</router-link> </button>
            </div>
            <div class="card-body">
            <div class="table-responsive">
                <table class="table">
                <thead class=" text-primary">
                    <th>
                    ID
                    </th>
                    <th>
                    Tên sản phẩm
                    </th>
                    <th>
                    Giá
                    </th>
                    <th>
                    Số lượng
                    </th>
                    <th>
                    Ảnh
                    </th>
                    <th>
                    Mô tả
                    </th>
                    <th>
                    Thao tác
                    </th>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id" >
                    <td>
                        {{product.id}}
                    </td>
                    <td>
                        {{product.name}}
                    </td>
                    <td>
                        {{product.price}}
                    </td>
                    <td>
                        {{product.qty}}
                    </td>
                    <td>
                        <img :src="product.image" alt="" style="width:165px;height: 163px;">
                    </td>
                    <td>
                        {{product.description}}
                    </td>
                    <td>
                        <button class="btn btn-success"> <router-link :to="{name:'edit',params:{id:product.id}}" @click="editProductChoose(product)" >Edit</router-link> </button>
                        <button class="btn btn-danger" @click="deleteProduct(product)">Xóa</button>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    </div>


</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from "vuex";
import { mapGetters } from "vuex";
export default {
     setup() {
    const store = useStore();
    onBeforeMount(() => {
      store.dispatch('fetchProducts')
    });
    const editProductChoose = (product) => {
      store.dispatch('editProductChoose', product)
    }
    const deleteProduct = (product) => {
      store.dispatch('deleteProduct', product)
    }
    return {
        editProductChoose,
      deleteProduct
    }
  },

  name: "AdminC",
  computed: {
    ...mapGetters(["cart","products"]),
  },
  
  
  
}
</script>

<style>

</style>