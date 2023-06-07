// ##########################
// #### Define Feedbacks ####
// ##########################
export function getFeedbackDefinitions(self) {
  const feedbacks = {};

  feedbacks.trackingState = {
    type: "boolean",
    name: "Tracking - Tracking State",
    description: "What Tracking state is currently selected on the camera",
    defaultStyle: {
      png64: self.icons.btn_tracking_mode_start_disable,
    },
    options: [
      {
        type: "dropdown",
        label: "Select State",
        id: "option",
        default: "0",
        choices: [
          { id: "0", label: "OFF" },
          { id: "1", label: "ON" },
        ],
      },
    ],
    callback: function (feedback) {
      const opt = feedback.options;
      switch (opt.option) {
        case "0":
          // console.log("SELF TRACKING IS"+self.data.tracking)
          if (self.data.tracking == "OFF") {
            console.log("TRACKINGSTATE IS:" + feedbacks.trackingState);
            return true;
          }
          break;
        case "1":
          // console.log("SELF TRACKING IS"+self.data.tracking)
          if (self.data.tracking == "ON") {
            console.log("TRACKINGSTATE IS:" + opt);
            return true;
          }
          break;
        default:
          break;
      }
      return false;
    },
  };

  feedbacks.angleState = {
    type: "boolean",
    name: "Angle - Angle State",
    description: "Indicate which angle is selected",
    options: [
      {
        type: "dropdown",
        label: "Select State",
        id: "option",
        default: "UPPER",
        choices: [
          { id: "UPPER", label: "UPPER" },
          { id: "BODY", label: "BODY" },
          { id: "FULL", label: "FULL" },
          { id: "OFF", label: "OFF" },
        ],
      },
    ],
    callback: function (feedback) {
      const opt = feedback.options;
      switch (opt.option) {
        case "UPPER":
          if (self.data.angle === "UPPER") {
            return true;
          }
          break;
        case "BODY":
          if (self.data.angle === "BODY") {
            return true;
          }
          break;
        case "FULL":
          if (self.data.angle === "FULL") {
            return true;
          }
          break;
        case "OFF":
          if (self.data.angle === "OFF") {
            return true;
          }
          break;
        default:
          break;
      }
      return false;
    },
  };

  // const cameraChoice = []
  // for (let cameranum = 1; cameranum<100; cameranum++){
  // 	cameraChoice.push({id:`${cameranum}`, label: `${cameranum}`})
  // }
  feedbacks.cameraState = {
    type: "boolean",
    name: "Camera ID",
    description: "Indicate which camera id is selected",
    defaultStyle: {
      color: 16777215,
    },
    options: [
      {
        type: "dropdown",
        label: "Select Camera ID",
        id: "option",
        // default: '1',
        // // choices: cameraChoice
      },
    ],
    callback: function (feedback) {
      const opt = feedback.options;
      if (opt.option == `${self.data.cameraid}`) {
        return true;
      }
      return false;
    },
  };

  return feedbacks;
}
