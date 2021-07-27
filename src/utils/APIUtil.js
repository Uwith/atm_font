// var serverBase = 'http://127.0.0.1:8081/'
var serverBase = 'http://127.0.0.1:8081/'
// var v1 = serverBase + '/api/v1/'
var v1 = serverBase + 'atm/'
export default {
  BASE_SERVER_URL: serverBase,
  /**
   * 登录
   * post
   * @Param  userkeyCustomer passkeyCustomer
   */
  API_URL_LOGIN: serverBase + "login",
  /**
   * 存取款接口
   * post
   * @Param cardId doMoney doType
   */
  API_URL_DO_MONEY: v1 + "user/doMoney",
  /**
   * 查询余额
   * get
   * @param cardId
   */
  API_URL_BALANCER: v1 + "allQuery/balance",
  /**
   * 查询银行卡流水
   * post
   * @param cardId
   */
  API_URL_CARD_LOG: v1 + "allQuery/cardLog",
  /**
   * 查询 用户所拥有的卡
   * post
   * @param cardId
   */
  API_URL_CARD_INFO: v1 + "allQuery/cardInfo",
  /**
   * 注册 新卡
   * post
   * @param cardId
   */
  API_URL_INSERT_CARD: v1 + "cardOperation/insertCard",
  /**
   * 登录 卡
   * post
   * @param cardId
   */
  API_URL_CARD_LOGIN: v1 + "cardOperation/cardLogin",
}
