import React from "react";
import {
  Typography,
  Toolbar,
  AppBar,
  Stack,
  Box,
  IconButton
} from "@mui/material"; 
import {
    HighlightOff 
} from "@mui/icons-material";

function byToolbar(props = {}) {
    return ( 
        <AppBar 
            position="static" 
            color="transparent"
            sx={{
                "boxShadow": "0"
            }}
        > 
            <Toolbar>  
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-around"
                >
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        VKPreviewToken
                    </Typography>
                </Stack>
            </Toolbar>  
        </AppBar>
    )
}

export default byToolbar;