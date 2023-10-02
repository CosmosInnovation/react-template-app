import { ProductThinkingPage } from "../../../page/project/ProductThinkingPage";
import { BlogPage } from "../../../page/blog/Blog";
import { Projects } from "../../../page/project/ProjectsPage";
import { LoginPage } from "../../../page/authentication/Login";
import { SignUp } from "../../../page/authentication/SignUp";
import { Hero } from "../../Heros";
import WaitListForm from '../../../page/form/WaitListForm';

export interface NavItemProps {
  name: string,
  path: string;
  showMenu?: boolean;
  element?: React.ReactNode,
  setShowMenu?: (param: boolean) => void
}

// Add or remove navigation from here
export const mainNavigation: NavItemProps[] = [
  {
    name: 'Home',
    path: '/',
    element: <Hero />
  },

  {
    name: 'Wait List',
    path: '/wait-list',
    element: <WaitListForm />
  },
  {
    name: 'Product Thinking',
    path: '/product-thinking',
    element: <ProductThinkingPage />
  },
  {
    name: 'Blog',
    path: '/bite-blog',
    element: <BlogPage />
  },
  {
    name: 'Projects',
    path: '/projects',
    element: <Projects />
  },
  {
    name: 'Login',
    path: '/login',
    element: <LoginPage />
  },
  {
    name: 'Register',
    path: '/register',
    element: <SignUp />
  },
];

