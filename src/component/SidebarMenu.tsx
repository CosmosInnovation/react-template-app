import { Link } from "react-router-dom";
import { FC, useState } from 'react';
import { NavItemProps } from "../constants/mainNavigation";
import { subNavigation } from '../constants/subNavigation';

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

const SidebarMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }
  
  return (
    <div className={`fixed flex-col pt-20 flex items-start  h-[100%] bg-white gap-10`}>
      {/* set animate here */}
      <div className={`pl-2 cursor-pointer absolute button border-black ${showMenu && 'text-red-500 border-red-500'}`} onClick={() => handleShowMenu()}>{showMenu ? 'Exit' : 'Menu'}</div>

      <div className={`flex flex-col w-[100%] gap-8 p-10 ${!showMenu && 'hidden transition-transform duration-1000 ease-in-out'}`}>

        {subNavigation.map((item: NavItemProps, idx: number) => (
          <NavItem name={item.name} path={item.path} showMenu={showMenu} setShowMenu={(param) => setShowMenu(param)}  key={idx}/>
        ))}
      </div>
      </div>
  )
}

export default SidebarMenu;