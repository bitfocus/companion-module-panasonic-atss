import { combineRgb } from "@companion-module/base";
const backgroundColorRed = combineRgb(255, 0, 0); // Red

export function getPresetDefinitions(self) {
  const presets = {};



  // ##########################
  // # COMMUNICATION PRESETS  #
  // ##########################
  presets['communication-start-stop'] = {
      type: 'button',
      category: "Camera Control",
      name: "Communication Start/Stop",
      style: {
  		  text: 'COMMUNICATION\\nON',
  		  size: 'auto',
        color: combineRgb(255, 255, 255),
		    bgcolor: combineRgb(0, 255, 0),
      },
      steps: [
          {
              down: [
                  {
                      actionId: 'communicationOnOff',
                      options:{},
                  }
              ],

          }
      ],
      feedbacks: [
        {
          feedbackId: "communicationState",
          options: {
            option: "STOP",
          },
          style: {
            text: 'COMMUNICATION\\nOFF',
  		      size: 'auto',
            color: combineRgb(255, 255, 255),
		        bgcolor: combineRgb(255, 0, 0),
          }
        }
      ],
  };


  // ##########################
  // ##   TRACKING PRESETS   ##
  // ##########################
  presets["tracking-on-off"] = {
    type: "button",
    category: "Tracking",
    name: "Tracking On/Off",
    style: {
      text: "",
      png64: self.icons.btn_tracking_mode_start_selected,
      pngalignment: "center:center",
      size: "18",
    },
    steps: [
      {
        down: [
          {
            actionId: "trackingOnOff",
            options: {},
          },
        ],
      },
    ],
    feedbacks: [
      {
        feedbackId: "trackingState",
        options: {
          option: "0",
        },
        style: {
          png64: self.icons.btn_tracking_mode_start_disable,
        },
      },
    ],
  };


  // ##########################
  // ##    ANGLE PRESETS     ##
  // ##########################
  presets["angle-upper"] = {
    type: "button",
    category: "Angle",
    name: "Angle Upper",
    style: {
      text: "",
      png64: self.icons.btn_angle_upperBody_disable,
      pngalignment: "center:center",
      size: "18",
    },
    steps: [
      {
        down: [
          {
            actionId: "angleUpper",
            options: {},
          },
        ],
      },
    ],
    feedbacks: [
      {
        feedbackId: "angleState",
        options: {
          option: "UPPER",
        },
        style: {
          png64: self.icons.btn_angle_upperBody_selected,
        },
      },
    ],
  };

  presets["angle-body"] = {
    type: "button",
    category: "Angle",
    name: "Angle Body",
    style: {
      text: "",
      png64: self.icons.btn_angle_fullBody_disable,
      pngalignment: "center:center",
      size: "18",
    },
    steps: [
      {
        down: [
          {
            actionId: "angleBody",
            options: {},
          },
        ],
      },
    ],
    feedbacks: [
      {
        feedbackId: "angleState",
        options: {
          option: "BODY",
        },
        style: {
          png64: self.icons.btn_angle_fullBody_selected,
        },
      },
    ],
  };

  presets["angle-full"] = {
    type: "button",
    category: "Angle",
    name: "Angle Full",
    style: {
      text: "",
      png64: self.icons.btn_angle_full_disable,
      pngalignment: "center:center",
      size: "18",
    },
    steps: [
      {
        down: [
          {
            actionId: "angleFull",
            options: {},
          },
        ],
      },
    ],
    feedbacks: [
      {
        feedbackId: "angleState",
        options: {
          option: "FULL",
        },
        style: {
          png64: self.icons.btn_angle_full_selected,
        },
      },
    ],
  };

  presets["angle-off"] = {
    type: "button",
    category: "Angle",
    name: "Angle Off",
    style: {
      text: "",
      png64: self.icons.btn_angle_off_disable,
      pngalignment: "center:center",
      size: "18",
    },
    steps: [
      {
        down: [
          {
            actionId: "angleOff",
            options: {},
          },
        ],
      },
    ],
    feedbacks: [
      {
        feedbackId: "angleState",
        options: {
          option: "OFF",
        },
        style: {
          png64: self.icons.btn_angle_off_selected,
        },
      },
    ],
  };


  // ##########################
  // # SELECT CAMERA PRESETS  #
  // ##########################
  for (let cameranum = 1; cameranum < 15; cameranum++) {
    presets[`select-camera-${cameranum}`] = {
      type: "button",
      category: "Select Camera",
      name: "Select Camera " + parseInt(cameranum),
      style: {
        text: "Camera\\nID\\n" + parseInt(cameranum),
        size: "14",
        color: 16777215,
        bgcolor: combineRgb(0, 0, 0),
      },
      steps: [
        {
          down: [
            {
              actionId: "setCameraId",
              options: {
                val: `${cameranum}`,
              },
            },
          ],
          up: [],
        },
      ],
      feedbacks: [
        {
          feedbackId: "cameraState",
          options: {
            option: `${cameranum}`,
          },
          style: {
            bgcolor: backgroundColorRed,
          },
        },
      ],
    };
  }


  return presets;
}
