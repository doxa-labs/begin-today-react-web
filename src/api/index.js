class Api {

   static BASE_URL = 'http://url.com/api';

   static get(url){
      return this.isSuccess(fetch(url));
   }

   static post(url,data){
      return this.isSuccess(fetch(url,{
         method: "POST",
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(data)
      }));
   }

   static put(url,data){
      return this.isSuccess(fetch(url,{
         method: "PUT",
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(data)
      }));
   }

   static del(url){

   }

   static isSuccess(promise) {
      return promise.then((res)=>{
         if (res.status >= 200 && res.status < 300) {
            return res.json();
         } else {
            return new Promise((resolve,reject)=>{
               reject(res)
            })
         }
      })
   }
}

export default Api