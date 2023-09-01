import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { FC, useState } from 'react';



interface NavItemProps {
  name: string,
  path: string;
  showMenu?: boolean;
  setShowMenu?: (param: boolean) => void
}


const navItems: NavItemProps[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Product Thinking',
    path: '/product-thinking'
  },
  {
    name: 'Login',
    path: '/login'
  },
  {
    name: 'Register',
    path: '/register'
  },
  {
    name: 'Blog',
    path: '/bite-blog'
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Chad',
    path: '/chad',
  },
  {
    name: 'Private Dashboard',
    path: '/dashboard'
  }
]


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

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const path = window.location.pathname;
  console.log(path);

  const handleShowMenu = () => {
    // Update eas in and out here
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

        {navItems.map((item: NavItemProps) => (
          <NavItem name={item.name} path={item.path} showMenu={showMenu} setShowMenu={(param) => setShowMenu(param)} />
        ))}

      </div>
    </div>
  )
}

export default Header;