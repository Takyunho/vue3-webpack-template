<template>
    <div>
        <h1>{{ message }}</h1>
        <HelloVue />
    </div>
</template>

<script>
    import HelloVue from '~/components/HelloVue'

    export default {
        data() {
            return {
                message: 'webpack-template-Vue3'
            }
    },
        components: {
            HelloVue
        }
    }
</script>

<style lang="scss" scoped>

</style>