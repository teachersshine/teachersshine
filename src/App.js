
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { CartProvider } from "./context/CartContext";



function App() {
    return (
        <BrowserRouter basename="/teachersshine">
            <CartProvider>
              
                

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
