import { useState } from "react";

function useModals(props) {
  const [modals, setModals] = useState(getModals(props));

  function toggleModal(key) {
    const m = { ...modals };
    m[key].show = !m[key].show;
    setModals({ ...m });
  }

  return {
    modals,
    toggleModal,
  };
}

function getModals(list) {
  const modalList = {};
  list.map((li) => (modalList[li] = { show: false }));
  return modalList;
}

export { useModals };
