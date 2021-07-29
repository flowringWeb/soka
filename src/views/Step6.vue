<script>
    import Steps from "@/components/Steps.vue";
    export default {
        components: {
            Steps,
        },
        data() {
            return {
                //steps
                active: 5,
            }
        },
        methods: {

        }
        
    }
</script>
<template>
    <div>
        <Steps :active="active"></Steps>
        6
    </div>
</template>
<style lang="scss" scoped>
    
</style>