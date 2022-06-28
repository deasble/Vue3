<template>
  <div class="app">
    <div class="loginid">
      <span>아이디</span>
      <input type="text" />
    </div>
    <div class="loginpw">
      <span>비밀번호</span>
      <input type="text" />
    </div>
    <hr />
    <button @click="login"><span>로그인</span></button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  components: {},
  setup() {
    const login = () => {
      console.log("로그인");
    };

    axios.get("/api/account").then((req) => {
      console.log(req);
    });

    return {
      login,
    };
  },
});
</script>
