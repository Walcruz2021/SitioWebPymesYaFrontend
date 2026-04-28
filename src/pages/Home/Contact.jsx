import React, { useEffect } from "react";


import "./Contact.css";
import HeroContact from "../../components/contact/HeroContact";
import ServicesSection from "../../components/contact/ServicesSection";
import TechSection from "../../components/contact/TechSection";
import WhyUsSection from "../../components/contact/WhyUsSection";
import ContactSection from "../../components/contact/ContactSection";
import ContactFooter from "../../components/contact/ContactFooter";

import { useState } from "react";


export default function Contact() {
  const handlePresupuesto = () => {
    window.open("mailto:pymestiendavirtual@gmail.com?subject=Solicitud%20de%20presupuesto%20gratis", "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      <HeroContact onPresupuesto={handlePresupuesto} />
      <ServicesSection />
      <TechSection />
      <WhyUsSection />
      <ContactSection onPresupuesto={handlePresupuesto} />
      <ContactFooter />
    </div>
  );
}