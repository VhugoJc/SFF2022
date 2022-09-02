import type { NextPage } from 'next';
import { Image } from 'antd';
import Countdown from '../components/Countdown/Index';
import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    const hostName =
      location.port === ""
        ? location.protocol + "//" + location.host
        : "http://" + location.hostname + ":5000";
    console.log(hostName);

  }, [])

  const stylesImg = {
    width: '100px',
    height: '100px'
  }
  return (
    <div className='home-banner'>
      <div className='home-banner-text-conteiner'>
        <h1 className='home-banner-text'>FALTAN:</h1>
        <br />
        <div className="home-banner-countdown">
          <Countdown />
        </div>
      </div>
      <Image className="home-banner-img" src='/assets/img/logo.png' preview={false} alt='Sales Force Fest 2022' />
    </div>
  )
}

export default Home