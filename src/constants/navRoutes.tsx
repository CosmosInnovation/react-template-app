import { ProductThinkingPage } from "../page/ProductThinkingPage";
import { BlogPage } from "../page/Blog";
import { Projects } from "../page/ProjectsPage";
import { PrivateDashboardPage } from "../page/PrivateDashboard";
import { LoginPage } from "../authentication/Login";
import { SignUp } from "../authentication/SignUp";
import { Hero } from "../component/Hero";

export interface NavItemProps {
  name: string,
  path: string;
  showMenu?: boolean;
  element?: React.ReactNode,
  setShowMenu?: (param: boolean) => void
}

// Add or remove navigation from here
export const navigationRecord: NavItemProps[] = [
  {
    name: 'Home',
    path: '/',
    element: <Hero />
  },
  {
    name: 'Product Thinking',
    path: '/product-thinking',
    element: <ProductThinkingPage/>
  },
  {
    name: 'Blog',
    path: '/bite-blog',
    element: <BlogPage/>
  },
  {
    name: 'Projects',
    path: '/projects',
    element: <Projects/>
  },
  {
    name: 'Private Dashboard',
    path: '/dashboard',
    element: <PrivateDashboardPage/>
  },
  {
    name: 'Login',
    path: '/login',
    element: <LoginPage/>
  },
  {
    name: 'Register',
    path: '/register',
    element: <SignUp/>
  },
]