<template>
    <div>
        <Select v-model="model11" filterable @on-query-change="onQueryChange">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model11: '',
                model12: []
            };
        },
        methods: {
            onQueryChange(query) {
                console.log(query);
                const list = this.cityList.filter(function(ele) {
                    return ele.value.indexOf(query) > -1;
                });
                if (!list || list.length === 0) {
                    this.cityList.push({
                        label: query,
                        value: query
                    });
                }
            }
        }
    };
</script>
