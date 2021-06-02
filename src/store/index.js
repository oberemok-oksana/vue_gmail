import Vue from "vue";
import colors from "tailwindcss/colors";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: "indigo",
    themeColors: {
      indigo: {
        "--color-primary-50": colors.indigo[50],
        "--color-primary-100": colors.indigo[100],
        "--color-primary-400": colors.indigo[400],
        "--color-primary-500": colors.indigo[500],
        "--color-primary-600": colors.indigo[600],
      },
      red: {
        "--color-primary-50": colors.red[50],
        "--color-primary-100": colors.red[100],
        "--color-primary-400": colors.red[400],
        "--color-primary-500": colors.red[500],
        "--color-primary-600": colors.red[600],
      },
      yellow: {
        "--color-primary-50": colors.yellow[50],
        "--color-primary-100": colors.yellow[100],
        "--color-primary-400": colors.yellow[400],
        "--color-primary-500": colors.yellow[500],
        "--color-primary-600": colors.yellow[600],
      },
      green: {
        "--color-primary-50": colors.green[50],
        "--color-primary-100": colors.green[100],
        "--color-primary-400": colors.green[400],
        "--color-primary-500": colors.green[500],
        "--color-primary-600": colors.green[600],
      },
    },
    social: [
      {
        id: 1,
        selected: false,
        starred: false,
        read: true,
        saved: false,
        user: "Josué Ayala",
        message:
          "Similique rerum amet, deserunt facere sapiente rem unde, nisi natus adipisci, qui maiores porro itaque. Dolor ratione, eaque iusto nisi eos voluptate.",
      },
      {
        id: 2,
        selected: false,
        starred: false,
        read: false,
        saved: false,
        user: "Adam Wathan",
        message:
          "Esse nisi eveniet, impedit dicta dolore illo eligendi quo quae amet voluptatum, id nostrum corrupti libero, officiis sed aspernatur deleniti vero mollitia!.",
      },
      {
        id: 3,
        selected: false,
        starred: false,
        read: true,
        saved: false,
        user: "Simon Vrachliotis",
        message:
          "Veniam possimus voluptatem illo tempora ea, delectus, temporibus eligendi voluptatum pariatur commodi dicta molestiae cum praesentium quidem corrupti in et? Voluptas, ipsum?",
      },
    ],
    inbox: [
      {
        id: 1,
        selected: false,
        starred: false,
        read: true,
        saved: false,
        user: "Josué Ayala",
        message:
          "Similique rerum amet, deserunt facere sapiente rem unde, nisi natus adipisci, qui maiores porro itaque. Dolor ratione, eaque iusto nisi eos voluptate.",
      },
      {
        id: 2,
        selected: false,
        starred: false,
        read: false,
        saved: false,
        user: "Adam Wathan",
        message:
          "Esse nisi eveniet, impedit dicta dolore illo eligendi quo quae amet voluptatum, id nostrum corrupti libero, officiis sed aspernatur deleniti vero mollitia!.",
      },
      {
        id: 3,
        selected: false,
        starred: false,
        read: true,
        saved: false,
        user: "Simon Vrachliotis",
        message:
          "Veniam possimus voluptatem illo tempora ea, delectus, temporibus eligendi voluptatum pariatur commodi dicta molestiae cum praesentium quidem corrupti in et? Voluptas, ipsum?",
      },
      {
        id: 3,
        selected: false,
        starred: false,
        read: false,
        saved: false,
        user: "Lee Robinson",
        message:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      },
      {
        id: 3,
        selected: false,
        starred: false,
        read: false,
        saved: false,
        user: "Steve Schoger",
        message:
          "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from",
      },
    ],
    promotions: [
      {
        id: 1,
        selected: false,
        starred: false,
        read: true,
        saved: false,
        user: "Josué Ayala",
        message:
          "Similique rerum amet, deserunt facere sapiente rem unde, nisi natus adipisci, qui maiores porro itaque. Dolor ratione, eaque iusto nisi eos voluptate.",
      },
      {
        id: 2,
        selected: false,
        starred: false,
        read: false,
        saved: false,
        user: "Jed Watson",
        message:
          "Esse nisi eveniet, impedit dicta dolore illo eligendi quo quae amet voluptatum, id nostrum corrupti libero, officiis sed aspernatur deleniti vero mollitia!.",
      },
      {
        id: 3,
        selected: false,
        starred: false,
        read: true,
        saved: false,
        user: "Yuri Sulyma",
        message:
          "Veniam possimus voluptatem illo tempora ea, delectus, temporibus eligendi voluptatum pariatur commodi dicta molestiae cum praesentium quidem corrupti in et? Voluptas, ipsum?",
      },
      {
        id: 3,
        selected: false,
        starred: false,
        read: true,
        saved: false,
        user: "Asheesh Kapur",
        message:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage",
      },
      {
        id: 3,
        selected: false,
        starred: false,
        read: false,
        saved: false,
        user: "Joe Moeller",
        message:
          "need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
      },
      {
        id: 3,
        selected: false,
        starred: false,
        read: false,
        saved: false,
        user: "David Jaz Myers",
        message:
          "first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable",
      },
    ],
  },
  mutations: {
    NEW_THEME(state, color) {
      state.theme = color;
    },
  },
  actions: {
    changeCurrentTheme({ commit }, color) {
      commit("NEW_THEME", color);
    },
  },
  modules: {},
});
