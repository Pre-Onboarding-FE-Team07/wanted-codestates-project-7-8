import { atom, selector } from "recoil";
import axios from "axios";

export const userStoredList = atom({
  key: "userStoredList",
  default: [],
});
export const apiDataList = selector({
  key: "apiDataList",
  get: async ({ get }) => {
    const response = await axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.chungbuk.go.kr/openapi-json/pubdata/pubMapForest.do"
      )
      .then((res) => JSON.stringify(res.data))
      .catch((err) => console.log(err));

    return response;
  },
});
