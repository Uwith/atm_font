import axios from "axios";

/*
* 存取款接口
* @author wangsong
* @Param cardId doMoney doType
* */
export function doMoney(money) {
    return axios({
        method: 'post',
        url: 'http://127.0.0.1:8081/atm/user/inner',
        data: money
    })
//    1 cun
//    2 qu
}