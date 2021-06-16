import request from "@/util/request"

export function getPhoneList() {
    return request({
        url:"/products",
        method:"get",
        params:{
            categoryId:'100012',
            pageSize:6
        }
    })
}

export function getProducts() {
    return request({
        url:"/products",
        method:"get",
        params:{
            categoryId:'100012',
            pageSize:14
        }
    })
}

export function Login(username, password) {
    return request({
        url:"/user/login",
        method:"post",
        data:{
            username,
            password
        }
    })
}

export function getUserInfo() {
    return request({
        url:"/user",
        method:"get",
    })
}

export function getCartInfo() {
    return request({
        url:"/carts/products/sum",
        method:"get",
    })
}

export function getProductInfo(id) {
    return request({
        url:`/products/${id}`,
        methods:"get",
    })
}

export function selectCart(productId, selected) {
    return request({
        url:"/cart",
        method:"post",
        data:{
            productId,
            selected
        }
    })
}

export function logout(){
    return request({
        url:'/user/logout',
        method:'post',
    })
}

export function getCartSum(){
    return request({
        url:'/carts/products/sum',
        method:'get',
    })
}
