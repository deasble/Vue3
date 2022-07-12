import _ from "lodash";
import { ref } from "vue";
import { useStore } from "vuex";

export function useModal() {
  const store = useStore();

  const isModal = ref(false);

  const reset = {
    id: null,
    memo: "",
    status: "",
  };

  const openModal = (list) => {
    store.commit("SET_FIND_TODO", _.cloneDeep(list));
    isModal.value = true;
  };

  const closeModal = () => {
    isModal.value = false;
    store.commit("SET_FIND_TODO", reset);
  };

  return {
    isModal,
    openModal,
    closeModal,
  };
}
