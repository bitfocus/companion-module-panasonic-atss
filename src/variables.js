// ##########################
// #### Define Variables ####
// ##########################
export function setVariables(self){

    const variables = []

    
    variables.push({ variableId: 'cameraid', name: 'Camera ID' })
	variables.push({ variableId: 'tracking', name: 'Tracking Status' })
	variables.push({ variableId: 'angle', name: 'Angle Status' })



    return variables
}



// #########################
// #### Check Variables ####
// #########################
export function checkVariables(self){

    // if (self.config.cameraid === '') {
    //     self.cameraid = '1'
    // } else {
    //     self.cameraid = self.config.cameraid
    // }

    self.setVariableValues({
        cameraid: self.data.cameraid,
        tracking: self.data.tracking,
        angle: self.data.angle
    })

    if(self.config.debug){
        console.log("VARIABLES")
        console.log(`Camera ID: ${self.data.cameraid}`)
        console.log(`Tracking: ${self.data.tracking}`)
        console.log(`Angle: ${self.data.angle}`)
    }

    // self.setVariable('cameraid', self.cameraid)
    // self.setVariable('tracking', self.tracking)
    // self.setVariable('angle', self.angle)
}