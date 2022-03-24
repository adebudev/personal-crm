import { Button } from '../../atoms';
import './commonbuttons.css';

const CommonButtons = (props) => {
  return (
    <div className={`${props.className} mol-common-buttons`}>
      <Button title='Cancelar' variant='outlined' width='40vw'/>
      <Button title='Cancelar' variant='outlined' width='40vw'/>
    </div>
  );
};

export default CommonButtons;
