import React from 'react'

const TopOfNavLogoAndNameOfORG = ({logoclass, nameclasses, ...refres}) => {
  return (
    <div {...refres} >
      <img className={logoclass} 
      src='/asset/files/logo.jpeg' alt='logo' />
      <h1 className={nameclasses}>
        <span>madrasaUmar</span>
        <br />
        <span>madrasaUmar</span>
      </h1>
    </div>
  )
}

export default TopOfNavLogoAndNameOfORG
