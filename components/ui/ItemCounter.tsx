import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";


interface Props {
    currentValue: number;
    maxValue: number;
    updatedQuantity: (newValue: number) => void;
}

export const ItemCounter = ({ currentValue, updatedQuantity, maxValue}: Props) => {

    const addOrRemove = ( value: number ) => {
        if ( value === -1 ) {
            if (currentValue === 1) return;
            
            return updatedQuantity( currentValue - 1)
        }
        if ( currentValue >= maxValue ) return;

        updatedQuantity( currentValue + 1);
    }


    return (
        <Box>
            <IconButton onClick={ () => addOrRemove(-1) }>
                <RemoveCircleOutline />
            </IconButton> 
            <Typography sx={{ width: 40, textAlign: 'center'}}>{ currentValue }</Typography>
            <IconButton onClick={ () => addOrRemove(+1) } >
                <AddCircleOutline  />
            </IconButton>
        </Box>
    );
};
