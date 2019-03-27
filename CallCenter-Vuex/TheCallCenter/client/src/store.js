import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import router from "./router";
import alertPlugin from "./alertplugin";

Vue.use(Vuex);

var store = new Vuex.Store({
  strict: true,
  plugins: [alertPlugin],
  state: {
    calls: [],
    error: ""
  },
  mutations: {
    setError(state, msg) {
      state.error = msg;
      if (msg) console.log(`Error: ${msg}`);
    },
    setCalls(state, calls) {
      state.calls = calls;
    },
    addCall(state, call) {
      state.calls.push(call);
    },
    removeCall(state, id) {
      state.calls = state.calls.filter(function (c) { return c.id !== id; });
    }
  },
  actions: {
    load({ commit }) {
      axios.get("/api/calls")
        .then(res => {
          let calls = res.data;
          commit("setCalls", calls);
        })
        .catch(() => commit("setError", "Failed to load the calls..."));
    },
    answer({ commit }, call) {
      axios.patch(`/api/calls/${call.id}/answer`)
        .then(() => {
          commit("removeCall", call);
          router.push("/");
        })
        .catch(() => commit("setError", "Failed to mark it as answered"));
    }
  }
});

export default store;
