import React from 'react'
import AboutUsStyles from '../AboutUs/AboutUs.module.css'
import nham_img from '/images/nham_avatar.png'
import linh_img from '/images/346121653_949292926116672_4015539475013775595_n.jpg'
import khoi_img from '/images/new.jpeg'
import Header from '../Header'

const member = [
  {
    title: 'Nham',
    features: ['Back-end Coder', 'WANT TO BECOME A MILLIONAIRE'],
    buttonText: 'Github',
    img: nham_img,
    url: 'https://github.com/lacnham'
  },
  {
    title: 'Linh',
    features: [
      'Back-end Coder',
      'Beautys faithful simp for the gorgeous, fueled by beauty and cat😇'
    ],
    buttonText: 'Github',
    img: linh_img,
    url: 'https://github.com/Linh-0v0'
  },
  {
    title: 'Khoi',
    features: ['Front-end Coder', 'Love coding, but not that much 🥺'],
    buttonText: 'Github',
    img: khoi_img,
    url: 'https://github.com/KhoiNguyen-281'
  },
  {
    title: 'Khang',
    features: ['Front-end Coder', 'THIEU GIA DA LAT'],
    buttonText: 'Github',
    url: 'https://github.com/KN2222'
  }
]

function MemberTable () {
  return (
    <>
      <Header />

      <div
        className={`${AboutUsStyles.background} ${AboutUsStyles.scrollable}`}
      >
        <div className={AboutUsStyles.background}>
          <div className={AboutUsStyles.container}>
            <div className={`${AboutUsStyles.panel} ${AboutUsStyles['table']}`}>
              {member.map(
                ({ title, features, buttonText, url, isFeatured, img }) => (
                  <div key={title} className={AboutUsStyles['info']}>
                    <img src={img} className={AboutUsStyles['img']} />
                    <h2 className={AboutUsStyles['header']}>{title}</h2>
                    <ul className={AboutUsStyles['features']}>
                      {features.map(feature => (
                        <li
                          key={feature}
                          className={AboutUsStyles['features-item']}
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={url}
                      className={`${AboutUsStyles['button']} ${
                        isFeatured ? AboutUsStyles['is-featured'] : ''
                      }`}
                    >
                      {buttonText}
                    </a>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberTable
