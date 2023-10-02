import { Route, Routes, BrowserRouter } from "react-router-dom";
import HeaderMenu from './component/menu/HeaderMenu';
// import { Footer } from './component/Footer';
import { NotFound } from './page/NotFound';
import { NavItemProps, mainNavigation } from "./component/menu/constants/HeaderTopMenuList";
import { subNavigation } from './component/menu/constants/SidebarMenuList';
import Layout from './page/dashboard/Layout';

const  App = () => {
  return (
    <BrowserRouter>
      <HeaderMenu />
      <div className='h-10' />
      <Routes>
        {mainNavigation.map((item: NavItemProps, index: number) => (
          <Route path={item.path} element={item.element} key={index} />
        )
        )}
        {subNavigation.map((item: NavItemProps, index: number) => (
          <Route path={item.path} element={<Layout children={item.element}/>} key={index} />
        )
        )}
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App;
