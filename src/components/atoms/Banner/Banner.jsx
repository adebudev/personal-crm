import './banner.css';

const Banner = (props) => {
  return (
    <div className={`${props.className} atom-banner`}>
      <p className='atom-banner__text'>
        PERSONAL <span className='atom-banner__text'> CRM</span>
      </p>
    </div>
  );
};

export default Banner;
