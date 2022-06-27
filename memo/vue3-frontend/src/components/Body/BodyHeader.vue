<template>
  <section class="bodyheader">
    <article class="body_in">
      <input type="text" class="td_input" v-model="memo" @keyup.enter="Add" />
      <button class="btn create" @click="Add">
        <font-awesome-icon icon="fa-solid fa-circle-plus" />
      </button>
    </article>
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { CREATE_MEMO } from "@/api/index.js";

export default defineComponent({
  setup() {
    const store = useStore();

    const memo = ref("");

    const Add = () => {
      store.dispatch("CREATE_MEMO", memo);
      memo.value = "";
    };

    return {
      memo,
      Add,
    };
  },
});
</script>


<style lang="scss" scoped>
@import "@/assets/scss/function.scss";
.bodyheader {
  display: block;
  margin-bottom: 5px;

  .body_in {
    display: flex;
  }
}
</style>