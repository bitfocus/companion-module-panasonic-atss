import { CreateConvertToBooleanFeedbackUpgradeScript } from "@companion-module/base";

export const UpgradeScripts = [
  CreateConvertToBooleanFeedbackUpgradeScript({
    trackingState: true,
    angleUpperState: true,
    angleOffState: true,
    angleBodyState: true,
    angleFullState: true,
    communicationState: true,
  }),
];
