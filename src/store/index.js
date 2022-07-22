import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, child, get, set } from "firebase/database";
// import { getDatabase,ref } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBNB-jLEXoh-BwXhb2i7je34mYiqv-9D9k",
  authDomain: "ktgk-vue-js.firebaseapp.com",
  databaseURL: "https://ktgk-vue-js-default-rtdb.firebaseio.com",
  projectId: "ktgk-vue-js",
  storageBucket: "ktgk-vue-js.appspot.com",
  messagingSenderId: "642771171853",
  appId: "1:642771171853:web:45a01ce702912ab8a87344",
  measurementId: "G-PBF2L7HTWY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db);
//authentication
const auth = getAuth(app);

//////////////////////////////////////////////
import { createStore } from "vuex";
import router from "../router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

//Dữ liệu vuex setup
export default createStore({
  state: {
    cart: [],
    count: 0,
    products: [],
    user: null,
    productChoose: null,
  },
  getters: {
    products: (state) => state.products,
    cart: (state) => state.cart,
    count: (state) => state.count,
    total: (state) =>
      state.cart.reduce((total, item) => total + item.price * item.incart, 0),
    user: (state) => state.user,
    productChoose: (state) => state.productChoose,
  },
  //MUTATIONS
  mutations: {
    addToCart(state, product) {
      if (state.cart.find((item) => item.id === product.id)) {
        alert("Product already in cart,click on cart to view");
      } else {
        state.cart.push(product);
        state.count++;
      }
    },
    removeFromCart(state, product) {
      console.log(product);
      state.cart.splice(state.cart.indexOf(product), 1);
      state.count--;
    },
    //////////////////////////////////////////////
    SET_USER(state, user) {
      state.user = JSON.parse(JSON.stringify(user.email));
    },

    CLEAR_USER(state) {
      state.user = null;
    },
    //////////////////////////////////////////////
    setProducts(state, products) {
      state.products = products;
    },
    ///////////////////////////////////////////////
    setProductChoose(state, product) {
      state.productChoose = JSON.parse(JSON.stringify(product));
    },
  },

  //ACTIONS
  actions: {
    addToCart(context, product) {
      context.commit("addToCart", product);
    },
    removeFromCart(context, product) {
      context.commit("removeFromCart", product);
    },

    async login({ commit }, details) {
      const { email, password } = details;

      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("User not found");
            break;
          case "auth/wrong-password":
            alert("Wrong password");
            break;
          default:
            alert("Something went wrong");
        }

        return;
      }

      commit("SET_USER", auth.currentUser);

      router.push("/home");
    },

    async register({ commit }, details) {
      const { email, password } = details;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        // this.state.user = auth.currentUser
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("Email already in use");
            break;
          case "auth/invalid-email":
            alert("Invalid email");
            break;
          case "auth/operation-not-allowed":
            alert("Operation not allowed");
            break;
          case "auth/weak-password":
            alert("Weak password");
            break;
          default:
            alert("Something went wrong");
        }

        return;
      }

      commit("SET_USER", auth.currentUser);

      router.push("/home");
    },

    async logout({ commit }) {
      await signOut(auth);

      commit("CLEAR_USER");

      router.push("/");
    },

    fetchUser({ commit }) {
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          commit("CLEAR_USER");
        } else {
          commit("SET_USER", user);

          if (router.isReady() && router.currentRoute.value.path === "/") {
            router.push("/home");
          }
        }
      });
    },
    //////////////////////////////
    // async  getData(){
    //   const snapshot = await get(child(dbRef, `products/`));
    //   const a = await Promise.all(snapshot.val());
    //   console.log(a);
    // }
    async fetchProducts({ commit }) {
      const products = await get(child(dbRef, `products/`));
      console.log(products);
      const productsArray = products.val();
      commit("setProducts", productsArray);
    },

    ///////////////////////////////////////////////
    async addProduct({ commit }, product) {
      const products = await get(child(dbRef, `products/`));
      const productsArray = products.val();
      if (productsArray.find((item) => item.name === product.name)) {
        alert("Product already in database");
      } else {
        product.id = productsArray.length + 1;
        product.incart = 1;
        console.log(productsArray);
        productsArray.push(product);
        console.log(productsArray);
        await set(child(dbRef, `products/`), productsArray);

        commit("setProducts", productsArray);
        alert("Product added to database");
      }
    },

    async editProductChoose({ commit }, product) {
      const products = await get(child(dbRef, `products/`));
      const productsArray = products.val();
      const productChoose = productsArray.find(
        (item) => item.id === product.id
      );
      // productsArray[productIndex] = product;
      // await set(child(dbRef, `products/`), productsArray);
      console.log(productChoose);
      commit("setProductChoose", productChoose);
    },
    async edit({ commit }, product) {
      const products = await get(child(dbRef, `products/`));
      const productsArray = products.val();

      const productIndex = productsArray.findIndex(
        (item) => item.id === product.id
      );
      //người dùng ko sửa tên
      if (productsArray[productIndex].name === product.name) {
        console.log(productIndex);
        console.log(product);
        productsArray[productIndex] = product;
        await set(child(dbRef, `products/`), productsArray);
        commit("setProducts", productsArray);
        alert("Product edited");
        window.location.replace("/admin");
      } else {
        //người dùng sửa tên 
        const searchName = productsArray.find(
          (item) => item.name === product.name
        );
        //người dùng sửa tên nhưng trùng
        if (searchName) {
          alert("The name of the product already exists");
        } else {
          productsArray[productIndex] = product;
          await set(child(dbRef, `products/`), productsArray);
          commit("setProducts", productsArray);
          alert("Product edited");
          window.location.replace("/admin");
        }
      }
    },
    async deleteProduct({ commit }, product) {
      const products = await get(child(dbRef, `products/`));
      const productsArray = products.val();
      const productIndex = productsArray.findIndex(
        (item) => item.id === product.id
      );
      productsArray.splice(productIndex, 1);
      await set(child(dbRef, `products/`), productsArray);
      commit("setProducts", productsArray);
      alert("Product deleted");
      window.location.replace("/admin");
    },
  },
});
