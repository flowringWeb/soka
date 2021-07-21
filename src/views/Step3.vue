<script>
    import axios from 'axios';
    const peaceSum = [1,2,3,4];
    const lightSum = [33,56,56,4];
    const winSum = [34,55,34,34];
    export default {
        components: {

        },
        data() {
            return {
                fileName:"劃分前後組織樹",
                header: "下一層組織樹",
                // header: {
                //     name: "aa",
                //     age: "eee"
                // },
                // json_fields:{
                //     "My Friends Name":"name",
                //     "Designation":"job"
                // },
                // json_data: [
                //     {
                //         name: "naveen",
                //         job: ".net developer",
                //         experience: 5
                //     }
                // ],
                exportDefaultVal: "no data",
                fields: {
                    "": "colA",
                    "和平支部": "Peace",
                    "榮光支部": "Light",
                    "勝利支部": "Win",
                    "電話 2": {
                        field: "phone.landline",
                        callback: (value) => {
                            return `Landline Phone - ${value}`;
                        },
                    },
                },
                datas: [
                    {
                        colA: "壯",
                        Peace: 1,
                        Light: 33,
                        Win: 34,
                        phone: {
                            mobile: "1-541-754-3010",
                            landline: "(541) 754-3010",
                        },
                    },
                    {
                        colA: "婦",
                        Peace: 2,
                        Light: 56,
                        Win: 55,
                        phone: {
                            mobile: "+1 855 275 5071",
                            landline: "(2741) 2621-244",
                        },
                    },
                    {
                        colA: "男",
                        Peace: 3,
                        Light: 56,
                        Win: 34,
                    },
                    {
                        colA: "女",
                        Peace: 4,
                        Light: 4,
                        Win: 34,
                    },
                    {
                        colA: "合計",
                        Peace: peaceSum.reduce((a,b)=> a+b),
                        Light: lightSum.reduce((a,b)=> a+b),
                        Win: winSum.reduce((a,b)=> a+b),
                    },
                ],
                meta: [
                    [
                        {
                            key: "charset",
                            value: "utf-8",
                        },
                    ],
                ],
            }
        },
        methods: {
            async fetchTodos(){
                const res = await axios.get('https://jsonplaceholder.typicode.com/users/1/todos');
                console.log(res.data);
                return res.data;
            },
            startDownload(){
                alert('show loading');
            },
            finishDownload(){
                alert('hide loading');
            },
            // addNum() {
            //     var sum = 0;
            //     this.datas.forEach((item)=> {
            //         sum += item.Peace;
            //     })
            //     console.log(sum);
            // }
        },
        // mounted: function() {
        //     this.addNum();
        // }
    }
</script>
<template>
    <div>
        <!-- <download-excel 
            :data="json_data"
            :fields="json_fields"
            :name="fileName"
            :header="header"
            :footer="footer"
        >
            <button type="button" class="btn btn-success">Download Excel</button>
        </download-excel> -->

        <download-excel 
            :data="datas"
            :fields="fields"
            :header="header"
            :name="fileName"
            :default-value="exportDefaultVal"
            worksheet="My Worksheet"

        >
            <button type="button" class="btn btn-success">Download Excel2</button>
        </download-excel>
    </div>
</template>
<style lang="scss">
    
</style>