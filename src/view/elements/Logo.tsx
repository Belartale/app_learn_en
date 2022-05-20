// Core
import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

// Bus
// import {} from '../../../bus/'

// Styles
export const Container = styled(Box, {})(() => ({
}));

// Types
type PropTypes = {
    /* type props here */
}

export const Logo: FC<PropTypes> = ({ ...props }) => {
    return (
        <Container { ...props }>
            Logo
        </Container>
    );
};
