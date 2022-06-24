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
              <button class="btn update">수정</button>
              <button class="btn delete">삭제</button>
            </div>
          </li>
        </ul>
        <div v-if="SHOW_MEMO_LIST.length === MAX_MEMO_LIST" class="btn_box">
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
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const MEMO_LIST = computed(() => store.getters.MEMO_LIST);

    const isMemoList = ref(false);

    const START_INDEX = ref(0);
    const MAX_MEMO_LIST = ref(5);

    const SHOW_MEMO_LIST = computed(() => {
      const show = START_INDEX.value * MAX_MEMO_LIST.value;
      return MEMO_LIST.value.slice(show, show + MAX_MEMO_LIST.value);
    });

    const INDEX_PLUS = () => START_INDEX.value++;
    const INDEX_MINUS = () => START_INDEX.value--;

    const onCreated = async () => {
      await store.dispatch("SET_MEMO_LIST");
      if (MEMO_LIST.value) {
        isMemoList.value = true;
      }
    };

    onCreated();

    return {
      SHOW_MEMO_LIST,
      isMemoList,
      START_INDEX,
      MAX_MEMO_LIST,
      INDEX_PLUS,
      INDEX_MINUS,
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
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;

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