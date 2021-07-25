import React from 'react';
import PropTyes from 'prop-types';
//styles
import { Wrapper , Content } from './Grid.styles';

const Grid = ( { header , children } ) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
);

Grid.propTypes = {
    header: PropTyes.string,
};

export default Grid;