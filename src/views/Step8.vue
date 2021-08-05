<script>
    import Steps from "@/components/Steps.vue";
    export default {
        components: {
            Steps,
        },
        data() {
            return {
                //steps
                active: 7,
                peopleCount: [
                    {
                        title:"區級",
                        number:5,
                        pTime:1,

                    },
                    {title:"本部級",number:18,pTime:2},
                    {title:"支部級",number:22,pTime:5},
                    {title:"地區級",number:63,pTime:16}
                ],
            }
        },
        
    }
</script>
<template>
    <div>
        <Steps :active="active"></Steps>
        <ul>
            <li v-for="(item) in peopleCount" :key="item.title">
                {{ item.title}} : {{ item.number }} 人 +( {{ item.pTime}} )
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    
</style>