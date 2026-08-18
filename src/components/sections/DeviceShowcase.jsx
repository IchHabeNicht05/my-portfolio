import React from 'react';
import './DeviceShowcase.css';

const DeviceShowcase = ({ desktopImg, tabletImg, mobileImg, title = "Ukázka projektu" }) => {
  return (
    <div className="showcase-wrapper">
      <div className="showcase-ambient-glow" />

      <div className="showcase-container">
        {/* DESKTOP MONITOR */}
        <div className="device-frame device-desktop">
          <div className="device-screen">
            <img src={desktopImg} alt={`${title} - Desktop`} loading="lazy" />
          </div>
          <div className="desktop-stand-neck" />
          <div className="desktop-stand-base" />
        </div>

        {/* TABLET */}
        <div className="device-frame device-tablet">
          <div className="device-screen">
            <img src={tabletImg} alt={`${title} - Tablet`} loading="lazy" />
          </div>
        </div>

        {/* MOBIL */}
        <div className="device-frame device-mobile">
          <div className="mobile-notch" />
          <div className="device-screen">
            <img src={mobileImg} alt={`${title} - Mobil`} loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceShowcase;