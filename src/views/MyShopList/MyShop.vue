<template>
    <div>
        <MyMenu :thankyou="959791907399" />
      <button class="btn btn-sm btn-primary" @click="goToHome()">Go To Home</button>
    </div>
</template>

<script>
import MyMenu from './MyMenuList/MyMenu.vue'
    export default {
        name:"MyShop",
        components:{MyMenu},
        data() {
            return {
                
            }
        },
        methods: {
            goToHome() {
                this.$router.push({name:'home'})
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>