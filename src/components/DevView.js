import React from "react";
import { Box, Typography } from "@mui/material";

function DevView(props = {}) {
    return (
        <Box
            sx={{
                position: "absolute",
                top: "0",
                left: "0",
                bottom: "0",
                right: "0"
            }}
        >
            <Typography>
                Node: {window.VKPreviewToken.versions.node()}
            </Typography>
            <Typography>
                Chrome: {window.VKPreviewToken.versions.chrome()}
            </Typography>
            <Typography>
                Electron: {window.VKPreviewToken.versions.electron()}
            </Typography>
        </Box>
    )
}

export default DevView;