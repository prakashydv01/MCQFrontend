import React, { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Header = lazy(() => import('./Header'));


export default function FixLayout() {
  return (
    <Suspense fallback={<div>Loading layout...</div>}>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      
    </Suspense>
  );
}
