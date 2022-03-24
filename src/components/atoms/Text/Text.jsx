import PropTypes from 'prop-types';

/*
 * Material UI Components
 */
import Typography from '@mui/material/Typography';

export const Text = ({
  size = 12,
  weight = '200',
  color = '#858585',
  component = 'div',
  text,
}) => {
  return (
    <Typography
      variant='string'
      component={component}
      gutterBottom
      sx={{ fontSize: size + 'px', color: color, fontWeight: weight }}
    >
      {text}
    </Typography>
  );
};

Text.propTypes = {
  size: PropTypes.number,
  weight: PropTypes.string,
  color: PropTypes.string,
  component: PropTypes.string,
  text: PropTypes.string,
};
