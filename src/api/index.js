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
