import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './loginScreen.scss';
import { login } from '../../redux/actions/auth.action';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());
  };

  useEffect(() => {
    if (accessToken) {
      navigate('/'); // Use navigate for routing
    }
  }, [accessToken, navigate]);

  return (
    <div className='login'>
      <div className='login__container'>
        <h2>Youtube Clone</h2>
        <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' alt='' />
        <button onClick={handleLogin}>Login With google</button>
        <p>This Project is made using YOUTUBE DATA API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
