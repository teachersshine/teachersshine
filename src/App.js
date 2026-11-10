
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { CartProvider } from "./context/CartContext";
import SnowfallEffect from "./components/winter/SnowfallEffect";


function App() {
    return (
        <BrowserRouter basename="/teachersshine">
            <CartProvider>
              <SnowfallEffect />
                

                <Navbar />

                <main>
                    <AppRoutes />
                </main>

                <Footer />
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;
