var app = Vue.createApp({
  data() {
    return {
      inputText: "",
      toggle: true,
      inputBackgroundColor: "",
    };
  },
  methods: {
    toggleButton: function () {
      this.toggle = !this.toggle;
    },
    enter() {
      this.style = !this.style;
    },
  },
  computed: {
    computedClasses() {
      return {
        user1: this.inputText === "user1",
        user2: this.inputText === "user2",
        visible: this.toggle,
        hidden: !this.toggle,
      };
    },
  },
});

app.mount("#assignment");
