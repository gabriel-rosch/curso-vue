<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
    <b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>
    <transition name="fade">
      <b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
    </transition>
<!--    Prioridade: type="animation".
        appear fazer transition assosiada ao carregar tela-->
    <transition name="slide" type="animation" appear>
      <b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
    </transition>

    <transition enter-active-class="animated bounce" leave-active-class="animated wobble">
      <b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
    </transition>

    <hr>

    <b-select class="mb-5" v-model="tipoAnimacao">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>

<!--    mode="out-in" Espera um elemento sair para depois o outro entrar -->
<!--    Quando existe mais de um elemento animado deve usar key para ativar animação-->
    <transition :name="tipoAnimacao" mode="out-in">
      <b-alert variant="info" show v-if="exibir" key="info">{{msg}}</b-alert>
      <b-alert variant="warning" show v-else key="warn">{{msg}}</b-alert>
    </transition>

    <hr>

    <button @click="exibir2 = !exibir2">Alternar</button>
<!--    :css=false pois como a transition esta implementada em js não deve aplicar css-->
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"

      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div class="caixa" v-if="exibir2"></div>
    </transition>
	</div>
</template>

<script>

export default {
  data() {
    return {
      msg: 'Uma mensagem de infirmação para o usuário',
      exibir: false,
      exibir2: true,
      tipoAnimacao: 'fade',
      larguraBase: 0
    }
  },
  methods: {
    animar(el, done, negativo) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase  (negativo ? + rodada * 10 : - rodada * 10);
        el.style.width = `${novaLargura}px`
        rodada++
        if(rodada > 30) {
          clearInterval(temporizador)
          done()
        }
      },20)
    },
    beforeEnter(el){
      this.larguraBase = 0;
      el.style.width = 0
    },
    enter(el, done){
      this.animar(el, done, true)
    },
    afterEnter(){
    },
    enterCancelled(){
    },
    beforeLeave(el){
      this.larguraBase = 300;
      el.style.width = `${this.larguraBase}px`
    },
    leave(el, done){
      this.animar(el, done, false)
    },
    afterLeave(){
    },
    leaveCancelled(){
    },
  }
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
  font-size: 1.5rem;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}

.fade-enter, .fade-leave-to  {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}

@keyframes slide-in {
  from {transform: translateY(40px)}
  to {transform: translateY(0)}
}
@keyframes slide-out {
  from {transform: translate(0)}
  to {transform: translateY(40px)}
}
/*css timing functions (ease)*/
.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}
.slide-leave-active {
  animation: slide-out 2s ease;
  transition: opacity 2s;
}
.slide-enter, .slide-leave-to  {
  opacity: 0;
}
</style>
