import React from 'react';

import RMDBLog from '../../images/react-movie-logo.svg';

import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper,Content,LogoImg,TMDBLogoImg } from './Header.styles';

const Header = () =>(
    <Wrapper>
        <Content >
            <LogoImg src={RMDBLog} alt='rmdb-logo' />
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
);

export default Header;
