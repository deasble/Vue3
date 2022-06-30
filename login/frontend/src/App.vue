<template>
  <div class="app">
    <div v-if="isLogin">
      <p>안녕하세요. {{ account.user.name }}님</p>
    </div>
    <div v-else>
      <div class="loginid">
        <span>아이디</span>
        <input type="text" v-model="account.form.loginId" />
      </div>
      <div class="loginpw">
        <span>비밀번호</span>
        <input type="password" v-model="account.form.loginPw" />
      </div>
    </div>
    <hr />
    <button v-if="isLogin" @click="logout">
      <span>로그아웃</span>
    </button>
    <button v-else @click="login"><span>로그인</span></button>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { FETCH_USER, POST_LOGIN, DELETE_LOGOUT } from "@/api/index.js";

export default defineComponent({
  components: {},
  setup() {
    const account = reactive({
      user: {
        id: null,
        name: "",
      },
      form: {
        loginId: null,
        loginPw: null,
      },
    });
    const isLogin = ref(false);

    const login = async () => {
      try {
        const args = {
          id: account.form.loginId,
          pw: account.form.loginPw,
        };
        const result = await POST_LOGIN(args);
        account.user = result.data;
        isLogin.value = true;
      } catch (error) {
        alert("로그인의 실패하였습니다.");
      }
    };

    const logout = async () => {
      await DELETE_LOGOUT();
      account.user.id = null;
      account.user.name = "";
      isLogin.value = false;
    };

    const onCreated = async () => {
      try {
        const result = await FETCH_USER();
        account.user = result.data;
        isLogin.value = true;
      } catch (error) {
        alert("로그인을 해주시길 바랍니다.");
      }
    };

    onCreated();

    return {
      account,
      isLogin,
      login,
      logout,
    };
  },
});
</script>
