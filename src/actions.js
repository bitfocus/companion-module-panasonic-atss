import got from "got";

// ######################
// #### Send Actions ####
// ######################

export async function sendCameraState(self) {
  
  const url = `http://${self.config.host}:${self.config.httpPort}/cgi-bin/auto_tracking?cmd=CameraState&id=${self.cameraid}`;

  if (self.config.debug) {
    self.log("debug", `Sending : ${url}`);
  }

  try {
    const response = await got.get(url);

    console.log("Result from REST:" + response.data);

    return response;

  } catch (err) {
    throw new Error(`Action failed: ${url}`);
  }
}

export async function sendCameraControl(self, str) {
  if (str) {
    const url = `http://${self.config.host}:${self.config.httpPort}/cgi-bin/auto_tracking?cmd=CameraControl&id=${self.cameraid}&control=${str}`;

    if (self.config.debug) {
      self.log("debug", `Sending : ${url}`);
    }

    try {
      const response = await got.get(url);

      console.log("Rsult from REST:" + response.data);
    } catch (err) {
      throw new Error(`Action failed: ${url}`);
    }
  }
}

export async function sendTracking(self, str) {
  if (str) {
    const url = `http://${self.config.host}:${self.config.httpPort}/cgi-bin/auto_tracking?cmd=Tracking&id=${self.cameraid}&process=${str}`;

    if (self.config.debug) {
      self.log("debug", `Sending : ${url}`);
    }

    try {
      const response = await got.get(url);

      console.log("Rsult from REST:" + response.data);
    } catch (err) {
      throw new Error(`Action failed: ${url}`);
    }
  }
}

export async function sendAngle(self, str) {
  if (str) {
    const url = `http://${self.config.host}:${self.config.httpPort}/cgi-bin/auto_tracking?cmd=Angle&id=${self.cameraid}&mode=${str}`;

    if (self.config.debug) {
      self.log("debug", `Sending : ${url}`);
    }

    try {
      const response = await got.get(url);

      console.log("Rsult from REST:" + response.data);
    } catch (err) {
      throw new Error(`Action failed: ${url}`);
    }
  }
}

export async function sendTrackingControl(self, str) {
  if (str) {
    const url = `http://${self.config.host}:${self.config.httpPort}/cgi-bin/auto_tracking?cmd=TrackingControl&id=${self.cameraid}&enable=${str}`;

    if (self.config.debug) {
      self.log("debug", `Sending : ${url}`);
    }

    try {
      const response = await got.get(url);

      console.log("Rsult from REST:" + response.data);
    } catch (err) {
      throw new Error(`Action failed: ${url}`);
    }
  }
}

export async function sendCameraControlView(self, str) {
  if (str) {
    const url = `http://${self.config.host}:${self.config.httpPort}/cgi-bin/auto_tracking?cmd=CameraControlView&id=${self.cameraid}&control=${str}`;

    if (self.config.debug) {
      self.log("debug", `Sending : ${url}`);
    }

    try {
      const response = await got.get(url);

      console.log("Rsult from REST:" + response.data);
    } catch (err) {
      throw new Error(`Action failed: ${url}`);
    }
  }
}

export async function sendSetFaceRecognition(self, str) {
  if (str) {
    const url = `http://${self.config.host}:${self.config.httpPort}/cgi-bin/auto_tracking?cmd=FaceRecognition&id=${self.cameraid}&mode=${str}`;

    if (self.config.debug) {
      self.log("debug", `Sending : ${url}`);
    }

    try {
      const response = await got.get(url);

      console.log("Rsult from REST:" + response.data);
    } catch (err) {
      throw new Error(`Action failed: ${url}`);
    }
  }
}

export async function sendSetAutoFaceSearch(self, str) {
  if (str) {
    const url = `http://${self.config.host}:${self.config.httpPort}/cgi-bin/auto_tracking?cmd=AutoFaceSearch&id=${self.cameraid}&mode=${str}`;

    if (self.config.debug) {
      self.log("debug", `Sending : ${url}`);
    }

    try {
      const response = await got.get(url);

      console.log("Rsult from REST:" + response.data);
    } catch (err) {
      throw new Error(`Action failed: ${url}`);
    }
  }
}








