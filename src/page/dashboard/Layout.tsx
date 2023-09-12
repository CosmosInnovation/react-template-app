import React, { FC, ReactNode } from "react";
import SidebarMenu from '../../component/SidebarMenu';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <div><SidebarMenu /></div>
      {children}
    </React.Fragment>
  );
}

export default Layout;
