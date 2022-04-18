import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";


interface Props {

}

export const ItemCounter = () => {
    return (
        <Box>
            <IconButton>
                <RemoveCircleOutline />
            </IconButton> 
            <Typography sx={{ width: 40, textAlign: 'center'}}> 1 </Typography>
            <IconButton>
                <AddCircleOutline />
            </IconButton>
        </Box>
    );
};
