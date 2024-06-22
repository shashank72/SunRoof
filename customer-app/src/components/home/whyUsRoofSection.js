import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";

function WhyUsSection() {
  return (
    <>
      <Paper
        square
        variant="outlined"
        elevation={0}
        sx={{
          backgroundColor: "#f4f4f4",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <Box sx={{ height: "20rem" }}>
            <img src="./images/why-RoofScope.png" className="h-100" />
          </Box>
          <Stack spacing={2} sx={{ maxWidth: "550px" }}>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: "500" }}>
                Why RoofScope?
              </Typography>
            </Box>
            <Box>
              <p>
                With a 99% accuracy rate and 12 hours or less turnaround time
                guarantees, RoofScope aerial measurement reports save you time
                and the hassles of having to re-measure a roof, recalculate data
                or hand-draft takeoff reports.
              </p>
            </Box>
            <Box>
              <Button
                variant="contained"
                color="error"
                className="text-uppercase"
                sx={{ paddingY: "10px" }}
              >
                Schedule a Demo
              </Button>
            </Box>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={4}
          display="flex"
          justifyContent="center"
          className="why-us-features"
        >
          <Stack display="flex" alignItems="center">
            <Box sx={{ height: "7rem" }}>
              <img src="/images/save-time-icon.png" height="100%" />
            </Box>
            <Box>
              <h5>Save Time</h5>
            </Box>
            <Box>
              <Typography variant="body1">
                Never measure or estimate by hand again!
              </Typography>
            </Box>
          </Stack>
          <Stack display="flex" alignItems="center">
            <Box sx={{ height: "7rem" }}>
              <img src="/images/reduce-error-icon.png" height="100%" />
            </Box>
            <Box>
              <h5>Reduce Error</h5>
            </Box>
            <Box>
              <Typography variant="body1">
                Get estimates and material orders right the first time
              </Typography>
            </Box>
          </Stack>
          <Stack display="flex" alignItems="center">
            <Box sx={{ height: "7rem" }}>
              <img src="/images/low-cost-icon.png" height="100%" />
            </Box>
            <Box>
              <h5>Lower Costs</h5>
            </Box>
            <Box>
              <Typography variant="body1">
                Require less time and labor from your team.
              </Typography>
            </Box>
          </Stack>
          <Stack display="flex" alignItems="center">
            <Box sx={{ height: "7rem" }}>
              <img src="/images/better-check-icon.png" height="100%" />
            </Box>
            <Box>
              <h5>Better Credibility</h5>
            </Box>
            <Box>
              <Typography variant="body1">
                Impress your customers with beautiful reports.
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}

export default WhyUsSection;
