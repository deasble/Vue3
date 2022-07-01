<template>
  <div class="app">
    <div class="main">
      <div class="item_box">
        <div v-if="isLogin" class="mypage">
          <p>안녕하세요. {{ account.name }}님</p>
        </div>
        <Login v-else />
        <div class="btn_box">
          <button class="btn" v-if="isLogin" @click="logout">
            <span>로그아웃</span>
          </button>
          <button class="btn" v-else @click="login">
            <span>로그인</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineAsyncComponent,
  defineComponent,
  reactive,
  ref,
} from "vue";
import { FETCH_USER, POST_LOGIN, DELETE_LOGOUT } from "@/api/index.js";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    Login: defineAsyncComponent(() => import("@/components/LoginView.vue")),
  },
  setup() {
    const store = useStore();

    const account = ref({
      id: null,
      name: "",
    });

    const USER = computed(() => store.getters.USER);

    const isLogin = ref(false);

    const login = async () => {
      try {
        const args = {
          id: USER.value.loginId,
          pw: USER.value.loginPw,
        };
        const result = await POST_LOGIN(args);
        account.value = result.data;
        isLogin.value = true;
      } catch (error) {
        alert("로그인의 실패하였습니다.");
      }
    };

    const logout = async () => {
      await DELETE_LOGOUT();
      account.value.id = null;
      account.value.name = "";
      isLogin.value = false;
    };

    const onCreated = async () => {
      try {
        const result = await FETCH_USER();
        account.value = result.data;
        isLogin.value = true;
      } catch (error) {
        console.error(error.message);
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

<style lang="scss" scoped>
@import "@/assets/scss/function.scss";
.app {
  width: 100%;
  height: 100%;
  background: #e6e6e6;
  display: flex;
  justify-items: center;
  align-items: center;
  position: fixed;

  .main {
    width: 500px;
    height: 100px;
    margin: 0 auto;
    display: flex;

    background: #fff;

    .item_box {
      width: 100%;
      display: flex;

      .mypage {
        display: flex;
        align-items: center;
        margin-left: 5px;
      }

      .btn_box {
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
