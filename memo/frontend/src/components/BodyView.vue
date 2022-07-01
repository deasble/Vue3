<template>
  <div class="todo_container">
    <div class="todo_container_items">
      <BodyHeader />
      <div class="boundary"></div>
      <BodyDetail />
    </div>
  </div>
  <Edit v-if="isModal" />
</template>

<script>
import { computed, defineAsyncComponent, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    BodyHeader: defineAsyncComponent(() =>
      import("@/components/Body/BodyHeader.vue")
    ),
    BodyDetail: defineAsyncComponent(() =>
      import("@/components/Body/BodyDetail.vue")
    ),
    Edit: defineAsyncComponent(() => import("@/components/EditModal.vue")),
  },
  setup() {
    const store = useStore();

    const isModal = computed(() => store.getters.ISMODAL);

    return {
      isModal,
    };
  },
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