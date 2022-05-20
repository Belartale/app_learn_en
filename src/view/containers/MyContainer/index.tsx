// Core
import React, { FC } from 'react';
import { Container, ContainerProps } from '@mui/material';

// Types
type PropTypes = {
    /* type props here */
}

export const MyContainer: FC<ContainerProps> = ({ children, ...props }) => {
    return (
        <Container
            maxWidth = 'xl'
            { ...props }>
            {children}
        </Container>
    );
};
