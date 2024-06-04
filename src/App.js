import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <main>
            <Routes> 
              <Route path="/" element={<Main />} />
              {/* <Route path="/about" element={<AboutPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/reservations" element={<ReservationsPage />} />
              <Route path="/order-online" element={<OrderOnlinePage />} />
              <Route path="/login" element={<LoginPage />} /> */}
            </Routes>
          </main>
        <Main />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
