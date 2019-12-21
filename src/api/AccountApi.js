import Api from './index'


class AccountApi {

   static login(user){
      return Api.post(Api.BASE_URL + '/v1/owners/login',user)
   }

}

export default AccountApi