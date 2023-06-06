export default defineNuxtConfig({
	app:{
		head: {
			title: 'Nurgul Resume'
		  }
	},
	css: [
		'primevue/resources/themes/saga-blue/theme.css',
		'primevue/resources/primevue.css',
		'primeicons/primeicons.css',
		'primeflex/primeflex.css'
	],
	build: {
		transpile: ['primevue']
	},
	components: {
		    global: true,
			dirs: ['~/components']
	},

})
