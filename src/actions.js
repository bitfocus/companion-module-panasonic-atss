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

export async function sendCommunication(self, str) {
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

export async function sendGetFaceRecognition(self) {
  
  const url = `http://${self.config.host}:${self.config.httpPort}/cgi-bin/auto_tracking?cmd=GetFaceRecognition&page=0&data_num=16`;

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

export async function sendAutoZoom(self, str) {
  if (str) {
    const url = `http://${self.config.host}:${self.config.httpPort}/cgi-bin/auto_tracking?cmd=AutoZoom&id=${self.cameraid}&mode=${str}`;

    if (self.config.debug) {
      self.log("debug", `Sending : ${url}`);
    }
    try {
      const response = await got.get(url);

      console.log("Result from REST:" + response.data);
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

  actions.communicationOnOff = {
    name: "Communication Start/Stop",
    options: [],
    callback: async (action) => {
      if(self.data.communication == "START"){
        self.data.communication = "STOP";
        await sendCommunication(self,"stop");
        self.checkVariables();
        self.checkFeedbacks();
      }
      else if(self.data.communication == "STOP"){
        self.data.communication = "START";
        await sendCommunication(self,"start");
        self.checkVariables();
        self.checkFeedbacks();
      }
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
        await sendTracking(self, "start");

        self.checkVariables();
        self.checkFeedbacks();
      } else if (self.data.tracking == "ON") {
        self.data.tracking = "OFF";
        await sendTracking(self, "stop");

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
        await sendAngle(self, "upper");
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
        await sendAngle(self, "body");
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
        await sendAngle(self, "full");
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
        await sendAngle(self,"off");
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
      await sendTrackingControl(self,"on");
    },
  };

  actions.trackingControlOff = {
    name: "Tracking Control Off",
    options: [],
    callback: async (action) => {
      await sendTrackingControl(self,"off");
    },
  };

  // ##########################
  // ## Camera Control View  ##
  // ##########################
  actions.cameraControlViewOn = {
    name: "Camera Control View On",
    options: [],
    callback: async (action) => {
      await sendCameraControlView(self,"start");
    },
  };

  actions.cameraControlViewOff = {
    name: "Camera Control View Off",
    options: [],
    callback: async (action) => {
      await sendCameraControlView(self,"stop");
    },
  };

  // ##########################
  // ## Face Recognition     ##
  // ##########################
  actions.setFaceRecognitionOff = {
    name: "Set Face Recognition Off",
    options: [],
    callback: async (action) => {
      await sendSetFaceRecognition(self, "0");
    },
  };
  actions.setFaceRecognitionOn = {
    name: "Set Face Recognition On",
    options: [],
    callback: async (action) => {
      await sendSetFaceRecognition(self, "1");
    },
  };

  actions.getFaceRecognition ={
    name: "Get Face Recognition",
    options: [],
    callback: async(action) => {
      const response = await sendGetFaceRecognition(self);
      if (self.config.debug) {
        self.log("debug", `Response : ${response}`);
      }
    }
  }

  // ##########################
  // ## Auto Face Search     ##
  // ##########################
  actions.setAutoFaceSearchOff = {
    name: "Set Auto Face Search Off",
    options: [],
    callback: async (action) => {
      await sendSetAutoFaceSearch(self,"0");
    },
  };

  actions.setAutoFaceSearchOn = {
    name: "Set Auto Face Search On",
    options: [],
    callback: async (action) => {
      await sendSetAutoFaceSearch(self,"1");
    },
  };



  // ##########################
  // ##       Auto Zoom      ##
  // ##########################
  actions.setAutoZoomOff = {
    name: "Set Auto Zoom Off",
    options: [],
    callback: async (action) => {
      await sendAutoZoom(self,"0");
    },
  };

  actions.setAutoZoomOn = {
    name: "Set Auto Zoom On",
    options: [],
    callback: async (action) => {
      await sendAutoZoom(self,"1");
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
