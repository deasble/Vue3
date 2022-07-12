<template>
  <div class="todo_body">
    <div v-if="TODO_LIST.length">
      <TodoBodyItem @findMemo="$emit('findMemo', $event)" />
    </div>
    <div v-else class="empty">
      <span>할 일이 없습니다.</span>
    </div>
  </div>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, provide } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    TodoBodyItem: defineAsyncComponent(() =>
      import("@/components/Todo/Body/TodoBodyItem.vue")
    ),
  },
  emits: ["findMemo"],
  setup() {
    const store = useStore();

    const TODO_LIST = computed(() => store.getters.TODO_LIST);

    provide("TODO_LIST", TODO_LIST);

    const onCreated = async () => {
      await store.dispatch("SET_TODO_LIST");
    };

    onCreated();

    return {
      TODO_LIST,
    };
  },
});
</script>

<style lang="scss" scoped>
.todo_body {
  .empty {
    padding: 50px;
    text-align: center;
  }
}
</style>
