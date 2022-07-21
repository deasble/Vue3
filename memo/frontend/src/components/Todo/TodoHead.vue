<template>
  <div class="todo_head">
    <input type="text" class="td_input" v-model="todo" @keyup.enter="SET_TODO_LIST" />
    <button class="btn" @click="SET_TODO_LIST">
      <font-awesome-icon icon="fa-solid fa-circle-plus" />
    </button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const todo = ref('');

    const SET_TODO_LIST = () => {
      store.dispatch('FETCH_TODO', todo.value);
      todo.value = '';
    };

    return {
      todo,
      SET_TODO_LIST,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/function.scss';

.todo_head {
  display: flex;
  background: #fff;

  .td_input {
    width: 100%;
  }

  .btn {
    font-size: 1.5rem;
  }
}
</style>
