<template>
  <div class="todo_body">
    <div v-if="RE_TODO_LIST.length">
      <div class="btn_box">
        <button class="btn" v-if="CHEVRON" @click="down">
          <font-awesome-icon icon="fa-solid fa-chevron-up" />
        </button>
      </div>
      <TodoBodyItem @findMemo="$emit('findMemo', $event)" />
      <div class="btn_box">
        <button class="btn" v-if="SHOW_LENGTH > CHEVRON" @click="plus">
          <font-awesome-icon icon="fa-solid fa-chevron-down" />
        </button>
      </div>
    </div>
    <div v-else class="empty">
      <span>할 일이 없습니다.</span>
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineAsyncComponent,
  defineComponent,
  provide,
  ref,
} from "vue";
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

    const CHEVRON = ref(0);

    const TODO_LIST_LIMIT = 10;

    const SHOW_LENGTH = computed(() =>
      parseInt(TODO_LIST.value.length / TODO_LIST_LIMIT)
    );

    const RE_TODO_LIST = computed(() => {
      const START_INDEX = CHEVRON.value * TODO_LIST_LIMIT;
      return TODO_LIST.value.slice(START_INDEX, START_INDEX + TODO_LIST_LIMIT);
    });

    provide("TODO_LIST", RE_TODO_LIST);

    const plus = () => {
      CHEVRON.value += 1;
    };

    const down = () => {
      CHEVRON.value -= 1;
    };

    const onCreated = async () => {
      await store.dispatch("SET_TODO_LIST");
    };

    onCreated();

    return {
      CHEVRON,
      TODO_LIST_LIMIT,
      SHOW_LENGTH,
      RE_TODO_LIST,
      plus,
      down,
    };
  },
});
</script>

<style lang="scss" scoped>
.todo_body {
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
