<template>
  <section class="section">
    <main class="todoview py-2">
      <article class="memo_create mb-2">
        <input
          class="input_box"
          type="text"
          v-model="memo"
          @keyup.enter="memoAdd"
          ref="memo_box"
          autofocus
        />
        <button v-if="findMemo" class="btn_create" @click="edit">
          <font-awesome-icon icon="fa-solid fa-pen" />
        </button>
        <button v-else class="btn_create" @click="memoAdd">
          <font-awesome-icon :icon="['fas', 'square-plus']" />
        </button>
      </article>
      <article class="memolist">
        <ul v-if="isMemoList">
          <li class="mb-2" v-for="list in MEMO_LIST" :key="list">
            <span class="py-2 pl-2">{{ list.memo }}</span>
            <div class="btn_box">
              <button class="btn edit mr-2" @click="getMemo(list.id)">
                <span>수정</span>
              </button>
              <button v-if="!findMemo" class="btn delete" @click="del(list.id)">
                <span>삭제</span>
              </button>
            </div>
          </li>
        </ul>
        <div v-else class="empty">
          <p>내용이 없습니다.</p>
        </div>
      </article>
    </main>
  </section>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const memo = computed({
      get: () => store.getters.MEMO,
      set: (value) => {
        store.commit("SET_MEMO", value);
      },
    });
    const findMemo = ref("");
    const memo_box = ref(null);

    const MEMO_LIST = computed(() => store.getters.MEMO_LIST);
    const isMemoList = ref(false);

    const memoAdd = () => {
      store.dispatch("POST_MEMO_LIST");
      store.dispatch("SET_MEMO_LIST");
    };

    const getMemo = () => {
      // findMemo.value = MEMO_LIST.value.find((memo) => memo.id === id);
      // memo.value = findMemo.value.memo;
      // memo_box.value.focus();
    };

    const edit = () => {};

    const del = () => {
      // axios.delete(`/api/memos/${id}`).then((response) => {
      //   MEMO_LIST.value = response.data;
      //   if (!MEMO_LIST.value.length) isMemoList.value = false;
      // });
    };

    const onCreated = async () => {
      await store.dispatch("SET_MEMO_LIST");

      if (MEMO_LIST.value) isMemoList.value = true;
    };

    onCreated();

    return {
      memo,
      findMemo,
      memo_box,
      MEMO_LIST,
      isMemoList,
      memoAdd,
      getMemo,
      edit,
      del,
    };
  },
});
</script>


<style lang="scss" scoped>
@import "@/assets/scss/TodoView.scss";
</style>