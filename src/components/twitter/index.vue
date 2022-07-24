<template>
    <div>Twitter</div>
</template>
<script lang="ts">
import { useTwitter } from "./useTwitter"
    export default {
        components: {},
        setup() {
            const {
                tweets,
                hashtagObject,

                fetchData,
            } = useTwitter();

            const endDate = new Date();
            const startDate = new Date();
            startDate.setDate(endDate.getDate() - 1);
            
            fetchData(startDate.toISOString(), endDate.toISOString());

            return {
                // Vars
                tweets,
                hashtagObject,
                // Methods
                fetchData,
            }
        },
    }
</script>