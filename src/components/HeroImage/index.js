import React from 'react';
import PropTyes from 'prop-types';
//styles
import { Wrapper , Content ,Text } from './HeroImage.styles';

const HerroImage = ({image,title,text}) =>(
 <Wrapper image={image} >
    <Content>
        <Text>
            <h1>{title}</h1>
            <p>{text}</p>
        </Text>
    </Content>
 </Wrapper>
);

HerroImage.propTyes = {
    image: PropTyes.string,
    title: PropTyes.string,
    text: PropTyes.string
};

export default HerroImage;