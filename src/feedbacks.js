
// ##########################
// #### Define Feedbacks ####
// ##########################
export function getFeedbackDefinitions(self) {
	const feedbacks = {}

	feedbacks.trackingState = {
		type: 'boolean',
		name: 'Tracking - Tracking State',
		description: 'What Tracking state is currently selected on the camera',
		defaultStyle: {
			png64: self.icons.btn_tracking_mode_start_disable, 
		},
		options: [
			{
				type: 'dropdown',
				label: 'Select State',
				id: 'option',
				default: '0',
				choices: [
					{ id: '0', label: 'OFF' },
					{ id: '1', label: 'ON' },
					
				],
			},
		],
		callback: function (feedback) {
			const opt = feedback.options
			switch (opt.option) {
				case '0':
					// console.log("SELF TRACKING IS"+self.data.tracking)
					if (self.data.tracking == 'OFF') {
						console.log("TRACKINGSTATE IS:" + feedbacks.trackingState)
						return true
					}
					break
				case '1':
					// console.log("SELF TRACKING IS"+self.data.tracking)
					if (self.data.tracking == 'ON') {
						console.log("TRACKINGSTATE IS:" + opt)
						return true
					}
					break
				default:
					break
			}
			return false
		},
	}
	feedbacks.angleUpperState = {
		type: 'boolean',
		name: 'Angle - Angle Upper State',
		description: 'What Angle Upper state is curently selected on the camera',
		defaultStyle: {
			png64: self.icons.btn_angle_upperBody_disable,
		},
		options: [
			{
				type: 'dropdown',
				label: 'Select State',
				id: 'option',
				default: '0',
				choices: [
					{ id: '0', label: 'OFF' },
					{ id: '1', label: 'ON' },
					
				],
			},
		],
		callback: function (feedback) {
			const opt = feedback.options
			switch (opt.option) {
				case '0':
					// console.log("case0(UPPER)ANGLE IS "+self.data.angle)
					if (self.data.angle != 'UPPER') {
						return true
					}
					break
				case '1':
					// console.log("case1(UPPER)ANGLE IS "+self.data.angle)
					if (self.data.angle == 'UPPER') {
						return true
					}
					break
				
				default:
					break
			}
			return false
		},
	}
	feedbacks.angleOffState={
		type: 'boolean',
		name: 'Angle - Angle Off State',
		description: 'What Angle Off state is curently selected on the camera',
		defaultStyle: {
			png64: self.icons.btn_angle_off_disable,
		},
		options: [
			{
				type: 'dropdown',
				label: 'Select State',
				id: 'option',
				default: '0',
				choices: [
					{ id: '0', label: 'OFF' },
					{ id: '1', label: 'ON' },
					
				],
			},
		],
		callback: function (feedback) {
			const opt = feedback.options
			switch (opt.option) {
				case '0':
					// console.log("case 0(OFF) ANGLE IS "+self.data.angle)
					if (self.data.angle != 'OFF') {
						return true
					}
					break
				case '1':
					// console.log("case 1(OFF) ANGLE IS "+self.data.angle)
					if (self.data.angle == 'OFF') {
						return true
					}
					break
				
				default:
					break
			}
			return false
		},
	}

	feedbacks.angleBodyState={
		type: 'boolean',
		name: 'Angle - Angle Body State',
		description: 'What Angle Body state is curently selected on the camera',
		defaultStyle: {
			png64: self.icons.btn_angle_fullBody_disable,
		},
		options: [
			{
				type: 'dropdown',
				label: 'Select State',
				id: 'option',
				default: '0',
				choices: [
					{ id: '0', label: 'OFF' },
					{ id: '1', label: 'ON' },
					
				],
			},
		],
		callback: function (feedback) {
			const opt = feedback.options
			switch (opt.option) {
				case '0':
					// console.log("case 0(BODY) ANGLE IS "+self.data.angle)
					if (self.data.angle != 'BODY') {
						return true
					}
					break
				case '1':
					// console.log("case 1(BODY) ANGLE IS "+self.data.angle)
					if (self.data.angle == 'BODY') {
						return true
					}
					break
				
				default:
					break
			}
			return false
		},
	}
	feedbacks.angleFullState={
		type: 'boolean',
		name: 'Angle - Angle Full State',
		description: 'What Angle Full state is curently selected on the camera',
		defaultStyle: {
			png64: self.icons.btn_angle_full_disable,
		},
		options: [
			{
				type: 'dropdown',
				label: 'Select State',
				id: 'option',
				default: '0',
				choices: [
					{ id: '0', label: 'OFF' },
					{ id: '1', label: 'ON' },
					
				],
			},
		],

		callback: function (feedback) {
			const opt = feedback.options
			switch (opt.option) {
				case '0':
					// console.log("case 0(FULL) ANGLE IS "+self.data.angle)
					if (self.data.angle != 'FULL') {
						return true
					}
					break
				case '1':
					// console.log("case 1(FULL) ANGLE IS "+self.data.angle)
					if (self.data.angle == 'FULL') {
						return true
					}
					break
				
				default:
					break
			}
			return false
		},
	}

	// for (let cameranum=1; cameranum<100; cameranum++){
	// 	feedbacks.
	// }

	const cameraChoice = []
	for (let cameranum = 1; cameranum<100; cameranum++){
		cameraChoice.push({id:`${cameranum}`, label: `${cameranum}`})
	}
	feedbacks.cameraState = {
		type: 'boolean',
		name: 'Camera ID',
		description: 'Indicate which camera id is selected',
		defaultStyle: {
			color: 16777215
		},
		options: [
			{
				type: 'dropdown',
				label: 'Select Camera ID',
				id: 'option',
				default: '1',
				choices: cameraChoice
			}
		],
		callback: function (feedback) {
			const opt = feedback.options
			if(opt.option==`${self.data.cameraid}`){
				return true
			}
			return false
		}

	}
	return feedbacks
}



