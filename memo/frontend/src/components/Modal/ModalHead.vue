<template>
  <header class="modal_head">
    <div class="modal_head_box">
      <span>할 일 수정</span>
      <button
        class="btn"
        @click="$emit('closeModal', { id: null, memo: '', status: '' })"
      >
        <font-awesome-icon icon="fa-solid fa-x" />
      </button>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["closeModal"],
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.modal_head {
  padding: 20px 10px;
  .modal_head_box {
    display: flex;
    justify-content: space-between;
  }
}
</style>
