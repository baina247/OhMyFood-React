import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import StyledGlobalStyle from './utils/style/globalStyle'
// import Header from './components/header/index'
import Home from './pages/home/index'
// import Propose from './pages/propose/index'
// import Become from './pages/become/index'
// import Notice from './pages/notice/index'
// import Contact from './pages/contact/index'
// import Error from './pages/error/index'
// import Footer from './components/footer/index'

//Syntaxe React 18 import ReactDom via react-dom/client
const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  //Syntaxe "Routes" à la place de "Switch" sur react-router-dom V6
  <React.StrictMode>
    <Router>
      <StyledGlobalStyle />
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/propose" element={<Propose />} /> */}
        {/* <Route path="/become" element={<Become />} /> */}
        {/* <Route path="/notice" element={<Notice />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  </React.StrictMode>
)
