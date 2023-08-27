<template>
    <div>
        <div v-for="(item, index) in array" :key="index">
      <p class="text-primary">Name: {{ item.name }}</p>
      <p class="text-success">Status: {{ item.status ? 'Today Special' : 'Tomorrow Special' }}</p>
      <p class="text-danger"> {{thankyou}}</p>
    </div>
    </div>
</template>

<script>
    export default {
        props: {
            thankyou: {
                type: Number,
                required:true,
                default:959765293829,
            },
        },
        data() {
            return {
                array : [
  { name: "Chicken Curry", status: true },
  { name: "Chinese Pork Spicy Curry", status: false },
  { name: "Burmese Spicy Prawn Curry", status: true }
],
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>