import Rocket from './assets/rocket.png';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-5 col-sm-12'>
          <SignUp />
        </div>

        <div className='col-md-7 my-auto'>
          <img src={Rocket} alt='Rocket' className='img-fluid w-100' />
        </div>
      </div>
    </div>
  );
}

export default App;
