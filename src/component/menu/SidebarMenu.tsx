import { Link, useNavigate } from "react-router-dom";
import { FC, useState } from 'react';
import { NavItemProps } from "./constants/HeaderTopMenuList";
import { subNavigation } from './constants/SidebarMenuList';

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
  const navigation = useNavigate();

  return (
    <div className={`flex-col pt-20 flex  bg-white gap-10 w-[200px] h-full`}>
      <div className={`flex flex-col w-[100%] gap-8 mt-10 p-10`}>
        {subNavigation.map((item: NavItemProps, idx: number) => (
          <NavItem name={item.name} path={item.path} showMenu={showMenu} setShowMenu={(param) => setShowMenu(param)} key={idx} />
        ))}
        <div className={`text-black text-sm cursor-pointer`} onClick={() => {
          localStorage.removeItem('token');
          navigation('/login');
        }}>
          Log out
        </div>

      </div>
    </div>
  )
}

export default SidebarMenu;