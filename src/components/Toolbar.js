import React from "react";
import {
  Typography,
  Toolbar,
  AppBar,
  Stack
} from "@mui/material"; 

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
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        width: "100%"
                    }}
                >
                    <Typography
                        variant="h6" 
                        noWrap 
                        component="div" 
                        sx={{ 
                            flexGrow: 1,
                            userSelect: "none"
                        }}
                    >
                        VKPreviewToken
                    </Typography>
                </Stack>
            </Toolbar>  
        </AppBar>
    )
}

export default byToolbar;