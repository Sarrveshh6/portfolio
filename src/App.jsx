import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProjectCaseStudy from './pages/ProjectCaseStudy';
import NotFound from './pages/NotFound';
import { useLenis } from './lib/lenis';
import GoogleAnalytics from './components/GoogleAnalytics';

function App() {
  const location = useLocation();
  useLenis();

  return (
    <>
      <GoogleAnalytics />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Layout>
      <Analytics />
    </>
  );
}

export default App;
