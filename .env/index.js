const setEnvConfig = () => {
	let ENV_VAR = null
	process.uniEnv = {}
	
	if (process.env.NODE_ENV === 'development') {
		ENV_VAR = require('./.env.dev.js').default
	} else {
		if (process.env.APP_ENV == "Dev") {
			ENV_VAR = require('./.env.dev.js').default
		} else if (process.env.APP_ENV == "Pro") {
			ENV_VAR = require('./.env.pro.js').default
		} else if (process.env.APP_ENV == "Test") {
			ENV_VAR = require('./.env.test.js').default
		}
	}
	
	if (ENV_VAR) {
		for (let key in ENV_VAR) {
			process.uniEnv[key] = ENV_VAR[key]
		}
	}
	return process.uniEnv
}



export default setEnvConfig()