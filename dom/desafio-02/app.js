new Vue({
  el: "#desafio",
  data: {
    valor: ""
  },
  methods: {
    alertButton(msg) {
      alert(msg);
    },
    inputEnter(e) {
      this.valor = e.target.enter;
    }
  }
});
