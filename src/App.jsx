import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Home } from './main/Home'
import { Layout } from './Layout/Layout'
import { Contact } from './Contact/contact'
import { Gallery } from './Pages/Gallery'
import { Amenities } from './Pages/Amenities'
import { Packages } from './Pages/Packages/Packages'
import { OurHistory } from './Pages/OurHistory'
import { StaticHeader } from './main/Main/Static Header_list/StaticHeader'
import { SliderClassic } from './main/Main/Slider Classic_list/SliderClassic'
import { Colours } from './Elements/Colours_list/colours'
import { Map } from './Elements/GoogleMap_list/map'
import { Buttons } from './Elements/Button/button'
import { Grid } from './Elements/Grid list/grid'
import { LayoutHelper } from './Elements/LayoutHelpers list/LayoutHelper'
import { LayoutS } from './Elements/Layout list/LayoutS'
import { YoutubeBg } from './main/Main/Youtube Background_list.jsx/YoutubeBg'
import { YoutubeClassic } from './main/Main/Youtube Classic_list/YoutubeClassic'
import { Spinner } from '@material-tailwind/react'
export const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (<div className=" absolute justify-center w-full h-[100vh] bg-green-50 flex items-center">
        <Spinner className="h-12 w-12 text-gray-500"/>
      </div>) : (<Layout><Routes>
        <Route path='/' element={<Home />} />
        <Route path='/static-header' element={<StaticHeader />} />
        <Route path='/slider-classic' element={<SliderClassic />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/amenities' element={<Amenities />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/ourHistory' element={<OurHistory />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Button' element={<Buttons />} />
        <Route path='/Colours' element={<Colours />} />
        <Route path='/Map' element={<Map />} />
        <Route path='/Grid' element={<Grid />} />
        <Route path='/LayoutHelper' element={<LayoutHelper />} />
        <Route path='/LayoutS' element={<LayoutS />} />
        <Route path='/youtube-background' element={<YoutubeBg />} />
        <Route path='/youtube-classic' element={<YoutubeClassic />} />


      </Routes>
      </Layout>)}

    </div>
  )
}


export default App
