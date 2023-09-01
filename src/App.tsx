import { Hero } from './component/Hero'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Projects } from './page/ProjectsPage';
import { ProductThinkingPage } from './page/ProductThinkingPage';
import { BlogPage } from './page/Blog';
import { PrivateDashboardPage } from './page/PrivateDashboard';
import Header from './component/Header';
import { Footer } from './component/Footer';
import { LoginPage } from './authentication/Login';
import { SignUp } from './authentication/SignUp';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className='h-10'/>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path="/product-thinking" element={<ProductThinkingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/bite-blog" element={<BlogPage />} />
        <Route path="/dashboard" element={<PrivateDashboardPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
