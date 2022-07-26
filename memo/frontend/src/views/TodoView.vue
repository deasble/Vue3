<template>
  <div class="todo_bg">
    <div class="todo">
      <Head />
      <hr />
      <Body @FindMemo="openModal" />
    </div>
  </div>
  <Modal v-if="isModal" @closeModal="closeModal" />
</template>

<script>
import { computed, defineAsyncComponent, defineComponent } from 'vue';
import { useModal } from '@/js/func.js';

export default defineComponent({
  components: {
    Head: defineAsyncComponent(() => import('@/components/Todo/TodoHead.vue')),
    Body: defineAsyncComponent(() => import('@/components/Todo/TodoBody.vue')),
    Modal: defineAsyncComponent(() => import('@/views/ModalView.vue')),
  },
  setup() {
    return {
      ...useModal(),
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/function.scss';

.todo_bg {
  width: 100%;
  background: #c5c5c5;

  .todo {
    width: $width-size;
    margin: 0 auto;
  }
}
</style>
