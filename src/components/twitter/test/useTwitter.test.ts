import { mount } from "@vue/test-utils"
import Index from "../index.vue";
import { useTwitter } from "../useTwitter";
import axios from "axios";
import { vi } from "vitest";
import { of } from "rxjs";

const response = {
  data: {
    "raw": [
      {
        "id": "1550797884915859458",
        "text": "[aespa X Premeire Pro] ???? ??? ??? ??? Girls MV ????\n\nhttps://t.co/5qyHgStfOH\n\n#aespa #KARINA \n#Girls #aespa_Girls \n#aespaXPremierePro https://t.co/1HmmignJI2",
        "time": "2022-07-23T11:00:02.000Z"
      },
      {
        "id": "1551037437102551040",
        "text": "????????\n\n#aespa #NINGNING https://t.co/nDbFacVtEe",
        "time": "2022-07-24T02:51:56.000Z"
      },
      {
        "id": "1551037444719464448",
        "text": "????????\n\n#aespa #NINGNING https://t.co/dxkMVC4Q7E",
        "time": "2022-07-24T02:51:58.000Z"
      },
      {
        "id": "1551037451069562880",
        "text": "????????\n\n#aespa #NINGNING https://t.co/Dcsrxw6yb3",
        "time": "2022-07-24T02:51:59.000Z"
      }
    ],
    "hashtags": {
      "giselle": [],
      "karina": [
        "2022-07-23T11:00:02.000Z"
      ],
      "ningning": [
        "2022-07-24T02:51:56.000Z",
        "2022-07-24T02:51:58.000Z",
        "2022-07-24T02:51:59.000Z"
      ],
      "winter": []
    }
  }
};

describe('When using Twitter', () => {
  let twitter: any;

  beforeAll(() => {
    twitter = useTwitter();

    // @ts-ignore
    axios.get = vi.fn(() => {
      return new Promise((resolve) => {
        resolve(response)
      })
    });
  });

  describe("When fetching tweets", () => {
    it("should save the results in the appropriate refs", async () => {
      await twitter.fetchData();
      expect(twitter.tweets.value).toEqual(response.data.raw);
      expect(twitter.hashtagObject.value).toEqual(response.data.hashtags);
    });

    it("should update the chart object so it matches the new data", async () => {
      await twitter.fetchData();
      expect(twitter.hashtagChartData.effect.fn()).toEqual({
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
                    0,
                    0,
                    1,
                    3,
                    0,
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
    });
    })
  });
});

