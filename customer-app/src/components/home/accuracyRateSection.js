import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";

function AccuracyRateSection() {
  return (
    <>
      <Paper
        square
        variant="outlined"
        elevation={0}
        sx={{ backgroundColor: "#f4f4f4", padding: "3rem" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <Box sx={{ height: "20rem", paddingY: "15px" }}>
            <img src="./images/99_accuracy.png" className="h-100" />
          </Box>
          <Stack spacing={2} sx={{ maxWidth: "550px" }}>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: "500" }}>
                99% Accuracy Guarantee
              </Typography>
            </Box>
            <Box>
              <p>
                Confidence in Your Bids & Bottom Line. Our expert CAD
                technicians and quality assurance professionals work together to
                ensure that every report is certified for absolute data
                precision. With a track record of 99% accuracy, you can be
                confident in the reliability of our measurements. Don't let
                inaccurate estimates hold you back from winning bids and growing
                your business. Choose RoofScope for the most accurate and
                reliable aerial measurement reports available.
              </p>
            </Box>
            <Box>
              <Button
                variant="contained"
                color="error"
                className="text-uppercase"
                sx={{ paddingY: "10px" }}
              >
                Download Sample Report
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}

export default AccuracyRateSection;
