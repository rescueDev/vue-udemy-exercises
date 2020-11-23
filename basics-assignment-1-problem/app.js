const app = Vue.createApp({
  data() {
    return {
      age: 28,
      name: "Salvatore",
      img: "https://glue-labs.com/wp-content/uploads/2018/02/a.png",
    };
  },
  methods: {
    favouriteNumber: function () {
      var randNumb = Math.random().toFixed(2);
      return randNumb;
    },
    ageInFiveYears: function () {
      newAge = this.age + 5;
      return newAge;
    },
  },
});

app.mount("#assignment");
