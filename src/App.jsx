import React from "react";
import { Route, Routes } from "react-router";

import PhotoDetail from "./components/PhotoDetail";
import Main from "./Pages/Main";
import NotFoundPage from "./Pages/NotFoundPage";
import Photos from "./Pages/Photos";
import Layout from './components/Layout'

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/photos' element={<Photos />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
        <Route path="/photos/:id" element={<PhotoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
