
import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SaleBanners from "./components/SaleBanners";
import CategoryRail from "./components/CategoryRail";
import ProductShowcase from "./components/ProductShowcase";
import ProductGrid from "./components/ProductGrid";
import WhyChoose from "./components/WhyChoose";
import Footer from "./components/Footer";
import FloatingSupport from "./components/FloatingSupport";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Website Header */}
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Promotional Banners */}
        <SaleBanners />

        {/* Product Categories */}
        <CategoryRail />

        {/* Featured Products */}
        <ProductShowcase />

        {/* All Products */}
        <ProductGrid />

        {/* Why Choose Us */}
        <WhyChoose />
      </main>

      {/* Website Footer */}
      <Footer />

      {/* Floating Customer Support */}
      <FloatingSupport />
    </div>
  );
}

export default App;
        
