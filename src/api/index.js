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

//login
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

export function _register(username, password, email){
    return request({
        url:'/user/register',
        method:'post',
        data:{
            username,
            password,
            email
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

export function _addCart(productId, selected) {
    return request({
        url:"/carts",
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

//cart
export function checkCart(url){
    return request({
        url:url,
        method:'put',
    })
}

export function _getCartList(){
    return request({
        url:'/carts',
        method:'get',
    })
}

export function _delProduct(item){
    return request({
        url:`/carts/${item.productId}`,
        method:'delete',
    })
}

export function _updateCart(item,quantity, selected){
    return request({
        url:`/carts/${item.productId}`,
        method:'put',
        data:{
            quantity,
            selected
        }
    })
}
