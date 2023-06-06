import { runEntrypoint, InstanceBase, InstanceStatus } from '@companion-module/base'
import { getActionDefinitions } from './actions.js'
// import { getFeedbackDefinitions } from './feedbacks.js'
import { getPresetDefinitions } from './presets.js'
import { setVariables, checkVariables } from './variables.js'
import { ConfigFields } from './config.js'
// import * as net from 'net'
// import got from 'got'




// ########################
// #### Instance setup ####
// ########################
class PanasonicATSSInstance extends InstanceBase{
	

	async init(config){
		this.config = config

		this.data = {
			debug: false,

		}

		this.cameraid = '1'
		this.tracking = 'ON'
		this.angle = 'UPPER'
		
		this.config.host = this.config.host || ''
		this.config.httpPort = this.config.httpPort || 80
		this.config.username = this.config.username || ''
		this.config.password = this.config.password || ''
		this.config.cameraid = this.config.cameraid || 1
		this.config.debug = this.config.debug || false


		this.init_action()
		this.init_presets()
		this.init_variables()
		this.checkVariables()
		this.init_feedbacks()
		this.checkFeedbacks()
	}


	async configUpdated(config){
		this.config = config
		this.init_actions()
		this.init_presets()
		this.init_variables()
		this.checkVariables()
		this.init_feedbacks()
		this.checkFeedbacks()
	}

	getConfigFields() {
		return ConfigFields
	}


	// ##########################
	// #### Instance Presets ####
	// ##########################
	init_presets() {
		this.setPresetDefinitions(getPresetDefinitions(this))
	}

	// ############################
	// #### Instance Variables ####
	// ############################
	init_variables() {
		this.setVariableDefinitions(setVariables(this))
	}

	// Setup Initial Values
	checkVariables() {
		checkVariables(this)
	}

	// ############################
	// #### Instance Feedbacks ####
	// ############################
	init_feedbacks() {
		this.setFeedbackDefinitions(getFeedbackDefinitions(this))
	}

	init_actions() {
		this.setActionDefinitions(getActionDefinitions(this))
	}

}
runEntrypoint(PanasonicATSSInstance)

// instance.prototype.storeData = function (str) {
// 	var self = this
// }

// // ########################
// // #### Instance setup ####
// // ########################
// function instance(system, id, config) {
// 	var self = this

// 	// super-constructor
// 	instance_skel.apply(this, arguments)

// 	return self
// }



// // When module gets deleted
// instance.prototype.destroy = function () {
// 	debug('destroy', self.id)
// }


// // Initalize module
// instance.prototype.init = function () {
// 	var self = this

// 	debug = self.debug
// 	log = self.log

// 	self.data = {
// 		debug: false
// 	}

// 	//DO A CHECK RUN TO GET ALL CURRENT VARIABLES.
// 	self.cameraid = '1'
// 	self.tracking = 'ON'
// 	self.angle = 'UPPER'

	
// 	self.config.host = this.config.host || ''
// 	self.config.httpPort = this.config.httpPort || 80
// 	self.config.username = this.config.username || ''
// 	self.config.password = this.config.password || ''
// 	self.config.cameraid = this.config.cameraid || 1
// 	self.config.debug = this.config.debug || false


// 	self.icons = icons
// 	self.status(self.STATUS_WARNING, 'connecting')
// 	self.actions() 
// 	self.init_variables()
// 	self.checkVariables()
// 	self.init_feedbacks()
// 	self.checkFeedbacks()
// 	self.init_presets()
// 	self.updateVariableAndInstanceLists()

// 	// self.tracking = 'ON'
// 	// variables.setVariable('tracking', self.tracking)
// 	// self.checkVariables()
// 	// self.checkFeedbacks()

// }

// // Update module after a config change
// instance.prototype.updateConfig = function (config) {
// 	var self = this
// 	self.config = config
// 	self.status(self.STATUS_OK)
// 	self.actions() 
// 	self.init_presets()
// 	self.init_variables()
// 	self.checkVariables()
// 	self.init_feedbacks()
// 	self.checkFeedbacks()
// 	self.updateVariableAndInstanceLists()
// }


// // Return config fields for web config
// instance.prototype.config_fields = function () {
// 	var self = this

// 	return [
// 		{
// 			type: 'text',
// 			id: 'info',
// 			width: 12,
// 			label: 'Information',
// 			value:
// 				"This module controls Panasonic ATSS.",
// 		},
// 		{
// 			type: 'textinput',
// 			id: 'host',
// 			label: 'Server IP',
// 			width: 4,
// 			// regex: self.REGEX_IP
// 		},
// 		{
// 			type: 'textinput',
// 			id: 'httpPort',
// 			label: 'HTTP Port (Default: 80)',
// 			width: 3,
// 			default: 1337,
// 			regex: self.REGEX_PORT,
// 		},
// 		{
// 			type: 'text',
// 			id: 'dummy1',
// 			width: 12,
// 			label: ' ',
// 			value: ' ',
// 		},
// 		{
// 			type: 'textinput',
// 			id: 'username',
// 			label: 'Server Username',
// 			width: 8
// 		},
// 		{
// 			type: 'textinput',
// 			id: 'password',
// 			label: 'Server Password',
// 			width: 8
// 		},
// 		{
// 			type: 'textinput',
// 			id: 'cameraid',
// 			label: 'Camera ID',
// 			width: 8
// 		},

	
// 	]
// }





// instance.prototype.init_variables = function () {
// 	this.setVariableDefinitions(variables.setVariables(this))
// }
// // Setup Initial Values
// instance.prototype.checkVariables = function () {
// 	variables.checkVariables(this)
// }



// // ##########################
// // #### Instance Presets ####
// // ##########################

// instance.prototype.init_presets = function () {
// 	this.setPresetDefinitions(presets.setPresets(this))
// }

// instance.prototype.init_feedbacks = function (system) {
// 	this.setFeedbackDefinitions(feedbacks.setFeedbacks(this))
// }




// instance.prototype.sendCameraControl = function (str) {
// 	actions.sendCameraControl(this, str)
// }

// instance.prototype.sendTracking = function (str) {
// 	actions.sendTracking(this, str)
// }

// instance.prototype.sendAngle = function (str) {
// 	actions.sendAngle(this, str)
// }
// instance.prototype.sendTrackingControl = function (str) {
// 	actions.sendTrackingControl(this, str)
// }

// instance.prototype.sendCameraControlView = function (str) {
// 	actions.sendCameraControlView(this, str)
// }


// instance.prototype.sendSetFaceRecognition = function (str) {
// 	actions.sendSetFaceRecognition(this, str)
// }

// instance.prototype.sendSetAutoFaceSearch = function (str) {
// 	actions.sendSetAutoFaceSearch(this, str)
// }

// instance.prototype.actions = function (system) {
// 	this.setActions(actions.setActions(this))
// }

// instance_skel.extendedBy(instance)
// exports = module.exports = instance
