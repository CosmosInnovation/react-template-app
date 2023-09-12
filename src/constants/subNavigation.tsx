import { PrivateDashboardPage } from "../page/dashboard/PrivateDashboard";
import { Profile } from '../page/dashboard/Profile';
import { Subscription } from '../page/dashboard/Subscription';

export interface NavItemProps {
  name: string,
  path: string;
  showMenu?: boolean;
  element?: React.ReactNode,
  setShowMenu?: (param: boolean) => void
}

// Add or remove navigation from here
export const subNavigation: NavItemProps[] = [
  {
    name: 'Subscription',
    path: '/dashboard/subscription',
    element: <Subscription />
  },
  {
    name: 'Profile',
    path: '/dashboard/profile',
    element: <Profile />
  },
  {
    name: 'Private Dashboard',
    path: '/dashboard',
    element: <PrivateDashboardPage />
  }
];

