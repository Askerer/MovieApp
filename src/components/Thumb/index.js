import React from 'react';
import PropTyes from 'prop-types';
import { Link } from 'react-router-dom';
// Styles
import {Image} from './Thumb.styles';

const Thumb = ({image,movieId,clickable}) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-thumb' />
            </Link>
        ):
        <Image src={image} alt='movie-thumb' />
        }
    </div>
);

Thumb.propTypes = {
    image: PropTyes.string,
    movieId: PropTyes.number,
    clickable: PropTyes.bool
};

export default Thumb;