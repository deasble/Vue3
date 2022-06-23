<template>
  <Header />
  <Todo />
  <Footer />
</template>

<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    Header: defineAsyncComponent(() => import('@/view/HeaderView.vue')),
    Todo: defineAsyncComponent(() => import('@/view/TodoView.vue')),
    Footer: defineAsyncComponent(() => import('@/view/FooterView.vue')),
  },
  setup() {},
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>