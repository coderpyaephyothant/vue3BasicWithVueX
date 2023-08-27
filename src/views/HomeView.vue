<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1 class="text-danger">Welcome to {{ title }}</h1>
    <br>
    <button class="btn btn-sm btn-success" @click="goToMenu()">Go To Menu 🌷</button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  data() {
    return {
      title: "May San Resturant",
    }
  },
  name: 'HomeView',
  components: {
    // HelloWorld,
  },
  methods: {
    goToMenu() {
this.$router.push({name:'myShop'})
    }
  },
});
</script>
