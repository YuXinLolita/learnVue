<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
    />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入用户名"
        v-model="username"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入密码"
        v-model="password"
      />
    </div>
    <div class="wrapper__login__button" @click="handleLogin">登录</div>
    <div class="wrapper__login__link" @click="handleRegisterClick">
      立即注册
    </div>
    <button @click="handleTest">测试</button>
    <ToastPage v-if="show" :message="toastMessage" />
  </div>
</template>
  
<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
 import axios from "axios";
import { post } from "../../utils/request";
import ToastPage, { useToastEffect } from "../../components/Toast";
//const {showToast} = useToastEffect()
const userLoginEffect = (showToast) => {
  const router = useRouter();
  const data = reactive({
    username: "",
    password: "",
    // showToast: false,
    // toastMessage: "",
  });
  const handleLogin = async () => {
    try {
      const result = await post("/api/user/login", {
        username: data.username,
        password: data.password,
      });
      if (result?.errno === 0) {
        //result?.data?.errno
        localStorage.isLogin = true;
        router.push({ name: "Home" });
      } else {
        console.log("*** 123");
        showToast("登录失败");
        // data.showToast = true;
        // data.toastMessage = "登录失败";
        // //confirm("登录失败");
        // setTimeout(() => {
        //   data.showToast = false;
        //   data.toastMessage = "";
        // }, 2000);
      }
    } catch (e) {
      console.log("*** 456");
      showToast("请求失败");
      // data.showToast = true;
      // data.toastMessage = "登录失败";
      // //confirm("登录失败");
      // setTimeout(() => {
      //   data.showToast = false;
      //   data.toastMessage = "";
      // }, 2000);
      // confirm("请求失败");
    }
  };
  const { username, password } = toRefs(data);
  return {
    username,
    password,
    handleLogin,
    //showToast
  };
};
const useRegisterEffect = () => {
  const router = useRouter();
  const handleRegisterClick = () => {
    router.push({ name: "Register" });
  };
  return {
    useRouter,
    handleRegisterClick,
  };
};
//axios.defaults.headers.post["Content-Type"] = "application/json";
export default {
  name: "LoginPage",
  components: {
    ToastPage,
  },
  setup() {
    //职责流程
    // const router = useRouter();
    const { show, toastMessage, showToast } = useToastEffect();
    const { username, password, handleLogin } = userLoginEffect(showToast);
    const { handleRegisterClick } = useRegisterEffect();

    
   const  handleTest =async() =>{
      const result2 = await get('/ https://quranenc.com/api/v1/translations/list/[[{语言}]]/？localization={language_iso_code}')
    }
    // }).then(()=>{
    //   confirm('成功')
    //   localStorage.isLogin = true
    //   router.push({name:'Home'})
    // }).catch(()=>{
    //   confirm('登录失败')
    // })
    // localStorage.isLogin = true
    // router.push({name:'Home'})

    // const handleRegisterClick = () => {
    //   router.push({ name: "Register" });
    // };

    return {
      handleLogin,
      handleRegisterClick,
      username,
      password,
      showToast,
      show,
      toastMessage,
    };
  },
};
</script>
  
  <style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;

    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__input {
    box-sizing: border-box;
    padding: 0 0.16rem;
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    background-color: #f9f9f9;
    border: 1px solid rgba(0, 0, 0.1);
    border-radius: 6px;

    &__content {
      line-height: 0.48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: 0.16rem;
      color: r;
      &::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  &__login__button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    font-size: 0.16rem;
    text-align: center;
    background: #0091ff;
    box-shadow: 0 0.04prem 0.08rem 0 $content-notice-contcolor;
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    color: #fff;
  }
  &__login__link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-contcolor;
  }
}
</style>