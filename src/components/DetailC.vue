
<template>
<div id="fb-root"></div>
  
<div class="container">
	<HeaderC  ></HeaderC>

  <div class="row mt-3">
		<div class="col-lg-4">
			<img :src="product.image" style="width:300px">
		</div>
			<div class="col-lg-8">
				<div class="right-side-pro-detail border p-3 m-0">
					<div class="row">
						<div class="col-lg-12">
							<h3>{{product.name}}</h3>
						</div>
						<div class="col-lg-12">
							<p class="m-0 p-0 price-pro">{{product.price}}$</p>
							<hr class="p-0 m-0">
						</div>
						<div class="col-lg-12 pt-2">
							<h5>Product Detail</h5>
							<span>{{product.description}}</span><hr class="m-0 pt-2 mt-2">
						</div>
						
						<div class="col-lg-12">
							<h6>Quantity :</h6>
							<input type="number" class="form-control text-center w-100" v-model="product.incart" min="1" :max=product.qty>
                    <p style="color:red" v-if="product.incart==product.qty">*Sản phẩm trong kho đã hết, nếu muốn mua số lượng mặt hàng lớn hơn {{product.qty}} vui lòng liên hệ trực tiếp!</p>

						</div>
						<div class="col-lg-12 mt-3">
							<div class="row">
								<div class="col-lg-6 pb-2">
									<a href="#" class="btn btn-danger w-100" @click="add(product)">Add To Cart</a>
								</div>
								<div class="col-lg-6">
									<router-link :to="{name:'home'}" class="btn btn-info w-100">Shop Now</router-link>
								</div>
								<div class="fb-comments" data-href="http://192.168.1.3:8080/detail/1" data-width="" data-numposts="5"></div>
        <iframe src="https://www.facebook.com/plugins/like.php?href=http%3A%2F%2F192.168.1.3%3A8080%2Fhome&width=174&layout=button_count&action=like&size=large&share=true&height=46&appId" width="174" height="46" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
							
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
	<CartModelC></CartModelC>
</template>

<script >

import {  mapGetters } from 'vuex';
import HeaderC from './HeaderC.vue';
import CartModelC from './CartModelC.vue';
export default {
    name: "DetailC",
    data() {
        return {
            id: "",
            product: {},
        };
    },
	methods: {
		add(product) {
			this.$store.dispatch('addToCart', product);
		}
		
	},
  
    mounted() {
        this.id = this.$route.params.id;
        this.product = this.products.find(product => product.id == this.id);
        console.log(this.$store.cart);
    },
    computed: {
        ...mapGetters([
            "products",
            "cart"
        ]),
		
    },
    components: { 
		HeaderC,
		CartModelC 
	
	}
}
</script>

<style>

</style>