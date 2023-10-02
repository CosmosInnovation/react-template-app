import React, { FC, ReactNode } from "react";
import SidebarMenu from '../../component/menu/SidebarMenu';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='bg-slate-100 min-h-screen flex'>
      <nav className='hidden md:block'><SidebarMenu /></nav>
      <main className='flex-1 p-2'>
      {children}
      </main>
    </div>
  );
}

export default Layout;
