import React from 'react';
import PropTyes from 'prop-types';

import { Wrapper } from './Button.styles';

const Button = ({text , callback}) => (
    <Wrapper type="button" onClick={callback}>
        {text}
    </Wrapper>
);

Button.propTypes = {
    text:PropTyes.string,
    callback: PropTyes.func
};

export default Button;