var app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    results() {
      if (this.counter === 0) {
        return "Counter is 0";
        //Show "Not there yet" until you reach a result of exactly 37
      } else if (this.counter < 37) {
        return "Not yet";
        // Show "Too much!" if the result is greater than 37
      } else if (this.counter > 37) {
        return "too much";
      } else {
        return this.counter;
      }
    },
  },
  watch: {
    // Watch for changes in "result" and reset the value to 0 after 5 seconds
    counter() {
      const that = this;
      if (that.counter > 0) {
        setTimeout(function () {
          that.counter = 0;
        }, 5000);
      }
    },
  },
  methods: {
    addCounterFive() {
      this.counter = this.counter + 5;
    },
    addCounterOne() {
      this.counter = this.counter + 1;
    },
  },
});

app.mount("#assignment");
