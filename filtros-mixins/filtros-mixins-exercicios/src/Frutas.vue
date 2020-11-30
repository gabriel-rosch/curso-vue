<tamplate>
  <div>
    <ul>
      <li v-for="fruta in frutas">
        {{ fruta }}
      </li>
      <input type="text" v-model="fruta" @keydown.enter="add">
    </ul>
  </div>
</tamplate>

<script>
export default {
  data() {
    return {
      fruta: '',
      frutas: ['banana','maça', 'laranja']
    }
  },
  methods: {
    add() {
      this.frutas.push(this.fruta)
      this.fruta = ''
    }
  }
}
</script>
<style>

</style>