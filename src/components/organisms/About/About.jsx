import React from 'react';

/*
* Components
*/
import Typography from '@mui/material/Typography';

/*
* Enums
*/
import { Users } from '../../../enums/users';

export const About = (props) => {
  const renderImages = (image, name) => {
    return (
      <img
        src={image}
        alt={name}
        style={{ width: '13%', marginRight: '10px' }}
      />
    );
  };

  return (
    <div className={`${props.classes}`} style={{padding: '7vh 0'}}>
      <Typography
        variant='h4'
        component='div'
        gutterBottom
        sx={{ fontSize: '30px', color: '#858585' }}
      >
        About this tool
      </Typography>

      <Typography
        variant='body2'
        gutterBottom
        component='div'
        paragraph={true}
        sx={{ color: '#858585' }}
      >
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>

      <div style={{ position: 'absolute', bottom: 0, zIndex: 0 }}>
        <Typography
          variant='string'
          component='div'
          gutterBottom
          sx={{ fontSize: '30px', color: '#858585', fontWeight: 200 }}
        >
          About the Authors
        </Typography>

        {Users.map(({ image, name }) => renderImages(image, name))}
      </div>
    </div>
  );
};
