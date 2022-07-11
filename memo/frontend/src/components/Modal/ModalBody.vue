<template>
  <section class="modal_body">
    <div class="input_box">
      <input class="td_input" type="text" v-model="FIND_TODO.memo" />
    </div>
  </section>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const FIND_TODO = computed({
      get: () => store.getters.FIND_TODO,
      set(value) {
        store.commit("SET_FIND_TODO_MEMO", value);
      },
    });

    return {
      FIND_TODO,
    };
  },
});
</script>

<style lang="scss" scoped>
.modal_body {
  .input_box {
    padding: 20px 0;

    .td_input {
      width: 100%;
      outline: 0;
      border: 1px solid black;
    }
  }
}
</style>
