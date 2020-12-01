<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
    <b-card>
      <b-form-group label="Nome:">
        <b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe seu nome"/>
      </b-form-group>
      <b-form-group label="Email:">
        <b-form-input type="text" size="lg" v-model="usuario.email" placeholder="Informe seu email"/>
      </b-form-group>
      <hr>
      <b-button @click="salvar" variant="primary" size="lg">Salvar</b-button>
      <b-button @click="obterUsuarios" size="lg" variant="success" class="ml-2">Obter Usuários</b-button>
    </b-card>
    <hr>
    <b-list-group>
      <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
        <strong>Nome: <strong>{{ usuario.nome }}</strong></strong><br>
        <strong>E-Mail: <strong>{{ usuario.email}}</strong></strong><br>
        <strong>Id: <strong>{{ id}}</strong></strong>
      </b-list-group-item>
    </b-list-group>
	</div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: {},
      usuario: {
        nome: '',
        email: ''
      }
    }
  },
  methods: {
    salvar() {
      this.$http.post('usuario.json', this.usuario)
      .then(() => {
        this.usuario.nome = '';
        this.usuario.email = '';
      })
    },
    obterUsuarios() {
      this.$http.get('usuario.json')
        .then(res => {
          this.usuarios = res.data
        })
    }
  }
  // created() {
  //   this.$http.post('usuario.json', {
  //     name: 'Maria',
  //     email: 'maria_maria@gmail.com'
  //     // eslint-disable-next-line no-console
  //   }).then(res => console.log(res));
  // }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
