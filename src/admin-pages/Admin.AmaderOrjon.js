import { Button } from 'flowbite-react'
import React, { useState } from 'react'
import AddOrjonWindow from '../AdminComponents/orjon/AddAOrjon'
import Admin_showOrjons from '../AdminComponents/orjon/Admin.ShowOrjons'
import { DatascontrolerContext } from '../AdminComponents/orjon/Datas.CreateContext'

const Admin_AmaderOrjon = () => {
    const [isActiveAddWindow,setIsActiveAddWindow]=useState(false)
    const [datas,setDatas]=useState({});
    const [isloading,setIsloading]=useState(true);

  return (
    <div>
      {isActiveAddWindow && <AddOrjonWindow {...{setIsActiveAddWindow,datas,setDatas}} />}
      {!isloading && <Button onClick={()=>setIsActiveAddWindow(true)} className=' absolute top-36 right-10' >+ new Gain/Orjon</Button>}
      <DatascontrolerContext.Provider value={{datas,setDatas,isloading,setIsloading}}>
        <Admin_showOrjons />

      </DatascontrolerContext.Provider>
    </div>
  )
}

export default Admin_AmaderOrjon
