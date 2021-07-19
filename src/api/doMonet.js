import axios from "axios";
/*
* 存取款接口
* @author wangsong
* @Param cardId doMoney doType
* */
export function doMoney(cardId,doMoney,doType){
    return axios({
        method: 'post',
        url: 'http://127.0.0.1:8081/atm/user/doMoney',
        data: {cardId,doMoney,doType}
    })
}