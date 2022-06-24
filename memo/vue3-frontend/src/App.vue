<template>
  <Header />
  <Body />
  <Footer />
</template>

<script>
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  components: {
    Header: defineAsyncComponent(() => import("@/components/HeaderView.vue")),
    Body: defineAsyncComponent(() => import("@/components/BodyView.vue")),
    Footer: defineAsyncComponent(() => import("@/components/FooterView.vue")),
  },
  setup() {},
});
</script>
