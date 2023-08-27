<template>
    <div>
        <h3>Here is NoteLists of your choices. Make it.</h3>
        <li class="mx-5 my-5">
            <InputTextFormComponent/>
            <InputTextFormComponent>Have a sweet day to Slot</InputTextFormComponent>
        </li>
    </div>
</template>

<script>
import InputTextFormComponent from '@/components/InputTextForm.vue';
    export default {
        name:'NoteList', 
        components:{InputTextFormComponent}
        }
</script>

<style lang="scss" scoped>

</style>