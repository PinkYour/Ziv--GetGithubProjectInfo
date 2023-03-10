import axios from 'axios';

// axios.defaults.baseURL = 'https://api.github.com/repos/';

export default axios.create({
    baseURL:'https://api.github.com/'
})
// 响应拦截器
// axios.interceptors.response.use(
//     res => res.data,  // 拦截到响应对象，将响应对象的 data 属性返回给调用的地方
//     err => Promise.reject(err)
// )
