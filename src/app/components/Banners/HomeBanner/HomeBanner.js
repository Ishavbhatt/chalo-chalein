'use client'
import Image from "next/image";
import styles from "./HomeBanner.module.scss";
import Slider from "react-slick";

export const HomeBanner = () => {

  const banners = [
    {
      id: 1,
      title: `Your Journey Begins Here`,
      description: 'Effortless travel across Himachal Pradesh. Explore every corner with our reliable and comfortable taxi services. Your destination awaits.',
      imgSrc: "/images/banners/taxi-banner.jpg",
      mobileBannerImage: "/images/banners/taxi-banner.jpg"
    },
    {
      id: 2,
      title: `Discover Himachal's Splendor`,
      description: 'Immerse yourself in the beauty of Himachal Pradesh. Our curated tours unveil breathtaking landscapes and cultural wonders. Embark on an unforgettable adventure.',
      imgSrc: "/images/banners/tours-banner.jpg",
      mobileBannerImage: "/images/banners/tours-banner.jpg"
    },
    {
      id: 3,
      title: `Trailblaze Through Nature`,
      description: `Experience the thrill of trekking amidst the majestic Himalayas. Our guided treks offer exhilarating paths, serene vistas, and unforgettable moments.`,
      imgSrc: "/images/banners/trekking-banner.jpg",
      mobileBannerImage: "/images/banners/trekking-banner.jpg"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      <section className={styles.desktop_banner}>
        <Slider {...settings} className="banner_slider">
          {banners.map((banner) => (
            <div className={styles.home_banner} key={banner.id}>
              <Image
                src={banner.imgSrc}
                alt="Banner Image"
                fill={true}
              />
              <div className={styles.home_banner_content}>
                <h2 className="common_headings_white">{banner.title}</h2>
                <p className="common_para_white">{banner.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className={styles.mobile_banner}>
        <Slider {...settings} className='banner_slider' >
          {banners.map((banner) => (
            <div className={styles.home_banner} key={banner.id}>
              <img src={banner.mobileBannerImage} width="100%" height="100%" />
              <div className={styles.home_banner_content}>
                <h2 className="common_headings_white">{banner.title}</h2>
                <p className="common_para_white">{banner.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};