<script>
    import Steps from "@/components/Steps.vue";
    export default {
        components: {
            Steps,
        },
        data() {
            return {
                //steps
                active: 3,
            }
        }
    }
</script>
<template>
    <div>
        <Steps :active="active"></Steps>
    </div>
</template>
<style lang="scss" scoped>
    
</style>