<template>
 <div class="max">
        <div class="header">
            <router-link to="/mine" class="iconfont icon-zuo" id="icon1"></router-link>
            <router-link to="/cart" class="iconfont icon-gouwuche" id="icon2"></router-link>
            <a href="javascript:;" class="iconfont icon-fenlei" id="icon3" @click="chu"></a>
            <p>手机快速注册</p>     
        </div>    
        <div class="jian"></div>
                    <div class="form-list">
                        <ul>
                            <li>
                                <p>手机号</p>
                                <input type="tel" v-model="phone" placeholder="请输入手机号">
                            </li>  
                            <li>
                                <p>图形验证码</p>
                                <input  v-model="imgCaptcha" placeholder="请输入图形验证码">
                                <div class="img">
                                    <img :src="captchaSrc"  @click="getCaptchaSrc">
                                </div>
                            </li>
                            <li>
                                <p>验证码</p>
                                <input  v-model="captcha" placeholder="请输入短信验证码">
                                <a href="javascript:;" @click="getCaptcha">发送验证码</a>
                            </li>
                            <li>
                                <p>密码</p>
                                <input type="password" v-model="password" placeholder="请输入6-20位数字/字母或符号组合">
                            </li>
                            <li>
                                <p>确认密码</p>
                                <input type="password" v-model="rPassword" placeholder="请在输入一次">
                            </li>           
                        </ul>
                    </div>



               <div class="cent">
                   <p>完成注册表示您已看过并接受<a href="javascript:;">《LOHO用户协议》</a></p>
               </div>
               <div class="foote">
                   <router-link to="" @click="regSubmit">完成注册</router-link>
               </div>

                <div class="di" v-show="show">
                    <router-link to="">
                    <i class="iconfont icon-wode-copy"></i>
                    会员中心
                    </router-link>
                    <router-link to="/home">
                    <i class="iconfont icon-shouye"></i>
                    首页
                    </router-link>
                    <div class="jiao"></div>
                </div>
</div>  
</template>

<script>
export default {
  name:"reg",
  data(){
      return {
        phone:"",
        imgCaptcha:"",
        captcha:"",
        password:"",
        rPassword:"",
        captchaSrc:"http://m.loho88.com/code/mobile/getCaptchaCode?"+Math.random(),
        show:false
      }
  },
  methods:{
     getCaptchaSrc(){
         this.captchaSrc="http://m.loho88.com/code/mobile/getCaptchaCode?"+Math.random()
     },
     getCaptcha(){
         //数据校验
         if(this.imgCaptcha){

         }
         if(this.phone){
           
         }
         //获取短信验证码
         this.axios.post(`/loho88/uc/mobile/register/code?captcha=${this.imgCaptcha}&mobile=${this.phone}`).then(res=>{
             alert(res.data.msg);
         })
     },
     regSubmit(){
         
         var params = {
                agreement:true,
                captcha:this.captcha  ,
                inputCaptcha:this.imgCaptcha ,
                password:this.password,
                repassword:this.rPassword,
                username:this.phone
         }
           console.log(qs.stringify(params))
         this.axios.post("/loho88/uc/mobile/register",qs.stringify(params),{
                headers:{
                    "Content-type":"application/x-www-form-urlencoded"
                }
         })
     },
         chu(){
              // console.log("点击");
              this.show=!this.show
            }
 }
}
</script>
<style scoped>
.di{
  position: fixed;
  background:#fff;
  top:0.81rem;
  right:0.06rem;
  border:1px soild #e1e1e1;
  width:1.8rem;
  height:1.1rem;
}
.di a{
 display: block;
 width:100%;
 height:50%;
 color:#000;
 /* text-align: center; */
 padding-left:0.7rem;
 line-height: 0.55rem;
}
.di a .iconfont{
 font-size:0.23rem;
 position: absolute;
 left:0.25rem;
 color:#000;
}
.jiao{
  position: absolute;
  top:-0.14rem;
  right:0.15rem;
  height: 0;
  width:0;
  /* background:red; */
  border-top:0.07rem solid transparent;
  border-right:0.07rem solid transparent;
  border-left:0.07rem solid transparent;
  border-bottom:0.07rem solid #fff;
}
    .max{
      background:#f1f2f3;
    }   
    .header{
      height:0.6rem;
      position: fixed;
      top:0;
      left:0;
      width:100%;
      background:#fff;
      border-bottom:1px solid #ccc;
    }
     .header #icon1{
      position: absolute;
      color:#000;
      line-height:0.6rem;
      left:0.25rem;
      font-size:0.2rem;
    } 
    .header p{
      text-align:center;
      color:#000;
      font-size:0.2rem;
      line-height:0.6rem;  
    }
    #icon2{
      position: absolute;
      color:#000;
      right:0.85rem;
      line-height:0.6rem;
      font-size:0.25rem;
    }
    #icon3{
      position: absolute;
      color:#000;
      right:0.25rem;
      line-height:0.6rem;
      font-size:0.1rem;
    }
    .jian{
        border-bottom:1px solid #ccc;
        background-attachment: #f1f2f3;
        padding-top:0.68rem;
        height: 0.05rem;
        width:100%;
    }
    .form-list{
        position: relative;
        
        background:#fff;
    }
    .form-list ul{
        width:100%;
    }
    .form-list ul li{
        width:100%;
        
        height: 0.6rem;

    }
    .form-list ul li a{
        position: absolute;
        display: block;
        width:1.2rem;
        height: 0.59rem;
        background:#e8343b;
        color:#fff;
        text-align: center;
        line-height:0.59rem;
        right:0;
        top:1.18rem;
    }
    .form-list ul li .img{
        position: absolute;
        height:0.59rem;
        right:0;
        width:1.2rem;
        top:0.58rem;
    }
    .form-list ul li .img img{
         height:100%;
         width:100%;
    }
    .form-list ul li p{
        font-size:0.16rem;
        float:left;
        width:1rem;  
        text-align: center;  
        line-height:0.6rem;
        /* height:0.65rem;  */
        /* padding-top:0.05rem; */
    }
    .form-list ul li input{
        border-top:none;
        border-left:none;
        border-right:none;
        border-bottom:1px solid #ccc;
        width:2.74rem; 
        height:0.57rem;  
    }
    .form-list ul li:nth-child(5) input{
        border-bottom:none;
    }
    .cent{
        padding-top:1.93rem;
        padding-bottom:0.21rem;
        width:100%;
    }
    .cent p{
        text-align: center;
    }
    .cent a{
        color:red;
    }
    .foote{
        position: fixed;
        height: 0.6rem;
        width:100%;
        bottom:0;
        left: 0;
    }
    .foote a{
        color:#eee;
        background:#ccc;
        width:100%;
        height:0.6rem;
        display: block;
        text-align: center;
        font-size:0.15rem;
        line-height:0.6rem;
    }
</style>
