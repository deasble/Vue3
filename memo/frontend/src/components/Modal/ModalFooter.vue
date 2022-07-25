<template>
  <footer class="modal_footer">
    <div class="btn_box">
      <button class="btn" @click="Edit()">
        <span>수정</span>
      </button>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  emits: ['closeModal'],
  setup(props, { emit }) {
    const store = useStore();

    const Edit = () => {
      store.dispatch('Edit_TODO_LIST');
      emit('closeModal');
    };

    return {
      Edit,
    };
  },
});
</script>

<style lang="scss" scoped>
.modal_footer {
  .btn_box {
    display: flex;
    justify-content: end;
    padding: 10px;
    .btn {
      background: #007bff;
      border-radius: 0.2rem;
      padding: 5px 20px;
      color: #fff;
    }
  }
}
</style>
