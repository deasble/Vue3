<template>
  <footer class="footer">
    <button class="btn" @click="Edit">
      <span>수정</span>
    </button>
  </footer>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const Edit = () => {
      store.dispatch("Edit_TODO_LIST");
    };

    return {
      Edit,
    };
  },
});
</script>
