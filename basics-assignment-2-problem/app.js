const app = Vue.createApp({
  data() {
    return {
      inputText: "",
      inputEnter: "",
      alertMessage: "Vue is awesome",
    };
  },
  methods: {
    alertClick(message) {
      return alert(message);
    },
    setName(event) {
      this.inputText = event.target.value;
    },
    setNameenter(event) {
      this.inputEnter = event.target.value;
    },
  },
});

app.mount("#assignment");
