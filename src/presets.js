

export function getPresetDefinitions(self){
    const presets={}


    // presets['communication-start'] = {
    //     type: 'button',
    //     category: "Camera Control",
    //     name: "Communication Start",
    //     style: {
	// 		text: '',
	// 		png64: self.ICON_POWER_ON,
	// 		pngalignment: 'center:center',
	// 		size: '18',
    //     },
    //     steps: [
    //         {
    //             down: [
    //                 {
    //                     actionId: 'cameraControlOn',
    //                     options:{},
    //                 }
    //             ],

    //         }
    //     ],
    //     feedbacks: [],
    // }


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
                        actionId: 'trackingOnOff',
                        options: {
                            
                        }
                    }
                ]
            }
        ],
        feedbacks: [
            {
                feedbackId: 'trackingState',
                options: {
                    option: '0',
                },
                style: {
                    png64: self.icons.btn_tracking_mode_start_disable,
                }
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
                        actionId: 'angleUpper',
                        options: {
                            
                        }
                    }
                ]
            }
        ],
        feedbacks: [
            {
                feedbackId:'angleUpperState',
                options:{
                    option:'0',
                },
                style:{
                    png64: self.icons.btn_angle_upperBody_disable,
                },
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
                        actionId: 'angleBody',
                        options: {
                            
                        }
                    }
                ]
            }
        ],
        feedbacks: [
            {
                feedbackId:'angleBodyState',
                options:{
                    option:'0',
                },
                style:{
                    png64: self.icons.btn_angle_fullBody_disable,
                },
            }
        ]
    }

    presets["angle-full"]={
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
                        actionId: 'angleFull',
                        options: {
                            
                        }
                    }
                ]
            }
        ],
        feedbacks: [
            {
                feedbackId:'angleFullState',
                options:{
                    option:'0',
                },
                style:{
                    png64: self.icons.btn_angle_full_disable,
                },
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
                        actionId: 'angleOff',
                        options: {
                            
                        }
                    }
                ]
            }
        ],
        feedbacks: [
            {
                feedbackId:'angleOffState',
                options:{
                    option:'0',
                },
                style:{
                    png64: self.icons.btn_angle_off_disable,
                },
            }
        ]
    }

    return presets

}