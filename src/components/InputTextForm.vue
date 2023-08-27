<template>
    <div>
        <input type="text" class="form-control " name="" id="" v-model="inputText" @keyup.enter="saveText()" v-if="canIEdit">
            <h3 class="text-success my-3 border border-info py-3" v-else @dblclick="editStart()">{{inputText}}</h3>
            <slot>Have a nice day By Default Slot</slot>
    </div>
</template>

<script>
    export default {
        name:'InputTextFormComponent',
         data() {
            return {
                inputText: 'start here.',
                canIEdit:false,
            }
        },
        methods: {
            saveText() {
                this.canIEdit = false
            },
            editStart(){
                this.canIEdit = true
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>