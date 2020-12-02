<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Idade do usuário <strong>{{ idade }}</strong></p>
        <p>Nome do Usuário <strong>{{ inverterNome() }}</strong></p>
        <button @click="reiniciarNome">Reiniciar nome</button>
        <button @click="reiniciarFn">Reiniciar nome (callBack)</button>
    </div>
</template>

<script>
  import barramento from "@/barramento";
  export default {
    props: {
      nome: {
        type: String,
        default: 'Anônimo'
      },
      reiniciarFn: Function,
      idade: Number
    },
    methods: {
      reiniciarNome() {
        this.nome = 'pedro'
        this.$emit('nomeMudou', this.nome)
      },
      inverterNome() {
        return this.nome.split('').reverse().join('')
      }
    },
    created() {
      barramento.quandoIdadeMudar(idade => {
        this.idade = idade
      })
    }
  }
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
