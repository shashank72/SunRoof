import { Box, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import PropertyTypeSection from "./propertyTypeSection";
import ReportTypeSection from "./reportTypeSection";
import ReviewOrder from "./reviewOrder";

const steps = ["PROPERTY", "REPORTS", "REVIEW ORDER"];
function OrderSection() {
  const [activeStep, setActiveStep] = React.useState(0);

  const stepperContent = () => {
    switch (activeStep) {
      case 0:
        return <PropertyTypeSection />;
      case 1:
        return <ReportTypeSection />;
      case 2:
        return <ReviewOrder />;
      default:
        return;
    }
  };
  return (
    <Box class="w-100">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {stepperContent()}
    </Box>
  );
}

export default OrderSection;
