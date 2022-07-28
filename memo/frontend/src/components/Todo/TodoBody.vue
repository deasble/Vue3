<template>
  <div class="todo_body">
    <TodoBodyItem
      v-if="TODO_LIST.length"
      :TODO_LIST="TODO_LIST"
      @FindMemo="$emit('FindMemo', $event)"
    />
    <div v-else class="empty">
      <span>할 일이 없습니다.</span>
    </div>
  </div>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, provide, ref } from 'vue';
import { useStore } from 'vuex';
import _ from 'lodash';

export default defineComponent({
  components: {
    TodoBodyItem: defineAsyncComponent(() => import('@/components/Todo/Body/TodoBodyItem.vue')),
  },
  emits: ['FindMemo'],
  setup() {
    const store = useStore();

    const TODO_LIST = computed(() => store.getters.TODO_LIST);

    // const CHEVRON = ref(0);
    // const TODO_LIST_LIMIT = 5;

    // const SHOW_LENGTH = computed(
    //   () => Math.ceil(TODO_LIST.value.length / TODO_LIST_LIMIT) - 1
    // );

    // const SHOW_TODO_LIST = computed(() => {
    //   const START_INDEX = CHEVRON.value * TODO_LIST_LIMIT;
    //   return _.cloneDeep(TODO_LIST.value).slice(
    //     START_INDEX,
    //     START_INDEX + TODO_LIST_LIMIT
    //   );
    // });

    // const plus = () => {
    //   CHEVRON.value++;
    // };

    // const down = () => {
    //   CHEVRON.value--;
    // };

    const onCreated = async () => {
      await store.dispatch('SET_TODO_LIST');
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
  height: 52vh;
  background: #fff;
  overflow: auto;
  overflow-x: hidden;

  .btn_box {
    text-align: center;

    .btn {
      width: 100%;
    }
  }

  .empty {
    padding: 50px;
    text-align: center;
  }
}
</style>
