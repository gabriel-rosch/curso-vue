new Vue({
	el: '#desafio',
	data: {
		class1: 'destaque',
		perigo: true,
		classDigitada: '',
		trueFalse: false,
		style: {
			width: '100px',
			height: '100px',
			backgroundColor: 'red'
		},
		cor: '',
		width: '0',

	},
	methods: {
		startProgress(){
			let valor = 0
			 const temp = setInterval(()=>{
				valor += 5;
				this.width = `${valor}%`
				if(valor == 100 ){
					clearInterval(temp)
				}
			},500)
		},
		iniciarEfeito() {
			setInterval(()=>{
				this.class1 = this.class1 == 'destaque' ? 'escolher' : 'destaque'
			})

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
