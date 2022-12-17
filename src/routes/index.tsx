import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Developer } from '../pages/Developer';
import { Level } from '../pages/Level';
import { NotFound } from '../pages/NotFound';

export default function Switch() {
  return (
    <Routes>
      <Route path="/" element={<Developer />} />
      <Route path="/level" element={<Level />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
