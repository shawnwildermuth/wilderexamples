export default store => {
  store.subscribe((mutation, state) => {
    if (mutation.type === "setError") {
      alert("Call removed!");
    }
  });

  store.subscribeAction({
    after: (action, state) => {
      if (action.type === "load") {
        alert("loading data");
      }
    }
  });
};