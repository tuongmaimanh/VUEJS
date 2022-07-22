<template>
  <nav
    class="navbar navbar-expand-sm navbar-dark bg-dark"
    style="
      background-image: url('https://image.shutterstock.com/image-photo/oktoberfest-food-panorama-on-white-260nw-1496779814.jpg');
    "
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="javascript:void(0)"
        ><img src="https://i.ibb.co/PDxg7f1/logo.png" alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mynavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mynavbar">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)">Link</a>
          </li>
          <li>
           
          </li>
        </ul>

        <!-- cart -->
        <button
          class="btn btn-outline-warning ml-3"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          <i class="fa-solid fa-cart-shopping"></i> {{ count }}
        </button>
        <!-- end cart  -->

        <!-- dropdown -->
        <div class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            style="color: black"
            >Account</a>
          <ul class="dropdown-menu">
            <li>
              <div v-if="user" style="color: aliceblue">
                <div class="dropdown-item">Hello {{ user }}</div>
                <button
                  class="btn btn-outline-danger dropdown-item"
                  @click="$store.dispatch('logout')"
                >
                  <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
                </button>
              </div>
            </li>
            <hr />
            <li>
              <!-- admin bar -->
              <div v-if="user == 'admin@gmail.com'" style="color: aliceblue">
                <router-link to="/admin" class="dropdown-item">
                  >Admin</router-link
                >
              </div>
            </li>
          </ul>
        </div>
        <!-- end dropdown -->
      </div>
    </div>
  </nav>

  <CartModelC></CartModelC>
</template>

<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

import { mapGetters } from "vuex";
import CartModelC from "./CartModelC.vue";
export default {
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
  },
  name: "HeaderC",
  computed: {
    ...mapGetters(["cart", "count", "user"]),
  },
  data() {
    return {};
  },
  mounted() {},
  components: {
    CartModelC,
  },
};
</script>

<style></style>
