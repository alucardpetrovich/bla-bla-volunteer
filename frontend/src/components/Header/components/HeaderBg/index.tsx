import React from 'react';
import bgImg from '../../../../assets/images/header-bg.png';

const HeaderBg = ({ title, subtitle }) => {
  <section>
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="container" style={{ minHeight: '550px' }}>
        <div className="text-center justify-content-center align-self-center">
          <h1 className="pt-5 pb-3">{title}</h1>
          <h5>{subtitle}</h5>
        </div>
      </div>
    </div>
  </section>;
  return <div>HeaderBg</div>;
};

export default HeaderBg;
