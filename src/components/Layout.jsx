import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
