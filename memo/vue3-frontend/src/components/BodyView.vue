<template>
  <div class="todo_container">
    <div class="todo_container_items">
      <BodyHeader />
      <div class="mx-2" style="border-top: 1px solid #ebebeb"></div>
      <BodyDetail />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  components: {
    BodyHeader: defineAsyncComponent(() =>
      import("@/components/Body/BodyHeader.vue")
    ),
    BodyDetail: defineAsyncComponent(() =>
      import("@/components/Body/BodyDetail.vue")
    ),
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.todo_container {
  display: flex;
  background: #f0f1f3;

  .todo_container_items {
    width: 410px;
    background: #fff;
    margin: 0 auto;
  }
}
</style>