// ##########################
// #### Instance Actions ####
// ##########################
export function getActionDefinitions(self) {
  const actions = {};
  
  // ##########################
  // #### Camera State     ####
  // ##########################
  actions.cameraState = {
    name: "Aquire Camera State",
    options: [],
    callback: async (action) => {
      const response = await sendCameraState(self);
      if (self.config.debug) {
        self.log("debug", `Response : ${response}`);
      }
    },
  };


  // ##########################
  // #### Camera Control   ####
  // ##########################
  actions.cameraControlOn = {
    name: "Communication Start",
    options: [],
    callback: async (action) => {
      await sendCameraControl(self, "start");
    },
  };

  actions.cameraControlOff = {
    name: "Communication Stop",
    options: [],
    callback: async (action) => {
      await sendCameraControl(self, "stop");
    },
  };


  // ##########################
  // ####    Tracking      ####
  // ##########################
  actions.trackingOnOff = {
    name: "Tracking On/Off",
    options: [],
    callback: async (action) => {
      if (self.data.tracking == "OFF") {
        self.data.tracking = "ON";
        await sendTracking("start");

        self.checkVariables();
        self.checkFeedbacks();
      } else if (self.tracking == "ON") {
        self.data.tracking = "OFF";
        await sendTracking("stop");

        self.checkVariables();
        self.checkFeedbacks();
      }
    },
  };


  // ##########################
  // ####    Angle         ####
  // ##########################
  actions.angleUpper = {
    name: "Set Angle to Upper",
    options: [],
    callback: async (action) => {
      if (self.data.angle != "UPPER") {
        self.data.angle = "UPPER";
        self.checkVariables();
        // self.setVariable("angle",self.data.angle)

        self.checkFeedbacks();
        await sendAngle("upper");
        //self.checkFeedbacks()
      } else {
        //console.log("Angle was already UPPER")
      }
    },
  };

  actions.angleBody = {
    name: "Set Angle to Body",
    options: [],
    callback: async (action) => {
      if (self.data.angle != "BODY") {
        self.data.angle = "BODY";
        self.checkVariables();
        // self.setVariable("angle",self.data.angle)
        self.checkFeedbacks();
        await sendAngle("body");
        //self.checkFeedbacks()
      } else {
        //console.log("Angle was already BODY")
      }
    },
  };

  actions.angleFull = {
    name: "Set Angle to Full",
    options: [],
    callback: async (action) => {
      if (self.data.angle != "FULL") {
        self.data.angle = "FULL";
        self.checkVariables();
        // self.setVariable("angle",self.data.angle)
        self.checkFeedbacks();
        await sendAngle("full");
        //self.checkFeedbacks()
      } else {
        //console.log("Angle was already FULL")
      }
    },
  };

  actions.angleOff = {
    name: "Set Angle to Off",
    options: [],
    callback: async (action) => {
      if (self.data.angle != "OFF") {
        self.data.angle = "OFF";
        self.checkVariables();
        // self.setVariable("angle",self.data.angle)
        self.checkFeedbacks();
        await sendAngle("off");
        //self.checkFeedbacks()
      } else {
        //console.log("Angle was already OFF")
      }
    },
  };


  // ##########################
  // #### Tracking Control ####
  // ##########################
  actions.trackingControlOn = {
    name: "Tracking Control On",
    options: [],
    callback: async (action) => {
      await sendTrackingControl("on");
    },
  };

  actions.trackingControlOff = {
    name: "Tracking Control Off",
    options: [],
    callback: async (action) => {
      await sendTrackingControl("off");
    },
  };

  // ##########################
  // ## Camera Control View  ##
  // ##########################
  actions.cameraControlViewOn = {
    name: "Camera Control View On",
    options: [],
    callback: async (action) => {
      await sendCameraControlView("start");
    },
  };

  actions.cameraControlViewOff = {
    name: "Camera Control View Off",
    options: [],
    callback: async (action) => {
      await sendCameraControlView("stop");
    },
  };

  // ##########################
  // ## Face Recognition     ##
  // ##########################
  actions.setFaceRecognitionOff = {
    name: "Set Face Recognition Off",
    options: [],
    callback: async (action) => {
      await sendSetFaceRecognition("0");
    },
  };
  actions.setFaceRecognitionOn = {
    name: "Set Face Recognition On",
    options: [],
    callback: async (action) => {
      await sendSetFaceRecognition("1");
    },
  };

  // ##########################
  // ## Auto Face Search     ##
  // ##########################
  actions.setAutoFaceSearchOff = {
    name: "Set Auto Face Search Off",
    options: [],
    callback: async (action) => {
      await sendSetAutoFaceSearch("0");
    },
  };

  actions.setAutoFaceSearchOn = {
    name: "Set Auto Face Search On",
    options: [],
    callback: async (action) => {
      await sendSetAutoFaceSearch("1");
    },
  };


  // ##########################
  // ##        Camera ID     ##
  // ##########################
  actions.setCameraId = {
    name: "Set Camera ID",
    options: [
      {
        type: "dropdown",
        label: "Camera ID",
        id: "val",
        default: "1",
      },
    ],
    callback: async (action) => {
      self.config.cameraid = action.options.val;
      self.data.cameraid = action.options.val;

      self.checkVariables();
      self.checkFeedbacks();
    },
  };

  return actions;
}
