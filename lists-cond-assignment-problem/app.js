var app = Vue.createApp({
  data() {
    return {
      textInput: "",
      tasks: [],
      isVisible: true,
      buttonHide: "Hide",
      buttonShow: "Show",
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.textInput);
      this.textInput = "";
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");
