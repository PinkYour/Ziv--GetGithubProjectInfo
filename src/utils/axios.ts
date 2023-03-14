import axios from 'axios';


export default axios.create({
    baseURL:'https://api.github.com/',
    timeout:5000
})
// 响应拦截器
axios.interceptors.response.use(
    res => res.data,  // 拦截到响应对象，将响应对象的 data 属性返回给调用的地方
    err => Promise.reject(err)
)
