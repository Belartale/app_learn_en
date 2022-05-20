// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container } from './styles';

const Main: FC = () => {
    return (
        <Container>
            <p>The World is Yours with Lingualeo!</p>
            <p>
                Lingualeo is an effective service for learning languages.
                23 000 000 people all over the world have already chosen Lingualeo. Join us!
            </p>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
