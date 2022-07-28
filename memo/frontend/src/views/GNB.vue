<template>
  <header class="GNB_bg">
    <div class="GNB">
      <div class="menu">
        <a href="/" class="title">
          <span>PROJECT 1</span>
        </a>
        <NAV />
      </div>
    </div>
  </header>
</template>

<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    NAV: defineAsyncComponent(() => import('@/components/GNB/GNBNAV.vue')),
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/function.scss';

.GNB_bg {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  border-bottom: 1px solid black;

  .GNB {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    background: #fff;

    .menu {
      display: flex;

      .title {
        margin: 0 20px;
        font-size: 2rem;
        font-weight: bold;
      }
    }
  }
}
</style>
