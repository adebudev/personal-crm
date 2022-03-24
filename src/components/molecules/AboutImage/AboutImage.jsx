import PropTypes from 'prop-types';

/*
 * Components
 */
import { Text } from '../../atoms/Text';

/*
 * Styles
 */
import './styles.scss';

export const AboutImage = ({ users }) => {
  const renderImages = (image, name) => {
    return <img src={image} alt={name} />;
  };

  return (
    <>
      <Text text='About the Authors' size={30} />

      {users.map(({ image, name, link }) => (
        <a href={link} target='_blank' rel="noreferrer">
          {renderImages(image, name)}
        </a>
      ))}
    </>
  );
};

AboutImage.propTypes = {
  users: PropTypes.array,
};
