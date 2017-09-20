<template>
  <div class="max">
    <div class="header">
      <router-link to="/home" class="iconfont icon-zuo" id="icon1"></router-link>
      <router-link to="/cart" class="iconfont icon-gouwuche" id="icon2"></router-link>
      <a href="javascript:;" class="iconfont icon-fenlei" id="icon3" @click="chu"></a>
       <p>登录</p>     
    </div>
    <div class="cen">
       <img src="../../build/img/1.jpg" /> 
    </div>
    <div class="foo">
      <dl>
        <dd :class={active1:flag}>
          <a href="javascript:;" @click="mima" :class={active:flag}>手机号码快速登录</a>
          <span></span>
        </dd>
        <dd :class={active1:flag1}>
          <a href="javascript:;" @click="zhanghao" :class={active:flag1}>账号密码登录</a>
        </dd>
      </dl>
      <div class="foo1"></div>
      <div class="fo" id="carp" v-show="flag">
        <ul>
          <li>
            <span class="iconfont icon-shouji" id="ic"></span>
            <input type="tel" placeholder="请输入您的手机号码" v-model="phone">
          </li>
          <li>
            <span class="iconfont icon-yanzheng" id="ic1"></span>
            <input type="number" placeholder="请输入图片验证码" v-model="img">
            <div class="img">
              <img :src="imgdata" @click="getimg"/>
            </div>
          </li>
           <li>
             <span class="iconfont icon-duanxin-copy" id="ic2"></span>
              <input type="number" placeholder="请输入短信验证码" v-model="char">
              <a>发送验证码</a>
          </li>
        </ul> 
        <div class="cent1">
          <!-- <router-link to="">忘记密码?</router-link> -->
        </div>                                                
      </div>

      <div class="fo" id="carp" v-show="flag1">
        <ul>
          <li>
            <span class="iconfont icon-wode" id="ic"></span>
            <input type="tel" placeholder="请输入手机号码" v-model="phone">
          </li>
          <li>
            <span class="iconfont icon-mima" id="ic1"></span>
            <input type="password" placeholder="请输入密码" v-model="password">
          </li>
          <li>
            <span class="iconfont icon-yanzheng" id="ic2"></span>
            <input type="number" placeholder="请输入图片验证码" v-model="img">
            <div class="img">
              <img :src="imgdata" @click="getimg"/>
            </div>
          </li>
        </ul>
        <div class="cent">
          <router-link to="">忘记密码?</router-link>
        </div>                                              
      </div>
    </div> 

    <div class="footer">
      <ol>
        <li>
          <router-link to="/reg">注册</router-link>  
        </li>
        <li>
          <router-link to="">登录</router-link>  
        </li>
      </ol>
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
      export default{
          name:"Mine",
          data(){
              return{
                imgdata:"/loho88/code/mobile/getCaptchaCode?+Math.random()",
                phone:"",
                img:"",
                char:"",
                flag:true,
                flag1:false,
                class:"haha",
                class1:"haha1",
                password:"",
                show:false
              }
          },
          methods:{
            getimg(){
              this.imgdata="http://m.loho88.com/code/mobile/getCaptchaCode?"+Math.random()
            },
            mima(){
              this.flag=true;
              this.flag1=false;
              this.imgdata="http://m.loho88.com/code/mobile/getCaptchaCode?"+Math.random()
            },
            zhanghao(){
              this.flag=false;
              this.flag1=true
              this.imgdata="http://m.loho88.com/code/mobile/getCaptchaCode?"+Math.random()
            },
            chu(){
              // console.log("点击");
              this.show=!this.show
            }
          },
          mounted(){

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
    .cen{
      padding-top:0.6rem;
    }
    .cen img{
      width:100%;
      height:auto;
      float:left;
    }
    .foo{
      width:100%;
    }
    .foo dl{
      width:100%;
      background:#fff;
      float:left;
      border-bottom:1px solid #ccc;
      height:0.55rem;
      position: relative;
      margin-bottom:0.05rem;
    }
    .foo dl dd{
      width:50%;
      float:left;
      text-align:center;
      /* border-bottom:2px solid red;  */
    }
    .foo dl dd:nth-child(2){
      border-bottom:none;
    }
    .foo dl dd a{
      font-size:0.16rem;
      color:#000;
      width:100%;
      height:100%;
      /* background:red; */
      display: block;
      padding-top:0.15rem;
      padding-bottom:0.18rem;
      /* color:red; */
      /* border-right:1px solid #ccc; */
    }
    .foo dl dd span{
      height: 0.16rem;
      width:0.01rem;
      background: #cccccc;
      position: absolute;
      left:1.88rem;
      top:0.18rem;
    }
    .foo dl dd:nth-child(2) a{
      border-right:none;
      color:#000;
    }
    .foo1{
      background:#f1f2f3;
      height:0.05rem;
      padding-top:2.65rem;
      border-bottom:1px solid #ccc;
    }
    .fo{
      background:#fff;
      position: relative;
      
      /* margin-bottom:0.12rem; */
    }
    .fo ul{
      border-bottom:1px solid #ccc;
    }
    .fo ul li{
      height:0.6rem;
      border-bottom:1px solid #ccc;
      margin-left:0.3rem;
    }
    .fo ul li:nth-child(3){
      border-bottom:none;
    }
    .fo ul li input{
      border:none;
      line-height:0.6rem; 
      padding-left:0.3rem;
      width:3.11rem;
    }
    .fo ul li .img{
      position: absolute;
      
      width:1.2rem;
      height:0.6rem;
      display: inline;
      right:0;
    }
    .fo ul li .img img{
      height:100%;
      width:100%;
    }
    .fo ul li a{
      position: absolute;
      background:#e8343b;
      width:1.2rem;;
      height:0.6rem;
      display: inline;
      right:0;
      font-size:0.18rem;
      color:#fff;
      text-align: center;
      line-height: 0.6rem;
    }
    #ic{
      font-size:0.25rem;
      position: absolute;
      top:0.17rem;
    }
    #ic1{
      font-size:0.25rem;
      position: absolute;
      top:0.78rem;
    }
    #ic2{
      font-size:0.25rem;
      position: absolute;
      top:1.39rem;
    }
    .active{
      color:red !important;
    }
    .active1{
     border-bottom:2px solid red !important;
    }
    .cent1{
      padding-bottom:0.91rem;
      background:#f1f2f3;
    }
    .cent{
      background:#f1f2f3;
      padding-bottom:0.68rem;
    }
    .cent a{
      font-size:0.18rem;
      padding-left:0.15rem;
      color:#000;
    }
    .footer{
      height: 0.6rem;
       /* background:red;  */
      position: fixed;
      bottom:0;left:0;
      width:100%;
    }
    .footer ol{
      float:left;
      width:100%;
    }
    .footer ol li{
      float:left;
      width:50%;
    }
    .footer ol li:nth-child(2){
      background:#ccc;
    }
    .footer ol li a{
      color:#000;
      font-size:0.18rem;
      width:100%;
      display: block;
      height:100%;
      text-align: center;
      line-height:0.6rem;
    }
    .footer ol li:nth-child(2) a{
      color:#999;
    }
</style>
