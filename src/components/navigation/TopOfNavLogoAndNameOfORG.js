import React from 'react'

const TopOfNavLogoAndNameOfORG = ({logoclass, isNameIndex0=true,nameclasses, ...refres}) => {
  return (
    <section {...refres} >
      <h1 className={nameclasses}>
       {isNameIndex0 && <span className='hidden md:inline-block'>مدرسة عمررض ي هللا عنهاإلسالمية- داكا</span>}
       <img className={logoclass} 
      src='/asset/files/logo.jpeg' alt='logo' />
        <span style={{textShadow:'1px 1px 1px pink'}}>মাদরাসা উমর রা. আল ইসলমিয়-ঢাকা(৩)</span>
      </h1>
    </section>
  )
}

export default TopOfNavLogoAndNameOfORG
