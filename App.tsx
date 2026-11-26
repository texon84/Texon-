
import React from "react";

import Header from "./Header";
import Hero from "./Hero";
import SaleBanners from "./SaleBanners";
import CategoryRail from "./CategoryRail";
import ProductShowcase from "./ProductShowcase";
import ProductGrid from "./ProductGrid";
import WhyChoose from "./WhyChoose";
import Footer from "./Footer";
import FloatingSupport from "./FloatingSupport";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main>
        <Hero />
        <SaleBanners />
        <CategoryRail />
        <ProductShowcase />
        <ProductGrid />
        <WhyChoose />
      </main>

      <Footer />
      <FloatingSupport />
    </div>
  );
}

export default App;
;
        
