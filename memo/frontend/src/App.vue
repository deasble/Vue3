<template>
  <GNB />
  <section style="padding: 70px">
    <router-view />
  </section>
</template>

<script>
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  components: {
    GNB: defineAsyncComponent(() => import("@/views/GNB.vue")),
  },
  setup() {},
});
</script>
