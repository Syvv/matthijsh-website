import axios from "axios";
import { ref } from "vue";

export function useTwitter() {
    const tweets = ref([]);
    const hashtagObject = ref({
        ningning: [],
        karina: [],
        giselle: [],
        winter: [],
    });

    const fetchData = (startDate: string, endDate: string) => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/RetrieveParsedTweets?start_time=${startDate}&end_time=${endDate}`, {
                withCredentials: false,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            })
            .then(result => {
                const data = result.data;
                tweets.value = data.raw;
                hashtagObject.value = data.hashtags;
            });
    };

    return {
        tweets,
        hashtagObject,

        fetchData,
    };
}