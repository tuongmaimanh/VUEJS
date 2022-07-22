<template >

<div class="modal fade" id="myModal">
  <div class="modal-dialog" >
    <div class="modal-content" style="width:max-content">

      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body" v-if="count!=0">
       <table class="table">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Tổng tiền</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product,index) in cart" :key="index" class="mt-2">
                    <td>{{index+1}}</td>
                    <td><img :src="product.image" ></td>
                    <td>{{product.name}}</td>
                    <input min="1" type="number" v-model="product.incart" width="50px" :max="product.qty">
                    <p style="color:red" v-if="product.incart==product.qty">*Sản phẩm trong kho đã hết,<br> nếu muốn mua số lượng mặt hàng lớn hơn {{product.qty}} <br> vui lòng liên hệ trực tiếp!</p>
                    <td>{{product.price}}</td>
                    <td>{{product.price*product.incart}} $</td>
                    <td>
                        <button class="btn btn-danger" @click="removeFromCart(product)">Xóa</button>
                    </td>
                </tr>
            </tbody>
       </table>
            <div class="d-flex justify-content-around mt-5">
              <button class="p-2 btn btn-warning" @click="checkout()">Check out</button>
              <span class="p-2"></span>
              <h3 class="p-2" style="color:red">Tổng tiền:{{total}} $</h3>
              </div>
              
           

      </div>
      <div v-else>
        <h1 class="p-5">Giỏ hàng của bạn đang rỗng!</h1>
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>

 
</div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'CartModelC',
    data() {
        return {
            active: false,
          
        }
    },
    computed: {
      
        ...mapGetters([
            'cart',
            'total',
            'count'
        ]),
        
    },
    mounted() {
        console.log(this.count);
        if(this.count>0){
            this.active=true;
        }
    },
    methods: {
     checkout(){
        alert('Congratulation! You have successfully checkout');
        this.$store.commit('clearCart');
        // window.location.href = '/'; 
        location.reload(true)
      },
      ...mapActions([
            'removeFromCart',
            ]),
    }

}
</script>

<style>

</style>