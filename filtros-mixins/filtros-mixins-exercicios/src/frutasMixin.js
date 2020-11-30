export default {
    data() {
        return {
            cpf: '10907626904',
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