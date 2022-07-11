<template>
  <div class="todo">
    <div class="todo_items">
      <Head />
      <hr />
      <Body @findMemo="openModal" />
    </div>
  </div>
  <Modal v-if="isModal" @closeModal="closeModal" />
</template>

<script>
import { computed, defineAsyncComponent, defineComponent } from "vue";
import { useModal } from "@/store/func.js";

export default defineComponent({
  components: {
    Head: defineAsyncComponent(() => import("@/components/Todo/TodoHead.vue")),
    Body: defineAsyncComponent(() => import("@/components/Todo/TodoBody.vue")),
    Modal: defineAsyncComponent(() => import("@/views/ModalView.vue")),
  },
  setup() {
    return {
      ...useModal(),
    };
  },
});
</script>

<style lang="scss" scoped>
.todo {
  width: 100%;
  background: #c5c5c5;

  .todo_items {
    width: 500px;
    background: #fff;
    margin: 0 auto;
  }
}
</style>
