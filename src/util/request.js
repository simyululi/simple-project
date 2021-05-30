import axios from "axios";

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const service = axios.create({
    baseURL : '/api',
    timeout : 8000,
})

service.interceptors.response.use(function (response) {
    let res = response.data
    if (res.status == 0) {
        return res.data
    } else if (res.status == 10) {
        window.location.href = '/#/login'
        return Promise.reject(res)
    } else {
        Message.warning(res.msg)
        return Promise.reject(res)
    }
},(error => {
    let res = error.response;
    Message.error(res.data.message);
    return Promise.reject(error);
})
)

service.interceptors.request.use(function (config){
    return config
}, (error) => {return Promise.reject(error)})


export default service
