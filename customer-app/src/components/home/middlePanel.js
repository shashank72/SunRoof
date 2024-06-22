import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import TableViewOutlinedIcon from "@mui/icons-material/TableViewOutlined";

function MiddlePanel() {
  return (
    <>
      <Stack display="flex" alignItems="center" marginX="10rem" marginY={3}>
        <Box>
          <Typography variant="h3" sx={{ fontWeight: "500" }}>
            Roof Measurements in 3 easy steps
          </Typography>
        </Box>
        <Stack display="flex" direction="row">
          <Box display="flex" direction="row" alignItems="center">
            <Box className="mid-panel-icons">
              <LocationOnOutlinedIcon sx={{ fontSize: "3.5rem" }} />
            </Box>
            <p>
              Simply enter the address of the structure you want to be measured
              and confirm the pin is in the correct spot.
            </p>
          </Box>
          <Box display="flex" direction="row" alignItems="center">
            <Box className="mid-panel-icons">
              <CottageOutlinedIcon sx={{ fontSize: "3.5rem" }} />
            </Box>
            <p>
              Select your structure type and add any auxiliary buildings needed
              (garages, sheds, pool houses, etc.).
            </p>
          </Box>
          <Box display="flex" direction="row" alignItems="center">
            <Box className="mid-panel-icons">
              <TableViewOutlinedIcon sx={{ fontSize: "3.5rem" }} />
            </Box>
            <p>
              Select the type(s) of report you need for your structure, then add
              them to your cart! That's it, you're done.
            </p>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}

export default MiddlePanel;
