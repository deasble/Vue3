import { ref } from "vue";
import { useStore } from "vuex";

export function useModal() {
  const store = useStore();

  const isModal = ref(false);

  const openModal = (list) => {
    store.commit("SET_FIND_TODO", list);
    isModal.value = true;
  };

  const closeModal = (list) => {
    isModal.value = false;
    store.commit("SET_FIND_TODO", list);
  };

  return {
    isModal,
    openModal,
    closeModal,
  };
}
