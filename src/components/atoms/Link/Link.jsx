import './link.css';

const Link = (props) => {
  return (
    <div className='atom-link'>
      <a href={props.href}>{props.title}</a>
    </div>
  );
};

export default Link;
