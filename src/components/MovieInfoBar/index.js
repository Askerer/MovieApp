import React from 'react';
import PropTyes, { checkPropTypes } from 'prop-types';
//Helpers
import { calcTime , convertMoney} from '../../helpers';
import MovieInfo from '../MovieInfo';
//Styles
import { Wrapper, Content } from './MovieInfoBar.styles';

const MovieInfoBar = ({time ,budget,revenue}) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running time : {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget : {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue : {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
);

MovieInfoBar.propTyes = {
    time: PropTyes.number,
    budget: PropTyes.number,
    revenue: PropTyes.number
};

export default MovieInfoBar;