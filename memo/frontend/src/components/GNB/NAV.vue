<template>
  <nav class="nav">
    <ul class="nav_items">
      <li class="nav_items_item" v-for="nav in NAVBAR" :key="nav">
        <router-link :to="nav.url">
          <span>{{ nav.name }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const NAVBAR = reactive([
      {
        url: "/",
        name: "Home",
      },
      {
        url: "/todo",
        name: "Todo",
      },
    ]);

    return {
      NAVBAR,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav {
  padding-top: 13px;

  .nav_items {
    display: flex;

    .nav_items_item {
      margin-right: 10px;
      color: #2c3e50;
      font-size: 1.2rem;

      .router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
