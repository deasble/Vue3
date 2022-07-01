<template>
  <section class="bodydetail">
    <article class="todo_list">
      <div v-if="isMemoList">
        <div v-if="START_INDEX" class="btn_box">
          <button class="btn move" @click="INDEX_MINUS">
            <font-awesome-icon icon="fa-solid fa-angle-up" />
          </button>
        </div>
        <ul class="todo_list_items">
          <li v-for="list in SHOW_MEMO_LIST" :key="list">
            <span class="text-sm">{{ list.memo }}</span>
            <div>
              <button class="btn">
                <span class="text-sm">완료</span>
              </button>
              <button class="btn update" @click="openModal(list.id)">
                <font-awesome-icon icon="fa-solid fa-pen-to-square" />
              </button>
              <button class="btn delete" @click="remove(list.id)">
                <font-awesome-icon icon="fa-solid fa-trash-can" />
              </button>
            </div>
          </li>
        </ul>
        <div v-if="MAX_MEMO_LIST_INDEX > START_INDEX" class="btn_box">
          <button class="btn move" @click="INDEX_PLUS">
            <font-awesome-icon icon="fa-solid fa-angle-down" />
          </button>
        </div>
      </div>
      <div v-else class="empty">
        <span class="text-sm">할 일이 없습니다.</span>
      </div>
    </article>
  </section>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const ALL_MEMO_LIST = computed(() => store.getters.ALL_MEMO_LIST);

    const isMemoList = ref(false);

    const START_INDEX = ref(0);
    const MAX_MEMO_LIST = ref(5);

    const MAX_MEMO_LIST_INDEX = computed(
      () => MEMO_LIST.value.length / MAX_MEMO_LIST.value - 1
    );

    const MEMO_LIST = computed(() =>
      ALL_MEMO_LIST.value.filter((memo) => memo.status !== "delete")
    );

    const SHOW_MEMO_LIST = computed(() => {
      const show = START_INDEX.value * MAX_MEMO_LIST.value;
      return MEMO_LIST.value.slice(show, show + MAX_MEMO_LIST.value);
    });

    const INDEX_PLUS = () => START_INDEX.value++;
    const INDEX_MINUS = () => START_INDEX.value--;

    const openModal = (id) => {
      store.dispatch("SET_FINDMEMO", id);
      store.commit("SET_ISMODAL", true);
    };

    const remove = (id) => {
      const result = confirm("삭제 하시겠습니까?");
      if (result) store.dispatch("DELETE_MEMO_LIST", id);
    };

    const onCreated = async () => {
      await store.dispatch("SET_ALL_MEMO_LIST");
      if (ALL_MEMO_LIST.value) {
        isMemoList.value = true;
      }
    };

    onCreated();

    return {
      SHOW_MEMO_LIST,
      isMemoList,
      START_INDEX,
      MAX_MEMO_LIST,
      MAX_MEMO_LIST_INDEX,
      INDEX_PLUS,
      INDEX_MINUS,
      openModal,
      remove,
    };
  },
});
</script>


<style lang="scss" scoped>
@import "@/assets/scss/function.scss";

.bodydetail {
  display: block;
  margin-top: 10px;

  .todo_list {
    display: block;

    .btn_box {
      text-align: center;
    }

    .todo_list_items {
      li {
        margin-bottom: 0.5rem;
        display: flex;
        justify-content: space-between;

        &:last-child {
          margin: 0;
        }
      }
    }

    .empty {
      padding: 10px;
      text-align: center;
    }
  }
}
</style>