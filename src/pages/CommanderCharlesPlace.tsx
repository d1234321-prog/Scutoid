import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, MapPin, Building2, TrendingUp, DollarSign, CheckCircle2 } from 'lucide-react';

export default function CommanderCharlesPlace() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <header className="bg-white border-b border-slate-200 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-scutoid-blue transition-colors font-medium">
            <ChevronLeft size={20} /> Volver a Proyectos
          </Link>
          <div className="font-display font-bold text-xl text-slate-900 tracking-wider uppercase hidden sm:block">
            The <span className="text-scutoid-blue">Commander Charles</span> Place
          </div>
        </div>
      </header>

      <main className="pb-20">
        {/* HERO SECTION */}
        <section className="bg-slate-900 text-white py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-block border border-scutoid-blue/30 bg-scutoid-blue/10 text-blue-300 rounded-full px-4 py-1.5 font-medium text-sm mb-6 uppercase tracking-wider">
              Business Plan & Propuesta de Inversión 2026
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display leading-tight mb-6">
              The Commander <br/><span className="text-scutoid-blue">Charles Place</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 font-light">
              Multifamily para la Fuerza Laboral | <span className="font-semibold text-white">Orlando, FL.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#detalles" className="bg-scutoid-red text-white hover:bg-red-700 px-8 py-3 rounded-lg font-medium transition-colors">
                Ver Detalles del Proyecto
              </a>
            </div>
          </div>
        </section>

        {/* RESUMEN DEL PROYECTO */}
        <section id="detalles" className="py-16 -mt-10 relative z-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-slate-100 flex flex-col md:flex-row gap-8 lg:gap-16">
               <div className="flex-1">
                 <h2 className="text-2xl font-bold font-display text-slate-900 mb-6 border-b border-slate-100 pb-4">
                   Desarrollo Integral en un Mercado Consolidado
                 </h2>
                 <ul className="space-y-6">
                   <li>
                     <div className="font-bold text-scutoid-red tracking-wider uppercase text-sm mb-1">Activo</div>
                     <p className="text-slate-700">Desarrollo y gestión de Multifamily de 84 unidades (Renta Tipo "A-").</p>
                   </li>
                   <li>
                     <div className="font-bold text-scutoid-red tracking-wider uppercase text-sm mb-1">Terreno</div>
                     <p className="text-slate-700">4.07 acres bajo zonificación R-3B en el corazón de Orlando, FL.</p>
                   </li>
                   <li>
                     <div className="font-bold text-scutoid-red tracking-wider uppercase text-sm mb-1">Público Objetivo</div>
                     <p className="text-slate-700">Workforce housing (Vivienda orientada a la fuerza laboral local de sectores turismo, salud y logística).</p>
                   </li>
                   <li>
                     <div className="font-bold text-scutoid-red tracking-wider uppercase text-sm mb-1">Modelo de Negocio</div>
                     <p className="text-slate-700">Desarrollo de ciclo completo, operación centralizada como único dueño para optimizar el NOI, y venta estratégica a un fondo institucional.</p>
                   </li>
                 </ul>
               </div>
               <div className="flex-1 flex flex-col justify-center">
                 {/* Image Placeholder */}
                 <div className="bg-white rounded-xl flex items-center justify-center overflow-hidden relative shadow-sm border border-slate-100">
                    <img 
                      src="/render-commander.png" 
                      alt="Commander Charles Render" 
                      className="w-full h-auto object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80";
                        target.classList.add("opacity-80", "mix-blend-multiply");
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-3 left-4 text-white font-display font-medium text-xs opacity-90">Render Referencial</div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* HITO ACTUAL */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-scutoid-blue rounded-3xl p-8 lg:p-16 text-white text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
               <div className="relative z-10 max-w-4xl mx-auto">
                 <h2 className="text-3xl lg:text-4xl font-bold font-display mb-6">El Hito Actual: 70% de Avance de Obra</h2>
                 <p className="text-xl text-blue-100 leading-relaxed font-light">
                   El riesgo de ejecución inicial, permisos y cimentación está superado. Estructuras principales, techos e instalaciones mecánicas, eléctricas y de plomería (MEP) se encuentran en su proceso final. 
                   <strong> El capital no se integra a un concepto en papel, se integra a una realidad tangible de concreto en el terreno.</strong>
                 </p>
               </div>
            </div>
          </div>
        </section>

        {/* FUNDAMENTOS DE MERCADO */}
        <section className="py-16 bg-white border-y border-slate-200">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">Fundamentos de Mercado</h2>
                 <p className="text-lg text-slate-600">La Demanda Insatisfecha en Orlando</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
                   <div className="text-5xl font-display font-bold text-scutoid-red mb-4">+23%</div>
                   <h3 className="text-xl font-bold text-slate-900 mb-3">Demografía Explosiva</h3>
                   <p className="text-slate-600">
                     Crecimiento poblacional del 23% (2010-2020), atrayendo migración constante de profesionales y familias que buscan calidad de vida.
                   </p>
                </div>
                <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
                   <div className="text-5xl font-display font-bold text-scutoid-blue mb-4">Motores</div>
                   <h3 className="text-xl font-bold text-slate-900 mb-3">Economía Sólida</h3>
                   <p className="text-slate-600">
                     Fuerte demanda laboral traccionada por el Aeropuerto MCO, el masivo sector de salud, tecnología y la implacable industria del turismo.
                   </p>
                </div>
                <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
                   <div className="text-5xl font-display font-bold text-scutoid-red mb-4">{">95%"}</div>
                   <h3 className="text-xl font-bold text-slate-900 mb-3">Déficit de Vivienda</h3>
                   <p className="text-slate-600">
                     Tasa de ocupación sostenida. Escasez crítica de vivienda de alquiler para la fuerza trabajadora. Rentas promedio sólidas de ~$2,241.
                   </p>
                </div>
              </div>
           </div>
        </section>

        {/* NUESTRA MAQUINARIA DE VALOR */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">Nuestra Maquinaria de Valor</h2>
               <div className="w-16 h-1 bg-scutoid-red mx-auto mb-6"></div>
               <p className="text-lg text-slate-600">Riesgo Mitigado en Etapas Tempranas</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                <div className="font-bold text-slate-400 mb-2">Paso 1</div>
                <h4 className="font-bold text-sm mb-2">Identificación de Tierra</h4>
                <p className="text-xs text-slate-600">Fundamentos sólidos, crecimiento poblacional.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                <div className="font-bold text-slate-400 mb-2">Paso 2</div>
                <h4 className="font-bold text-sm mb-2">Adquisición y Plan</h4>
                <p className="text-xs text-slate-600">Due diligence, mix de unidades, proyecciones.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                <div className="font-bold text-slate-400 mb-2">Paso 3</div>
                <h4 className="font-bold text-sm mb-2">Diseño y Permisos</h4>
                <p className="text-xs text-slate-600">Transformación de activo pasivo; riesgo disminuido.</p>
              </div>
              <div className="bg-scutoid-blue text-white rounded-xl p-4 text-center shadow-lg md:-translate-y-2 border-2 border-scutoid-red relative z-10">
                <div className="font-bold text-blue-200 mb-2">Paso 4</div>
                <h4 className="font-bold text-sm mb-2">Construcción</h4>
                <p className="text-[10px] uppercase tracking-wider mb-2 text-red-200 font-bold">(ACTUAL - 70% COMPLETADO)</p>
                <p className="text-xs text-blue-100">Ejecución física controlando presupuesto y tiempo.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                <div className="font-bold text-slate-400 mb-2">Paso 5</div>
                <h4 className="font-bold text-sm mb-2">Operación</h4>
                <p className="text-xs text-slate-600">Optimización del NOI en un activo de dueño único.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                <div className="font-bold text-slate-400 mb-2">Paso 6</div>
                <h4 className="font-bold text-sm mb-2">Estrategia de Salida</h4>
                <p className="text-xs text-slate-600">Venta institucional maximizando la fórmula Valor = NOI / Cap Rate.</p>
              </div>
            </div>
          </div>
        </section>

        {/* UBICACION ESTRATEGICA */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">Ubicación Estratégica</h2>
               <div className="w-16 h-1 bg-scutoid-blue mx-auto mb-6"></div>
               <p className="text-lg text-slate-600">Proximidad Inigualable a Fuentes de Empleo Masivo</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
               <div>
                 <div className="flex items-start gap-4 mb-8">
                   <div className="bg-scutoid-blue/10 p-3 rounded-full text-scutoid-blue shrink-0">
                     <MapPin size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-slate-900 mb-1">Nuestro Activo</h4>
                     <p className="text-slate-600">South Semoran District<br/>5106 Commander Dr., Orlando, FL 32822</p>
                   </div>
                 </div>
                 
                 <div className="space-y-6">
                   <div className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl">
                      <div className="font-bold text-2xl text-scutoid-red shrink-0 w-24">8 MIN</div>
                      <div className="font-medium text-slate-700">Aeropuerto Internacional de Orlando (MCO)</div>
                   </div>
                   <div className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl">
                      <div className="font-bold text-2xl text-scutoid-blue shrink-0 w-24">15 MIN</div>
                      <div className="font-medium text-slate-700">Downtown Orlando & Facultad de Medicina UCF</div>
                   </div>
                   <div className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl">
                      <div className="font-bold text-2xl text-slate-400 shrink-0 w-24">25 MIN</div>
                      <div className="font-medium text-slate-700">Parques Temáticos (Magic Kingdom, Universal Studios)</div>
                   </div>
                 </div>
               </div>
               
               <div className="bg-slate-200 rounded-xl aspect-square md:aspect-auto md:h-full flex items-center justify-center relative overflow-hidden shadow-inner">
                 <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" alt="Orlando Map" className="w-full h-full object-cover opacity-60 mix-blend-multiply" />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full font-medium text-slate-800 shadow-sm flex items-center gap-2">
                     <MapPin size={18} className="text-scutoid-red" />
                     Ubicación Central
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* EFICIENCIA ARQUITECTONICA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">Eficiencia Arquitectónica</h2>
               <div className="w-16 h-1 bg-scutoid-red mx-auto mb-6"></div>
               <p className="text-lg text-slate-600">Un Producto Optimizado para la Rentabilidad</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
               <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8 text-center">
                 <div className="aspect-video bg-slate-100 rounded-xl mb-8 flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Plano" className="object-cover w-full h-full opacity-70 mix-blend-multiply" />
                 </div>
                 <h3 className="text-xl font-bold text-scutoid-blue mb-4 uppercase tracking-wider">Master Plan</h3>
                 <p className="text-slate-700 font-medium">84 unidades distribuidas en 3 edificios sobre 4.07 acres.</p>
                 <p className="text-slate-500 mt-2 text-sm">Incluye retención de agua (dry pond), amplio estacionamiento e instalaciones sustentables.</p>
               </div>
               
               <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8 text-center">
                 <div className="aspect-video bg-slate-100 rounded-xl mb-8 flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80" alt="Floorplan" className="object-cover w-full h-full opacity-70 mix-blend-multiply" />
                 </div>
                 <h3 className="text-xl font-bold text-scutoid-blue mb-4 uppercase tracking-wider">Eficiencia de Diseño</h3>
                 <p className="text-slate-700 font-medium">Un único tipo de unidad en todo el complejo: 2 Habitaciones / 2 Baños completos (890 sqft).</p>
                 <p className="text-slate-500 mt-2 text-sm">Minimiza costos de mantenimiento y ataca la configuración más demandada. Valor de renta estimado: ~$1,910.</p>
               </div>
            </div>
            
            <div className="mt-12 bg-slate-900 text-white rounded-xl p-6 text-center shadow-lg">
              <p className="font-medium text-lg">
                <span className="text-scutoid-red font-bold">Amenidades:</span> Gimnasio al aire libre | Zona de barbacoas | Cargadores EV | Parque infantil | Relax natural
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
