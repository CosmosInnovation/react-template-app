import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { FC, useState } from 'react';
import { NavItemProps, navigationRecord } from "../constants/navRoutes";

const NavItem: FC<NavItemProps> = ({ showMenu, name, path, setShowMenu }) => {
  const pathName = window.location.pathname;

  return (
    <Link to={path} onClick={() => setShowMenu?.(!showMenu)}>
      <div className={`text-black text-sm ${path === pathName && 'font-semibold'}`}>
        {path === pathName ? `[ ${name} ]` : name}
      </div>
    </Link>
  )

}

function HeaderMenu() {
  const [showMenu, setShowMenu] = useState(false);
  // const path = window.location.pathname;

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className='fixed top-0 z-10 w-full flex items-center  p-4 2xl:flex-row xl:flex-row l:flex-row md:flex-row sm:flex-row h-[100px] bg-white'>
      <div className='flex flex-row w-[100%]'>
        <Link to={'/'} className='w-[100%]'>
          <img src={logo} width={60} height={60} />
        </Link>
        {/* set animate here */}
        <button type='button' className={`button items-center p-2 border-2 border-black w-[80px] ${showMenu && 'text-red-500 border-red-500'}`} onClick={() => handleShowMenu()}>{showMenu ? 'Exit' : 'Menu'}</button>
      </div>

      {/* animate: Ease in an out */}
      <div className={`absolute right-0 top-full z-auto bg-white w-[300px] sm:flex-col p-10 h-[100vh] flex flex-col gap-10 ${!showMenu && 'hidden transition-transform duration-1000 ease-in-out'}`}>

        {navigationRecord.map((item: NavItemProps, idx: number) => (
          <NavItem name={item.name} path={item.path} showMenu={showMenu} setShowMenu={(param) => setShowMenu(param)} key={idx}/>
        ))}

      </div>
    </div>
  )
}

export default HeaderMenu;