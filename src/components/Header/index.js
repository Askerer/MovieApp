import React from 'react';
import PropTyes from 'prop-types';
import { Link } from 'react-router-dom';

import RMDBLog from '../../images/react-movie-logo.svg';

import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper,Content,LogoImg,TMDBLogoImg } from './Header.styles';

const Header = () =>(
    <Wrapper>
        <Content >
            <Link to='/'>
                <LogoImg src={RMDBLog} alt='rmdb-log'></LogoImg>
            </Link>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
);

export default Header;
