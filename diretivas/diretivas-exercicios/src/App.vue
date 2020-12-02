<template>
	<div id="app">
		<h1>Diretivas</h1>
    <hr>
    <p v-text="'Teste'"></p>
    <p v-html="'Usando diretiva <strong>v-html<strong>'"></p>
    <hr>
    <p v-destaque-local:fundo.atraso.alterar="{cor1: 'red', cor2: 'blue', atraso: 2000, intervalo: '200'}">
      Usando diretiva personolizada</p>
    <p v-destaque-local.atraso="{cor1: 'red', atraso: 5000}">Usando diretiva personolizada</p>
    <hr>
    <p v-destaque:fundo.atraso="'red'">Usando diretiva personolizada</p>
    <p v-destaque="'red'">Usando diretiva personolizada</p>
	</div>
</template>

<script>
export default {
	directives: {
    'destaque-local': {
      bind(el, binding) {

        const aplicarCor = cor => {
          if(binding.arg === 'fundo') {

            // el.style.backgroundColor = 'lightgreen'
            el.style.backgroundColor = cor
          } else {
            el.style.color = cor
          }
        }

        let atraso = 0;
        if(binding.modifiers['atraso']) atraso = binding.value.atraso;

        const cor1 = binding.value.cor1;
        const cor2 = binding.value.cor2;
        let corAtual = cor1;

        setTimeout(() => {
          if(binding.modifiers['alterar']) {
            setInterval(() => {
              corAtual = corAtual === cor1 ? cor2 : cor1;
              aplicarCor(corAtual)
            }, binding.value.intervalo)

          } else {
            aplicarCor(cor1)
          }
          aplicarCor(binding.value.cor1)
        }, atraso);
      }
    }
  },
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
