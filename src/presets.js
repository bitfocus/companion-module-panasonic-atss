

export function getPresetDefinitions(self){
    const presets={}


    presets['communication-start'] = {
        type: 'button',
        category: "Camera Control",
        name: "Communication Start",
        style: {
			text: '',
			png64: self.ICON_POWER_ON,
			pngalignment: 'center:center',
			size: '18',
			color: '16777215',
			bgcolor: self.rgb(0, 0, 0),
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'cameraControl',
                        options:{
                            mode: 'on'
                        },
                    }
                ],

            }
        ],
        feedbacks: [],
    }


    presets['tracking-on-off']={
        type: 'button',
        category: 'Tracking',
        name: 'Tracking On/Off',
        style: {
            text: '',
            png64: self.icons.btn_tracking_mode_start_selected,
            pngalignment: 'center:center',
            size: '18',
        },
        steps:[
            {
                down: [
                    {
                        actionId: '',
                        options: {
                            
                        }
                    }
                ]
            }
        ],
        feedback: [
            {

            }
        ]
    }


    presets["angle-upper"]={
        type: 'button',
        category: 'Angle',
        name: 'Angle Upper',
        style: {
            text: '',
            png64: self.icons.btn_angle_upperBody_selected,
            pngalignment: 'center:center',
            size: '18',
        },
        steps:[
            {
                down: [
                    {
                        actionId: '',
                        options: {
                            
                        }
                    }
                ]
            }
        ],
        feedback: [
            {

            }
        ]
    }


    presets["angle-body"]={
        type: 'button',
        category: 'Angle',
        name: 'Angle Body',
        style: {
            text: '',
            png64: self.icons.btn_angle_fullBody_selected,
            pngalignment: 'center:center',
            size: '18',
        },
        steps:[
            {
                down: [
                    {
                        actionId: '',
                        options: {
                            
                        }
                    }
                ]
            }
        ],
        feedback: [
            {

            }
        ]
    }

    presets["angle-upper"]={
        type: 'button',
        category: 'Angle',
        name: 'Angle Full',
        style: {
            text: '',
            png64: self.icons.btn_angle_full_selected,
            pngalignment: 'center:center',
            size: '18',
        },
        steps:[
            {
                down: [
                    {
                        actionId: '',
                        options: {
                            
                        }
                    }
                ]
            }
        ],
        feedback: [
            {

            }
        ]
    }

    presets["angle-off"]={
        type: 'button',
        category: 'Angle',
        name: 'Angle Off',
        style: {
            text: '',
            png64: self.icons.btn_angle_off_selected,
            pngalignment: 'center:center',
            size: '18',
        },
        steps:[
            {
                down: [
                    {
                        actionId: '',
                        options: {
                            
                        }
                    }
                ]
            }
        ],
        feedback: [
            {

            }
        ]
    }

    return presets

}