<template>
  <GNB />
  <section style="padding-top: 68px">
    <router-view />
  </section>
</template>

<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    GNB: defineAsyncComponent(() => import('@/views/GNB.vue')),
  },
  setup() {},
});
</script>
