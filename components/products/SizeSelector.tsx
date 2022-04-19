import { FC, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { ISize } from '../../interfaces';


interface Props {
    selectedSize?: ISize;
    sizes: ISize[];

    // Method
    onSelectedSize: (size: ISize ) => void;
}


export const SizeSelector: FC<Props> = ({selectedSize, sizes, onSelectedSize }) => {

    useEffect( () => console.log('refresh selectedSize'), [selectedSize])

  return (
    <Box>
        {
            sizes.map( size => (

                (selectedSize === size )
                    ? (
                        <Button
                            key={ size }
                            size='small'
                            color="primary"
                            onClick={ () => onSelectedSize( size ) }
                        >
                            { size }
                        </Button>
                    )
                    : (
                        <Button
                            key={ size }
                            size='small'
                            color="info"
                            onClick={ () => onSelectedSize( size ) }
                        >
                            { size }
                        </Button>
                    )
            ))
        }
    </Box>
  )
}