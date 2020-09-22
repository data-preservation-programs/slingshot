
  class User{
      constructor(){

      }
      setInfo(username,email,ffsToken){
          this.username=username;
          this.email=email;
          this.ffsToken=ffsToken;
      }
      getUsername(){
          return this.username;
      }
      getEmail(){
          return this.email;
      }
      getFfsToken(){
          return this.ffsToken;
      }
  }

  module.exports=User;