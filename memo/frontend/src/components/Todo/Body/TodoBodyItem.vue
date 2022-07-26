<template>
  <div class="todo_list">
    <ul class="todo_body_items">
      <draggable class="todo_body_items_drag" :list="TODO_LIST" @change="log">
        <li
          v-for="list in TODO_LIST"
          :key="list"
          :class="list.status === 'done' ? 'todo_body_done' : 'todo_body_item'"
        >
          <div class="head_box">
            <input type="checkbox" v-model="status" true-value="done" false-value="created" />
            <button @click="$emit('FindMemo', list)">
              <span>{{ list.memo }}</span>
            </button>
          </div>
          <button
            v-if="list.status !== 'done'"
            class="btn delete"
            @click="CHANGE_STATUS(list, 'delete')"
          >
            <font-awesome-icon icon="fa-solid fa-trash-can" />
          </button>
        </li>
      </draggable>
    </ul>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { VueDraggableNext } from 'vue-draggable-next';

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
  },
  emits: ['FindMemo'],
  props: ['TODO_LIST'],
  setup(props) {
    const store = useStore();

    const status = ref(false);

    const CHANGE_STATUS = list => {
      console.log(status.value);
      // store.commit('SET_FIND_TODO', list);
      // store.dispatch('SET_FIND_TODO_STATUS', status);
    };

    const log = event => {
      store.dispatch('CHANGE_LIST', event.moved);
    };

    const onCreated = () => {
      // console.log(props.SHOW_TODO_LIST);
    };

    onCreated();

    return {
      status,
      CHANGE_STATUS,
      log,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/function.scss';

.todo_list {
  .todo_body_items {
    .todo_body_items_drag {
      .todo_body_item {
        display: flex;
        justify-content: space-between;
        font-size: 1.3rem;
        margin-bottom: 10px;

        .head_box {
          .btn {
            margin: 0 5px 0 10px;
          }
        }

        .btn {
          margin-right: 10px;
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

        .head_box {
          .btn {
            margin: 0 5px 0 10px;
          }

          span {
            text-decoration: line-through;
            color: #c5c5c5;
          }
        }

        &:last-child {
          padding: 0;
        }
      }
    }
  }
}
</style>
