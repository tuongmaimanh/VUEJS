<template>
<div class="container">
  <HeaderC :count="count" ></HeaderC>
  <ProductC></ProductC>
    <FooterC></FooterC>
  </div>
</template>

<script>
import HeaderC from './HeaderC.vue'
import FooterC from './FooterC.vue'
import ProductC from './ProductC.vue'
export default {
   components: {
    HeaderC,
    ProductC,
    FooterC,
},
props: ['count','cart'],
    data() {
        return {}
           
    },
    methods: {
        
    },
    

}
</script>

<style>

</style>