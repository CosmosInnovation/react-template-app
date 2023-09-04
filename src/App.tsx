import { Route, Routes, BrowserRouter } from "react-router-dom";
import HeaderMenu from './component/HeaderMenu';
import { Footer } from './component/Footer';
import { NotFound } from './component/NotFound';
import { NavItemProps, navigationRecord } from "./constants/navRoutes";

const  App = () => {
  return (
    <BrowserRouter>
      <HeaderMenu />
      <div className='h-10' />
      <Routes>
        {navigationRecord.map((item: NavItemProps, index: number) => (
          <Route path={item.path} element={item.element} key={index} />
        )
        )}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
