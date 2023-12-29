import React from 'react'
import illustration from '../assets/illustration.png'
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Home(props) {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = React.useState('');

  React.useEffect(() => {
    setActiveLink('/login');
  }, []);

  function handleClick(link) {
    setActiveLink(link);
    navigate(link);
  }

  return (
    <div className='container-fluid h-100'>
      <div className="row h-100">
        <div className="col-lg-6 h-100 d-flex align-items-center justify-content-center bg-primary text-white flex-column">
          <h1 className='display-5 title text-uppercase text-centre'>
            An App to <br/> make your life <br/>
            <span className='display-1'>easy</span>
          </h1>
          <img className="img-fluid mt-3" src={illustration} alt="illustration"/>
        </div>


        <div className="col-lg-6 h-100 d-flex align-item-center align-items-center justify-content-center">
          <div className="card auth-card">
            <div className="card-header bg-transparent border-0 d-flex text-center p-0">
              <Link className={activeLink === '/login' ? 'w-50 py-3 bg-white text-primary' : 'w-50 py-3 bg-primary text-white'} style={{textAlign: 'center'}} to="/login" onClick={() => handleClick('/login')}>Login</Link>
              <Link className={activeLink === '/register' ? 'w-50 py-3 bg-white text-primary' : 'w-50 py-3 bg-primary text-white'} style={{textAlign: 'center'}} to="/register" onClick={() => handleClick('/register')}>Register</Link>
            </div>
            <div className="card-body">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;