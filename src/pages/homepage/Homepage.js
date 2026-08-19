import { useState } from 'react'
import './Homepage.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { BANNERS } from '../../constants/banners'
import { useNavigate } from 'react-router-dom'
import { Paragraph1v1, Paragraph3v1 } from '../../styled-components/StyledText'
import videoThumbnail from '../../images/video/videoThumbnail.png'
import { PrimaryButtonLFW, PrimaryButtonS } from '../../styled-components/StyledButton'

function HomePage() {
  const navigate = useNavigate()
  const [swiper, setSwiper] = useState(null)
  const [bannerActive, setBannerActive] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: 'Mulish' }}>
      <div className="homepage-banner-container" style={{ position: 'relative' }}>
        <Swiper loop={true} slidesPerView={1} onSwiper={(s) => setSwiper(s)} onRealIndexChange={(s) => setBannerActive(s.realIndex)}>
          {BANNERS.map(({ name, btn_text, btn_url, desktop_path, mobile_path }, i) => (
            <SwiperSlide key={i}>
              <picture>
                <source media="(min-width:500px)" srcSet={desktop_path} />
                <img
                  src={mobile_path}
                  alt={name}
                  style={{ maxWidth: '70%', height: 'auto', display: 'block', objectFit: 'cover', margin: '0 auto', borderRadius: '20px' }}
                />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="slider-arrow slider-arrow-left" onClick={() => swiper?.slidePrev()} aria-label="Previous banner">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button className="slider-arrow slider-arrow-right" onClick={() => swiper?.slideNext()} aria-label="Next banner">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="slider-indicator">
          {BANNERS.map((_, i) => (
            <span
              key={i}
              className={'count ' + (bannerActive === i ? 'active' : '')}
              onClick={() => {
                setBannerActive(i)
                swiper?.slideToLoop(i)
              }}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#011e0b80',
          color: 'white',
          margin: '20px',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
          paddingBottom: '50px',
          paddingTop: '50px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          <Paragraph1v1
            style={{
              fontSize: '30px'
            }}
          >
            Mighty Reels
          </Paragraph1v1>
          <span>Panoorin at tapusin ang mga video para makakuha ng 5 Astig Points!</span>
        </div>

        <img
          src={videoThumbnail}
          alt="Mighty Reels video thumbnail"
          style={{
            width: 'auto',
            height: 'auto',
            maxHeight: '500px',
            maxWidth: '400px',
            objectFit: 'cover',
            display: 'block'
          }}
        />
        <PrimaryButtonS>Watch for 5 Astig Points</PrimaryButtonS>
      </div>
    </div>
  )
}

export default HomePage
