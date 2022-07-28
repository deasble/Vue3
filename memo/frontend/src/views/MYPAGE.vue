<template>
  <div class="mypage">
    <div class="mypage_head">
      <span class="title">MY PAGE</span>
    </div>

    <div class="mypage_body"></div>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    // const TODO_LIST = computed(() => store.getters.TODO_LIST);

    const onCreated = async () => {
      // await store.dispatch('SET_TODO_LIST');
    };

    onCreated();

    return {};
  },
});
</script>

<style lang="scss" scoped>
.mypage {
  .mypage_head {
    height: 70px;

    .title {
      line-height: 70px;
      font-size: 1.8rem;
      margin-left: 10px;
      font-weight: bold;
    }
  }

  .mypage_body {
  }
}
</style>
