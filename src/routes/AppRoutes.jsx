import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../views/layouts/MainLayout';
import HomePage from '../views/pages/HomePage';
import ExplorePage from '../views/pages/ExplorePage';
import MoonExplorerPage from '../views/pages/MoonExplorerPage';
import MarsExplorerPage from '../views/pages/MarsExplorerPage';
import ObjectDetailsPage from '../views/pages/ObjectDetailsPage';
import TimelinePage from '../views/pages/TimelinePage';
import AboutPage from '../views/pages/AboutPage';
import NotFoundPage from '../views/pages/NotFoundPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="explore/moon" element={<MoonExplorerPage />} />
        <Route path="explore/mars" element={<MarsExplorerPage />} />
        <Route path="objects/:slug" element={<ObjectDetailsPage />} />
        <Route path="timeline" element={<TimelinePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
