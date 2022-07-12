<template>
  <div>
    <ul class="todo_body_items">
      <li v-for="list in TODO_LIST" :key="list">
        <span>{{ list.memo }}</span>
        <div class="btn_box">
          <button
            class="btn done"
            v-if="list.status === 'created'"
            @click="Done(list)"
          >
            <font-awesome-icon icon="fa-solid fa-check" />
          </button>
          <button v-else class="btn revert" @click="revert(list)">
            <font-awesome-icon
              class="fa-spin"
              icon="fa-solid fa-arrows-rotate"
            />
          </button>
          <button class="btn edit" @click="$emit('findMemo', list)">
            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          </button>
          <button class="btn delete" @click="del(list)">
            <font-awesome-icon icon="fa-solid fa-trash-can" />
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, inject } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  emits: ["openModal"],
  setup() {
    const store = useStore();

    const TODO_LIST = inject("TODO_LIST");

    const Done = (list) => {
      store.dispatch("SET_FIND_TODO", list);
      store.dispatch("SET_FIND_TODO_STATUS", "done");
      store.dispatch("Edit_TODO_LIST");
    };

    const revert = (list) => {
      store.dispatch("SET_FIND_TODO", list);
      store.dispatch("SET_FIND_TODO_STATUS", "created");
      store.dispatch("Edit_TODO_LIST");
    };

    const del = (list) => {
      store.dispatch("SET_FIND_TODO", list);
      store.dispatch("SET_FIND_TODO_STATUS", "delete");
      store.dispatch("Edit_TODO_LIST");
    };

    return {
      TODO_LIST,
      Done,
      revert,
      del,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/function.scss";

.todo_body_items {
  li {
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    margin-bottom: 10px;

    .btn_box {
      .btn {
        margin-right: 10px;
      }
    }

    &:last-child {
      margin: 0;
    }
  }
}
</style>
