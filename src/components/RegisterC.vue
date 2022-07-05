<template>
		<section class="forms">

			<form class="register" @submit.prevent="register">
				<h2>Register</h2>
				<input 
					type="email" 
					placeholder="Email address"
					v-model="register_form.email" />
                    
				<input 
					type="password" 
					placeholder="Password" 
					v-model="register_form.password" />
				<input 
					type="submit" 
					value="Register" />
		<router-link to="/">Login</router-link> 

			</form>

			

		</section>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "RegisterC",
  setup() {
    const register_form = ref({});
    const store = useStore();

    const register = () => {
      store.dispatch("register", register_form.value);
    };

    return {
      register_form,
      register,
    };
  },
};
</script>
<style>
.forms {
	display: flex;
	min-height: 100vh;
}

section form {
	flex: 1 1 0%;
	padding: 8rem 1rem 1rem;
}

section form.register {
	color: #FFF;
	background-color: linear-gradient(to right, #d943bb, #40d9f1);
	background-image: linear-gradient(
		to bottom right,
		rgb(245, 66, 188) 0%,
		rgb(16, 227, 234) 100%
	);
} 

h2 {
	font-size: 2rem;
	text-transform: uppercase;
	margin-bottom: 2rem;
}

input {
	appearance: none;
	border: none;
	outline: none;
	background: none;

	display: block;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	font-size: 1.5rem;
	margin-bottom: 2rem;
	padding: 0.5rem 0rem;
}

input:not([type="submit"]) {
	opacity: 0.8;
	transition: 0.4s;
	border-bottom: 2px solid #090909;

}

input:focus:not([type="submit"]) {
	opacity: 1;
	border-bottom: 2px solid #090909;

}

input::placeholder {
	color: inherit;
} */

form .register input {
	color: #FFF;
	border-bottom: 2px solid rgb(19, 19, 19);
    border-left: 5px solid #FFF;

}



form .register input[type="submit"] {
	background-color: #FFF;
	color: rgb(245, 66, 101);
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;

}
</style>
