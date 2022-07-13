<template>
  <header class="GNB">
    <div class="head">
      <div class="head_item">
        <span>PROJECT 1</span>
      </div>
      <NAV />
    </div>
  </header>
</template>

<script>
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  components: {
    NAV: defineAsyncComponent(() => import("@/components/GNB/NAV.vue")),
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.GNB {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  border-bottom: 1px solid black;

  .head {
    display: flex;
    padding: 10px 0;
    background: #fff;

    .head_item {
      padding: 0 20px;
      font-size: 2rem;
      font-weight: bold;
    }
  }
}
</style>
