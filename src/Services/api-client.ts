import axios, { CanceledError } from 'axios';

export default axios.create({
   baseURL: "https://api.rawg.io/api",
   params: {
      key: "397690221b71467cb6683a7ab0981498"
   }
})

