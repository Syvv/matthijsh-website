<template>
    <div>
        <doughnut
            id="hashtag-graph"
            :chart-data="hashtagChartData"
            :width="40"
            :height="40"
        />
    </div>
</template>
<script lang="ts">
import { useTwitter } from "./useTwitter"
import { Chart, registerables } from "chart.js";
import { Doughnut } from "vue-chartjs";
    export default {
        components: {
            Doughnut
        },
        setup() {
            // Setup chart.js
            Chart.register(...registerables);

            const {
                tweets,
                hashtagObject,
                hashtagChartData,

                fetchData,
            } = useTwitter();

            const endDate = new Date();
            const startDate = new Date();
            startDate.setDate(endDate.getDate() - 7);

            fetchData(startDate.toISOString(), endDate.toISOString());
           

            return {
                // Vars
                tweets,
                hashtagObject,
                hashtagChartData,
                // Methods
                fetchData,
            }
        },
    }
</script>
<style lang="scss" scoped>
    #hashtag-graph {
        height: 400px;
        width: 400px;
    }
</style>