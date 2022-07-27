<template>
  <section class="modal_body">
    <div class="memo_edit_box">
      <span>할 일</span>
      <div class="input_box">
        <input class="td_input" type="text" v-model="FIND_TODO.memo" />
      </div>
    </div>
  </section>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const FIND_TODO = computed({
      get: () => store.getters.FIND_TODO,
      set(value) {
        store.commit('SET_FIND_TODO_MEMO', value);
      },
    });

    return {
      FIND_TODO,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/function.scss';

.modal_body {
  .memo_edit_box {
    padding: 20px;

    .input_box {
      margin-top: 5px;

      .td_input {
        width: 100%;
        outline: 0;
        border: 1px solid black;
      }
    }
  }
}
</style>
