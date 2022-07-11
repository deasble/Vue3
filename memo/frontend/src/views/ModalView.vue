<template>
  <div class="modal_bg">
    <div class="modal">
      <ModalHead @closeModal="$emit('closeModal')" />
      <hr />
      <ModalBody />
      <hr />
      <ModalFooter />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  components: {
    ModalHead: defineAsyncComponent(() =>
      import("@/components/Modal/ModalHead.vue")
    ),
    ModalBody: defineAsyncComponent(() =>
      import("@/components/Modal/ModalBody.vue")
    ),
    ModalFooter: defineAsyncComponent(() =>
      import("@/components/Modal/ModalFooter.vue")
    ),
  },
  emits: ["closeModal"],
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/function.scss";

.modal_bg {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  .modal {
    width: $width-size;
    margin: 50px auto;
    background: #fff;
    border-radius: 0.5rem;
  }
}
</style>
