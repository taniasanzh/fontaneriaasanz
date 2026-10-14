import { Phone, MapPin, Wrench, Droplets, AlertCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#ebebeb] flex items-center justify-center p-4 font-sans text-[#242423]">
      <div className="max-w-2xl w-full bg-[#ffffff] rounded-xl shadow-md overflow-hidden border-t-8 border-[#004e98]">
        
        {/* Cabecera / Aviso de Construcción */}
        <div className="bg-[#253B55] p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-[#ffffff] mb-1">
            <AlertCircle size={20} />
            <span className="font-semibold tracking-wide">WEB EN CONSTRUCCIÓN</span>
          </div>
          <p className="text-[#ebebeb] text-sm">Nuestra nueva página estará lista muy pronto.</p>
        </div>

        {/* Contenido Principal */}
        <div className="p-8 sm:p-12 text-center">
          
          {/* Logo de la Gota original */}
          <div className="flex justify-center mb-6">
            <img 
              src="public/gota-no-bg.png" 
              alt="Logo Fontanería A. Sanz" 
              className="w-32 h-auto drop-shadow-md"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#004e98] mb-2">
            Fontanería A. Sanz
          </h1>
          <p className="text-lg text-[#5c6b73] mb-8 font-medium">
            Más de 20 años al servicio de nuestros clientes
          </p>

          <div className="space-y-6 max-w-md mx-auto">
            {/* Bloque de Dirección */}
            <div className="flex items-center justify-center gap-3 text-[#242423] bg-[#ebebeb] py-3 px-4 rounded-lg">
              <MapPin className="text-[#004e98]" size={24} />
              <span className="font-medium text-left">
                C/ Haroldo Parres nº 1<br />
                03013 Alicante
              </span>
            </div>

            {/* Resumen de Servicios */}
            <div className="flex items-center justify-center gap-2 text-[#5c6b73]">
              <Wrench size={18} />
              <span>Fontanería general</span>
              <span className="mx-2">•</span>
              <Droplets size={18} />
              <span>Calefacción y Gas</span>
            </div>
          </div>

          <hr className="my-8 border-[#ebebeb]" />

          {/* Sección de Contacto */}
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-[#253B55]">¿Necesitas un presupuesto o tienes una urgencia?</h2>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* Botón de Llamada 1 */}
              <a 
                href="tel:+34966101012" 
                className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#004e98] hover:bg-[#073C73] text-[#ffffff] font-medium py-3 px-6 rounded-lg shadow-md transition-all"
              >
                <Phone size={20} />
                966 10 10 12
              </a>

              {/* Botón de Llamada 2 */}
              <a 
                href="tel:+34630131635" 
                className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#004e98] hover:bg-[#073C73] text-[#ffffff] font-medium py-3 px-6 rounded-lg shadow-md transition-all"
              >
                <Phone size={20} />
                630 13 16 35
              </a>
            </div>

            {/* Botón de WhatsApp */}
            <div className="pt-2">
              <a 
                href="https://wa.me/34630131635" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-transparent border-2 border-[#004e98] text-[#004e98] hover:bg-[#EFF7FF] font-medium py-3 px-6 rounded-lg transition-all"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-[#ebebeb] p-4 text-center">
          <p className="text-sm text-[#5c6b73]">© {new Date().getFullYear()} Fontanería A. Sanz</p>
        </div>
      </div>
    </div>
  );
}