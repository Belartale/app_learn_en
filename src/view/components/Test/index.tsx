// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Test: FC<PropTypes> = () => {
    return (
        <S.Container>
            Component: Test
        </S.Container>
    );
};
