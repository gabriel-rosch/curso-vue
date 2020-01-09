new Vue({
  el: "#desafio",
  data: {
    nome: "Gabriel",
    idade: 23,
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEgJ3b2b99nQHctE4ZsMd8kIov2WB33LGQo4VTSFfjlSttsKQY"
  },
  methods: {
    numeroTandomico() {
      return Math.random();
    }
  }
});
