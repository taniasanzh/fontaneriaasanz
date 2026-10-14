import React from 'react';
import { Phone, MapPin, Wrench, Droplets, CheckCircle2, AlertCircle } from 'lucide-react';

export default function App() {
  const services = [
    "Fontanería",
    "Agua caliente sanitaria",
    "Calefacción",
    "Energía solar térmica",
    "Instalaciones de gas",
    "Grupos de presión",
    "Tratamientos de agua",
    "Descalcificadores y osmosis",
    "Instalaciones en obra nueva",
    "Reparaciones y reformas"
  ];

  return (
    <div className="min-h-screen bg-[#ebebeb] flex flex-col font-sans selection:bg-[#004e98] selection:text-white pb-12">
      
      {/* Banner Superior - Aviso de nueva web */}
      <div className="bg-[#253B55] w-full py-3 px-4 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-white text-sm sm:text-base font-medium text-center">
          <Wrench size={18} className="text-white/80 shrink-0" />
          <p>Estamos creando nuestra nueva web para ofrecerte un mejor servicio.</p>
        </div>
      </div>

      {/* Contenedor Principal */}
      <div className="flex-grow flex items-center justify-center p-4 sm:p-6 mt-4 sm:mt-8">
        
        {/* Tarjeta Base Blanca */}
        <div className="bg-[#ffffff] w-full max-w-4xl rounded-xl shadow-md overflow-hidden">
          
          {/* Cabecera de la Tarjeta */}
          <div className="p-8 sm:p-12 text-center border-b border-[#ebebeb]">
            <div className="flex justify-center mb-4">
              <div className="bg-[#ebebeb] p-4 rounded-full">
                <Droplets size={40} className="text-[#004e98]" />
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#253B55] mb-3">
              Fontanería A. Sanz
            </h1>
            <p className="text-base sm:text-lg text-[#5c6b73] max-w-xl mx-auto mb-8">
              Más de 20 años al servicio de nuestros clientes garantizando profesionalidad y resultados.
            </p>

            {/* Botón Principal (Primary CTA) */}
            <a 
              href="tel:966101012" 
              className="inline-flex items-center justify-center gap-3 bg-[#004e98] text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-md hover:shadow-lg hover:bg-[#04264D] transition-all w-full sm:w-auto"
            >
              <Phone size={24} />
              Llamar por teléfono
            </a>
          </div>

          {/* Cuerpo de la Tarjeta: Grid 2 Columnas */}
          <div className="p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Columna 1: Contacto y Ubicación */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-[#253B55] mb-5 flex items-center gap-2">
                  <AlertCircle size={22} className="text-[#004e98]" />
                  Contacto
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="text-[#004e98] shrink-0 mt-1" size={20} />
                    <div className="flex flex-col">
                      <a href="tel:966101012" className="text-[#242423] font-medium text-lg hover:text-[#004e98] transition-colors">
                        966 10 10 12
                      </a>
                      <a href="tel:630131635" className="text-[#242423] font-medium text-lg hover:text-[#004e98] transition-colors">
                        630 13 16 35
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 pt-2">
                    <MapPin className="text-[#004e98] shrink-0 mt-1" size={20} />
                    <address className="text-[#242423] not-italic leading-relaxed">
                      <span className="font-medium block">C/ Haroldo Parres nº 1</span>
                      <span className="text-[#5c6b73]">03013 Alicante</span>
                    </address>
                  </li>
                </ul>
              </div>
            </div>

            {/* Columna 2: Servicios */}
            <div>
              <h2 className="text-xl font-semibold text-[#253B55] mb-5 flex items-center gap-2">
                <Wrench size={22} className="text-[#004e98]" />
                Nuestros Servicios
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#5c6b73] text-sm">
                    <CheckCircle2 size={16} className="text-[#004e98] shrink-0 mt-0.5" />
                    <span className="leading-tight">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}