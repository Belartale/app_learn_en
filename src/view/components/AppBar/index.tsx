// Core
import { AppBar, Box, IconButton, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import React, { FC, useState } from 'react';
import { MyContainer } from '../../containers';
import { Nav } from '../Nav';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropsTypesHideOnScroll = {
    window?: () => Window;
    children: React.ReactElement;
};

export const MyAppBar: FC = () => {
    function HideOnScroll(props: PropsTypesHideOnScroll) {
        const { children, window } = props;
        const trigger = useScrollTrigger({
            target: window ? window() : void 0,
        });

        return (
            <S.MySlide
                appear = { false }
                direction = 'down'
                in = { !trigger }>
                {children}
            </S.MySlide>
        );
    }

    const [ isOpenDrawer, setIsOpenDrawer ] = useState(false);

    return (
        <HideOnScroll>
            <AppBar
                position = 'fixed'>
                <MyContainer>
                    <Toolbar
                        disableGutters
                        sx = {{ display: 'flex', justifyContent: 'space-between' }}
                        variant = 'regular'>
                        <Box sx = {{ height: '96px' }}>
                            <Typography
                                component = 'div'
                                variant = 'h1'>
                                <Logo />
                            </Typography>
                        </Box>

                        <Box>
                            <Box sx = {{ display: { xs: 'none', md: 'block' }}}>
                                <Nav
                                    fontSize = 'sm'
                                    sx = {{ display: 'flex' }}
                                />
                            </Box>

                            <IconButton
                                aria-label = 'menu'
                                color = 'inherit'
                                edge = 'start'
                                size = 'large'
                                sx = {{ mr: 2, display: { xs: 'block', md: 'none' }}}
                                onClick = { () => void setIsOpenDrawer(true) }>
                                <S.IconDrawer>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </S.IconDrawer>
                            </IconButton>
                            <S.MyDrawer
                                anchor = { 'top' }
                                open = { isOpenDrawer }
                                onClose = { () => void setIsOpenDrawer(false) }>
                                <Box
                                    role = 'presentation'
                                    sx = {{ '& button': { margin: '0 auto' }}}
                                    onClick = { () => void setIsOpenDrawer(false) }
                                    onKeyDown = { () => void setIsOpenDrawer(false) }>
                                    <Nav
                                        fontSize = 'lg'
                                        sx = {{ display: 'flex', flexDirection: 'column' }}
                                    />
                                </Box>
                            </S.MyDrawer>
                        </Box>
                    </Toolbar>
                </MyContainer>
            </AppBar>
        </HideOnScroll>
    );
};
