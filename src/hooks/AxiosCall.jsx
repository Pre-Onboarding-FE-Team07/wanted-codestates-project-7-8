import axios from 'axios'

export const AxiosCall = (req, res) => {
  axios({
      method:"GET",
      url:`https://cors-anywhere.herokuapp.com/https://www.chungbuk.go.kr/openapi-json/pubdata/pubMapForest.do`,
  }).then((res)=>{
      localStorage.removeItem("dataList");
      let result = JSON.parse(res.data).response
      localStorage.setItem("dataList", JSON.stringify(result))
  })  
     
};