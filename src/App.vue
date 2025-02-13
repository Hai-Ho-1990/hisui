<script setup lang="ts">
import CartButton from './components/CartButton.vue'
import LoginButton from './components/LoginButton.vue'
import Logo from './components/MainLogo.vue'

import { ref } from 'vue'

const cartCount = ref(0)
const increaseCart = () => {
  cartCount.value++
}
</script>

<template>
  <b-container fluid>
    <header>
      <RouterLink to="/" class="logo"><Logo /></RouterLink>
      <div class="login-cart-container">
        <RouterLink to="/login" class="login"><LoginButton /></RouterLink>
        <RouterLink to="/cart" class="cart"
          ><CartButton :cartCount="cartCount"
        /></RouterLink>
      </div>
    </header>

    <main>
      <!-- Lyssna på eventet från ActivitiesView.vue-->
      <RouterView @customEvent="increaseCart"></RouterView>
    </main>
  </b-container>
</template>

<style scoped>
.container-fluid {
  padding-left: 0;
  padding-right: 0;
}
header {
  display: flex;
  width: 100%;
}
.logo {
  flex: 14;
}

.cart {
  margin-left: 60px;
}
.login-cart-container {
  display: flex;
  flex: 2;
}
</style>
