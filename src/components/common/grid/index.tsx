

import * as React from 'react';
import Box from '@mui/material/Box';


interface Props {
    children: React.ReactNode
}

export default function SpacingGrid({ children }: Props) {

    return (
        <Box sx={{ maxHeight: "450px", maxWidth: "1200px", display: "flex", flexWrap: "wrap" }}>
            {children}
        </Box>
    );
}