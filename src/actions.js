import got from 'got'


// ######################
// #### Send Actions ####
// ######################
export async function sendCameraControl(self, str){
	if (str){
		const url = `http://${self.config.host}:${self.config.httpPort}/cgi-bin/auto_tracking?cmd=CameraControl&id=${self.cameraid}&control=${str}`

		if(self.config.debug){
			self.log('debug', `Sending : ${url}`)
		}

		try {
			const response = await got.get(url)

			console.log("Rsult from REST:"+response.data)
		} catch(err){
			throw new Error(`Action failed: ${url}`)
		}
	}
}

export async function sendTracking(self, str){
	if (str){
		const url = `http://${self.config.host}:${self.config.httpPort}/cgi-bin/auto_tracking?cmd=Tracking&id=${self.cameraid}&process=${str}`

		if(self.config.debug){
			self.log('debug', `Sending : ${url}`)
		}

		try {
			const response = await got.get(url)

			console.log("Rsult from REST:"+response.data)
		} catch(err){
			throw new Error(`Action failed: ${url}`)
		}
	}
}

export async function sendAngle(self, str){
	if (str){
		const url = `http://${self.config.host}:${self.config.httpPort}/cgi-bin/auto_tracking?cmd=Angle&id=${self.cameraid}&mode=${str}`

		if(self.config.debug){
			self.log('debug', `Sending : ${url}`)
		}

		try {
			const response = await got.get(url)

			console.log("Rsult from REST:"+response.data)
		} catch(err){
			throw new Error(`Action failed: ${url}`)
		}
	}
}

export async function sendTrackingControl(self, str){
	if (str){
		const url = `http://${self.config.host}:${self.config.httpPort}/cgi-bin/auto_tracking?cmd=TrackingControl&id=${self.cameraid}&enable=${str}`

		if(self.config.debug){
			self.log('debug', `Sending : ${url}`)
		}

		try {
			const response = await got.get(url)

			console.log("Rsult from REST:"+response.data)
		} catch(err){
			throw new Error(`Action failed: ${url}`)
		}
	}
}

export async function sendCameraControlView(self, str){
	if (str){
		const url = `http://${self.config.host}:${self.config.httpPort}/cgi-bin/auto_tracking?cmd=CameraControlView&id=${self.cameraid}&control=${str}`

		if(self.config.debug){
			self.log('debug', `Sending : ${url}`)
		}

		try {
			const response = await got.get(url)

			console.log("Rsult from REST:"+response.data)
		} catch(err){
			throw new Error(`Action failed: ${url}`)
		}
	}
}


export async function sendSetFaceRecognition(self, str){
	if (str){
		const url = `http://${self.config.host}:${self.config.httpPort}/cgi-bin/auto_tracking?cmd=FaceRecognition&id=${self.cameraid}&mode=${str}`

		if(self.config.debug){
			self.log('debug', `Sending : ${url}`)
		}

		try {
			const response = await got.get(url)

			console.log("Rsult from REST:"+response.data)
		} catch(err){
			throw new Error(`Action failed: ${url}`)
		}
	}
}

export async function sendSetAutoFaceSearch(self, str){
	if (str){
		const url = `http://${self.config.host}:${self.config.httpPort}/cgi-bin/auto_tracking?cmd=AutoFaceSearch&id=${self.cameraid}&mode=${str}`

		if(self.config.debug){
			self.log('debug', `Sending : ${url}`)
		}

		try {
			const response = await got.get(url)

			console.log("Rsult from REST:"+response.data)
		} catch(err){
			throw new Error(`Action failed: ${url}`)
		}
	}
}



