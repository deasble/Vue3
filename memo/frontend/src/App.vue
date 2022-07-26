<template>
  <GNB />
  <section style="padding-top: 68px">
    <router-view />
  </section>
  <Footer />
</template>

<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    GNB: defineAsyncComponent(() => import('@/views/GNB.vue')),
    Footer: defineAsyncComponent(() => import('@/components/Footer.vue')),
  },
  setup() {},
});
</script>
