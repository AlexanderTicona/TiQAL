import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Addins from './pages/Addins';
import Resources from './pages/Resources';
import ResourcesInfraworks from './pages/ResourcesInfraworks';
import Forum from './pages/Forum';
import Community from './pages/Community';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="addins" element={<Addins />} />
        <Route path="resources" element={<Resources />} />
        <Route path="resources-infraworks" element={<ResourcesInfraworks />} />
        <Route path="forum" element={<Forum />} />
        <Route path="community" element={<Community />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
