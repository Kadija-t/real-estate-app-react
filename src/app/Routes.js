import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Houses from "./pages/Houses"
import Error from "./pages/Error"
import Footer from "./components/Footer";

const AppRoutes = () => {
    return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/houses/:id" element={<Houses />} />
            <Route path="/error" element={<Error />} />
        </Routes>
        <Footer />
    </>
    )
}

export default AppRoutes
