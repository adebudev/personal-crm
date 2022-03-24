/*
 * Components
 */
import AppRoutes from './routes';
import { Banner } from './components/atoms';
import { About } from './components/organisms/About';

/*
 * Styles
 */
import './app.scss';

function App() {
  return (
    <section className='page'>
      <Banner />

      <div className='page-body'>
        <div className='page-about'>
          <About classes='wrap-center md-wrap-fit' />
        </div>
        <div className='page-content'>
          <AppRoutes />
        </div>
      </div>
    </section>
  );
}

export default App;
