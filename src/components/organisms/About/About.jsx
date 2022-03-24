import React from 'react';
import PropTypes from 'prop-types';

/*
 * Components
 */

import { Text } from '../../atoms/Text';
import { AboutImage } from '../../molecules/AboutImage/AboutImage';

/*
 * Enums
 */
import { Users } from '../../../enums/users';

/*
 * Styles
 */
import './styles.scss';

export const About = ({ classes }) => {
  return (
    <div className={`${classes}`}>
      <Text text='About this tool' size={30} weight={600} />

      <Text
        text='subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur'
        size={14}
      />

      <div className='box__image'>
        <AboutImage users={Users} />
      </div>
    </div>
  );
};

About.propTypes = {
  classes: PropTypes.string,
};
