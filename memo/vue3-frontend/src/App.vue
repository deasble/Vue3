<template>
  <Header />
  <section>
    <main>
      <Body />
    </main>
  </section>
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

<style lang="scss" scoped>
.bodyview {
  display: flex;
  background: #f0f1f3;
}
</style>
