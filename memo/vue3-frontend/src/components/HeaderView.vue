<template>
  <header class="header">
    <span>Todo</span>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  height: 60px;
  border-bottom: 1px solid black;

  span {
    font-size: 1.5rem;
    line-height: 60px;
  }
}
</style>