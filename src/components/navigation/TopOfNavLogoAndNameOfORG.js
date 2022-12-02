import React from 'react'

const TopOfNavLogoAndNameOfORG = ({logoclass, ar_bn_bnar=false, ar_bn_bnar_classname='', ar=false, bn=false, en=false,nameclasses, ...refres}) => {
  return (
    <section {...refres} >
      <img className={logoclass} 
        src='/asset/files/logo.jpeg' alt='logo' />
      <div className={nameclasses}>
      {ar_bn_bnar && <img className={ar_bn_bnar_classname} src='./asset/files/name-bnar.png' alt='name-bnar' />}
       {ar && <h1 dir="rtl" className='arabic-font'>مدرسة عمررض ي هللا عنهاإلسالمية- داكا</h1>}
       {bn && <h1 className='font-NikoshBAN'>মাদরাসা উমর রা. আল ইসলমিয়-ঢাকা</h1>}
       {en && <h1>Madrasa Umar(R) Al-Islamia Dhaka</h1>}
      </div>
    </section>
  )
}

export default TopOfNavLogoAndNameOfORG
