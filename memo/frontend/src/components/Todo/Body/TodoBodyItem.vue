<template>
  <div>
    <ul class="todo_body_items">
      <li
        v-for="list in TODO_LIST"
        :key="list"
        :class="list.status === 'done' ? 'todo_body_done' : 'todo_body_item'"
      >
        <label for="btn_edit">
          <span>{{ list.memo }}</span>
        </label>
        <div class="btn_box">
          <button
            v-if="list.status === 'done'"
            class="btn revert"
            @click="CHANGE_STATUS(list, 'created')"
          >
            <font-awesome-icon
              class="fa-spin"
              icon="fa-solid fa-arrows-rotate"
            />
          </button>
          <div v-else>
            <button class="btn done" @click="CHANGE_STATUS(list, 'done')">
              <font-awesome-icon icon="fa-solid fa-check" />
            </button>
            <button
              id="btn_edit"
              class="btn edit"
              @click="$emit('findMemo', list)"
            >
              <font-awesome-icon icon="fa-solid fa-pen-to-square" />
            </button>
            <button class="btn delete" @click="CHANGE_STATUS(list, 'delete')">
              <font-awesome-icon icon="fa-solid fa-trash-can" />
            </button>
          </div>
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

    const CHANGE_STATUS = (list, status) => {
      store.commit("SET_FIND_TODO", list);
      store.dispatch("SET_FIND_TODO_STATUS", status);
    };

    return {
      TODO_LIST,
      CHANGE_STATUS,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/function.scss";

.todo_body_items {
  background: #fff;

  .todo_body_item {
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

  .todo_body_done {
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    padding-bottom: 10px;
    background: gray;

    span {
      text-decoration: line-through;
      color: #c5c5c5;
    }

    .btn_box {
      .btn {
        margin-right: 10px;
      }
    }

    &:last-child {
      padding: 0;
    }
  }
}
</style>
