import axios from "axios";
import { ref, computed } from "vue";

export function useTwitter() {
    const tweets = ref([]);
    const hashtagObject = ref({
        ningning: [],
        karina: [],
        giselle: [],
        winter: [],
    });
    const hashtagChartData = computed(() => {
        const tweetsWithAMatchingHashtag = new Set([
            ...hashtagObject.value.giselle, 
            ...hashtagObject.value.ningning,
            ...hashtagObject.value.karina,
             ...hashtagObject.value.winter
        ]);
        return {
            labels: [
                "none",
                "Giselle",
                "Karina",
                "Ningning",
                "Winter",
            ],
            datasets: [
                {
                    label: "hashtags",
                    data: [
                        tweets.value.length - Array.from(tweetsWithAMatchingHashtag).length,
                        hashtagObject.value.giselle.length,
                        hashtagObject.value.karina.length,
                        hashtagObject.value.ningning.length,
                        hashtagObject.value.winter.length,
                    ],
                    backgroundColor: [
                        "rgb(201, 139, 219)",
                        "rgb(16, 64, 161)",
                        "rgb(252, 241, 18)",
                        "rgb(40, 252, 115)",
                        "rgb(135, 5, 127)",
                    ],
                    hoverOffset: 4,
                }
            ]
        }
    });

    const fetchData = (startDate: string, endDate: string) => {
        return axios
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
        hashtagChartData,

        fetchData,
    };
}