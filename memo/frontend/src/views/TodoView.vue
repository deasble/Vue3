<template>
  <div class="todo">
    <div class="todo_items">
      <Head />
      <Body @findMemo="openModal" />
    </div>
    <Footer />
  </div>
  <Modal v-if="isModal" @closeModal="closeModal" />
</template>

<script>
import { computed, defineAsyncComponent, defineComponent } from "vue";
import { useModal } from "@/js/func.js";

export default defineComponent({
  components: {
    Head: defineAsyncComponent(() => import("@/components/Todo/TodoHead.vue")),
    Body: defineAsyncComponent(() => import("@/components/Todo/TodoBody.vue")),
    Footer: defineAsyncComponent(() =>
      import("@/components/Todo/TodoFooter.vue")
    ),
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
@import "@/assets/scss/function.scss";

.todo {
  width: 100%;
  background: #c5c5c5;

  .todo_items {
    width: $width-size;
    background: #fff;
    margin: 0 auto;
  }
}
</style>
