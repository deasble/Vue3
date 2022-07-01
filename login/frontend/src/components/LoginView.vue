<template>
  <div class="login_box">
    <div class="login_box_items">
      <input
        class="login_input login"
        type="text"
        v-model="LOGINID"
        placeholder="ID or Email"
      />
    </div>
    <div class="login_box_items">
      <input
        class="login_input login"
        type="password"
        v-model="LOGINPW"
        placeholder="Password"
      />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, reactive } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const LOGINID = computed({
      get: () => store.getters.LOGINID,
      set: (value) => store.commit("SET_USER_LOGINID", value),
    });

    const LOGINPW = computed({
      get: () => store.getters.LOGINPW,
      set: (value) => store.commit("SET_USER_LOGINPW", value),
    });

    return {
      LOGINID,
      LOGINPW,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/function.scss";

.login_box {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 0 10px 10px;

  .login_box_items {
    width: 100%;
    display: flex;
  }
}
</style>
