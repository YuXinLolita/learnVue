<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
    />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入手机号"
        v-model="username"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        type="password"
        placeholder="请输入密码"
        v-model="password"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        type="password"
        placeholder="确认密码"
        v-model="password"
      />
    </div>
    <div class="wrapper__register__button" @click="handleRegisterClick">
      注册
    </div>
    <div class="wrapper__register__link" @click="handleLoginClick">
      已有账号去登陆
    </div>
    <ToastPage v-if="show" :message="toastMessage" />
  </div>
</template>
  
<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { post } from "../../utils/request";
import ToastPage, { useToastEffect } from "../../components/Toast";
// import {axios} from 'axios'
// import {reactive} from 'vue'

const useRegisterEffect = (showToast) => {
  const router = useRouter();

  const data = reactive({
    username: "",
    password: "",
  });
  const handleRegisterClick = async () => {
    try {
      const result = await post("/api/user/register", {
        username: data.username,
        password: data.password,
      });
      if (result?.errno === 0) {
        router.push({ name: "LoginPage" });
        confirm('登录成功')
      } else {
        confirm("注册失败");
        showToast('注册失败')
      }
    } catch (e) {
      confirm("请求失败");
      showToast('请求失败')
    }
  };
  const { username, password } = toRefs(data);
  return {
    username,
    password,
    handleRegisterClick,
  };
};

const handleLoginclick2 = () => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push({ name: "LoginPage" });
  };
  return {
    useRouter,
    handleLoginClick
  }
};
export default {
  name: "RegisterPage",
  components: {
    ToastPage,
  },
  setup() {
    const { show, toastMessage, showToast } = useToastEffect();
    const { username, password, handleRegisterClick } =
      useRegisterEffect(showToast);
      const {handleLoginClick} = handleLoginclick2()
    // try {
    //         const result = await post("/api/user/regist", {
    //           username: data.mobile,
    //           password: data.password,
    //         });
    //         if (result?.errno === 0) {
    //           router.push({ name: "Home" });
    //         } else {
    //           showToast("注册失败");
    //         }
    //       } catch (e) {
    //         showToast("请求失败")

    //     }
    //
    //};
    // const handleLoginClick = () => {
    //   router.push({ name: "LoginPage" });
    // };
    return {
      handleRegisterClick,
      handleLoginClick,
      username,
      password,
      show,
      toastMessage,
      showToast,
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
  &__register__button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    font-size: 0.16rem;
    text-align: center;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 $content-notice-contcolor;
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    color: #fff;
  }
  &__register__link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-contcolor;
  }
}
</style>