// ##########################
// #### Instance Actions ####
// ##########################
export function getActionDefinitions(self){
	const actions = {}

	actions.cameraControlOn = {
		name: 'Communication Start',
		options: [],
		callback: async(action)=>{
			await sendCameraControl(self, 'start')
		},
	}

	actions.cameraControlOff = {
		name: 'Communication Stop',
		options: [],
		callback: async(action)=>{
			await sendCameraControl(self, 'stop')
		},
	}

	actions.trackingOnOff={
		name: 'Tracking On/Off',
		options: [],
		callback: async(action)=>{
			if(self.tracking=="OFF"){
				self.tracking="ON"
				self.setVariable("tracking",self.tracking)

				await sendTracking('start')
				//self.checkFeedbacks()
			}
			else if(self.tracking == "ON"){
				self.tracking="OFF"
				self.setVariable("tracking",self.tracking)

				await sendTracking('stop')
				//self.checkFeedbacks()
			}
		}
	}

	actions.angleUpper={
		name: 'Set Angle to Upper',
		options: [],
		callback: async(action)=>{
			if(self.angle!="UPPER"){
				self.angle="UPPER"
				self.setVariable("angle",self.angle)

				await sendAngle('upper')
				//self.checkFeedbacks()
			}
			else{
				//console.log("Angle was already UPPER")
			}
		}
	}

	actions.angleBody={
		name: 'Set Angle to Body',
		options: [],
		callback: async(action)=>{
			if(self.angle!="BODY"){
				self.angle="BODY"
				self.setVariable("angle",self.angle)

				await sendAngle('body')
				//self.checkFeedbacks()
			}
			else{
				//console.log("Angle was already BODY")
			}
		}
	}

	actions.angleFull={
		name: 'Set Angle to Full',
		options: [],
		callback: async(action)=>{
			if(self.angle!="FULL"){
				self.angle="FULL"
				self.setVariable("angle",self.angle)

				await sendAngle('full')
				//self.checkFeedbacks()
			}
			else{
				//console.log("Angle was already FULL")
			}
		}
	}

	actions.angleOff={
		name: 'Set Angle to Off',
		options: [],
		callback: async(action)=>{
			if(self.angle!="OFF"){
				self.angle="OFF"
				self.setVariable("angle",self.angle)

				await sendAngle('off')
				//self.checkFeedbacks()
			}
			else{
				//console.log("Angle was already OFF")
			}
		}
	}

	actions.trackingControlOn={
		name:'Tracking Control On',
		options:[],
		callback: async(action)=>{
			await sendTrackingControl('on')
		}
	}

	actions.trackingControlOff={
		name:'Tracking Control Off',
		options:[],
		callback: async(action)=>{
			await sendTrackingControl('off')
		}
	}

	actions.cameraControlViewOn={
		name:'Camera Control View On',
		options:[],
		callback: async(action)=>{
			await sendCameraControlView('start')
		}
	}

	actions.cameraControlViewOff={
		name:'Camera Control View Off',
		options:[],
		callback: async(action)=>{
			await sendCameraControlView('stop')
		}
	}

	actions.setFaceRecognitionOff={
		name:'Set Face Recognition Off',
		options:[],
		callback: async(action)=>{
			await sendSetFaceRecognition('0')
		}
	}
	actions.setFaceRecognitionOn={
		name:'Set Face Recognition On',
		options:[],
		callback: async(action)=>{
			await sendSetFaceRecognition('1')
		}
	}

	actions.setAutoFaceSearchOff={
		name:'Set Auto Face Search Off',
		options:[],
		callback: async(action)=>{
			await sendSetAutoFaceSearch('0')
		}
	}

	actions.setAutoFaceSearchOn={
		name:'Set Auto Face Search On',
		options:[],
		callback: async(action)=>{
			await sendSetAutoFaceSearch('1')
		}
	}

	actions.setCameraId={
		name: "Set Camera ID",
		options:[
			{
				type: 'dropdown',
				label: 'Camera ID',
				id: 'val',
				default: '0',
				choices: [
					{ id: '0', label: 'Camera ID: 0'},
					{ id: '1', label: 'Camera ID: 1'},
					{ id: '2', label: 'Camera ID: 2'},
					{ id: '3', label: 'Camera ID: 3'},
					{ id: '4', label: 'Camera ID: 4'},
				]
			}
		],
		callback: async (action)=>{
			self.config.cameraid=action.options.val
		}
	}

	return actions
}

