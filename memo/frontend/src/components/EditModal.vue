<template>
  <section class="modal_section">
    <article class="modal_article">
      <div class="modal_header">
        <span class="text-xl">Memo Update</span>
        <button class="btn create" @click="closeModal">
          <font-awesome-icon icon="fa-solid fa-x" />
        </button>
      </div>
      <div class="boundary"></div>
      <div class="modal_body">
        <input class="td_input" v-model="findMemo.memo" type="text" />
      </div>
      <div class="boundary"></div>
      <div class="modal_footer">
        <button class="btn modalupdate" @click="update">
          <span>수정</span>
        </button>
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

    const findMemo = computed({
      get: () => store.getters.FINDMEMO,
      set: (value) => store.commit("SET_FINDMEMO_MEMO", value),
    });

    const closeModal = () => store.commit("SET_ISMODAL", false);

    const update = () => {
      store.dispatch("UPDATE_MEMO_LIST", findMemo.value);
      closeModal();
    };

    return {
      findMemo,
      closeModal,
      update,
    };
  },
});
</script>


<style lang="scss" scoped>
@import "@/assets/scss/function.scss";
.modal_section {
  display: block;
  position: fixed;
  z-index: 1;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  top: 0;

  .modal_article {
    width: 350px;
    background: #fff;
    margin: 40px auto;
    text-align: center;

    .modal_header {
      display: flex;
      justify-content: space-between;
      padding: 10px 0 10px 10px;
    }

    .modal_body {
      padding: 10px;
    }

    .modal_footer {
    }
  }
}
</style>