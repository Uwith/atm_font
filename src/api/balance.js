import axios from "axios";

/*
* 用户余额查询接口
* @author wangsong
* @Param id
* */
export function balance(id){
    return axios({
        method: 'get',
        url: 'http://127.0.0.1:8081/atm/user/balance?id=' + id,
        data: {}
    })
}