<template>
  <section class="bodyheader">
    <article class="body_in">
      <input type="text" class="td_input" v-model="memo" />
      <button class="btn create" @click="Add">
        <font-awesome-icon icon="fa-solid fa-circle-plus" />
      </button>
    </article>
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const memo = ref("");

    const Add = () => {
      console.log(memo.value);
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

    .td_input {
      width: 100%;
    }
  }
}
</style>