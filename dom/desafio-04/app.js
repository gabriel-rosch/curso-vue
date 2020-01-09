new Vue({
	el: '#desafio',
	data: {
		class1: 'destaque',
		perigo: true,
		classDigitada: '',
		trueFalse: false
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				this.class1 = this.class1 == 'destaque' ? 'escolher' : 'destaque'
			})

		},
		iniciarProgresso() {

		},
		methodCss(){

		},
		setPerigo(e){
			if(e.target.value == 'true'){
				console.log("true")
				this.trueFalse = true
			}else if(e.target.value == 'false'){
				console.log("false")
				this.trueFalse = false
			}
		}
	}
})
