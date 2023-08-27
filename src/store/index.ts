import { createStore } from "vuex";

export default createStore({
  state: {
    name: "May San Business",
    userName: "Pyae Phyo Thant",
    services: [
      "fresh burmese curry",
      "fresh chinese curry",
      "fresh traditiional curry",
    ],
    internationalServices: [
      "Singapore",
      "Japan",
      "US",
      "Korea",
      "England",
      "Taiwan",
      "Canada",
      "Others",
    ],
    waitingTime: [
      {
        id: 1,
        country: "singapore",
        takeTime: "2days+",
      },
      {
        id: 2,
        country: "Japan",
        takeTime: "3days+",
      },
    ],
  },

  getters: {
    getSingaporeData: (state) =>
      state.waitingTime.filter((itm) => itm.country === "singapore")[0],
  },

  mutations: {
    changeProfileNameByMutation: (state, value) => (state.userName = value),
  },
  actions: {
    setNameProfileName: ({ state }, value) => (state.userName = value),
  },
  modules: {},
});
