import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import { useNavigate } from "react-router-dom";

function TopSection() {
  const navigate = useNavigate();
  return (
    <div className="top-section">
      <img src="./images/learning-for-damage-detection-header.jpg" />
      <div className="section__mask"></div>
      <Stack display="flex" alignItems="center" sx={{ position: "relative" }}>
        <Typography
          variant="h1"
          color="white"
          sx={{ fontWeight: "400", fontSize: "5rem" }}
        >
          Let's get started
        </Typography>
        <Typography
          variant="h6"
          color="white"
          sx={{ fontWeight: "400", fontSize: "2rem" }}
        >
          Enter the address or coordinates of a structure you'd like to measure.
        </Typography>
        <Stack mt="2.5rem" spacing={4}>
          <Box width="30rem">
            <TextField
              placeholder="Enter Address"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputBase-root": { backgroundColor: "white" },
                "& .MuiInputBase-input": { padding: "14px" },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <NearMeIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              color="error"
              fullWidth
              className="text-uppercase"
              sx={{ paddingY: "10px" }}
              onClick={() => navigate("/order")}
            >
              Search Address
            </Button>
          </Box>
          {/* <Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="text-uppercase"
              sx={{ paddingY: "10px" }}
            >
              Upload BluePrint
            </Button>
          </Box> */}
        </Stack>
      </Stack>
    </div>
  );
}

export default TopSection;
