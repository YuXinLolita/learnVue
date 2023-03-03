// import { resolve } from "core-js/fn/promise"
// import { resolveDirective } from 'vue'
import axios from 'axios'
export const post = (url, data = {}) => {
  return new Promise ((resolve,reject )=>{
    axios.post(url,data,{               //baseURL固定写法
      baseURL:'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
      headers:{
        'Content-Type' : 'application/json'
      }
    }).then((response)=>{
      console.log(response.data)
      resolve(response.data)
    }, err =>{
      reject(err)
    })
  })
}