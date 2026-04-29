import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, MapPin, Building2, TrendingUp, DollarSign, CheckCircle2 } from 'lucide-react';

export default function PenrosePoint() {
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
            Penrose <span className="text-scutoid-red">Point</span>
          </div>
        </div>
      </header>

      <main className="pb-20">
        {/* HERO SECTION */}
        <section className="bg-slate-900 text-white py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-block border border-scutoid-red/30 bg-scutoid-red/10 text-red-200 rounded-full px-4 py-1.5 font-medium text-sm mb-6 uppercase tracking-wider">
              Oportunidad de Inversión Inmobiliaria
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display leading-tight mb-6">
              Penrose <span className="text-scutoid-red">Point</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 font-light">
              Wildwood, Florida <span className="text-slate-400 text-lg">| Colindante a The Villages</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#inversion" className="bg-scutoid-blue text-white hover:bg-blue-800 px-8 py-3 rounded-lg font-medium transition-colors">
                Ver Detalles de Inversión
              </a>
            </div>
          </div>
        </section>

        {/* RESUMEN EN 1 MINUTO */}
        <section className="py-16 -mt-10 relative z-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-slate-100 mb-12">
               <h2 className="text-2xl font-bold font-display text-slate-900 mb-8 text-center border-b border-slate-100 pb-6">El Resumen en 1 Minuto</h2>
               
               <div className="grid md:grid-cols-3 gap-8 text-center">
                 <div>
                   <div className="bg-slate-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                     <Building2 size={36} className="text-scutoid-blue" />
                   </div>
                   <h3 className="text-lg font-bold text-slate-900 mb-3">El Proyecto (Qué)</h3>
                   <p className="text-slate-600">Desarrollo desde cero de 243 apartamentos en 3.53 acres.<br/><br/>Ubicación: Wildwood, FL.</p>
                 </div>
                 <div>
                   <div className="bg-slate-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                     <CheckCircle2 size={36} className="text-scutoid-red" />
                   </div>
                   <h3 className="text-lg font-bold text-slate-900 mb-3">El Mercado (Para Quién)</h3>
                   <p className="text-slate-600">Vivienda orientada a la fuerza laboral local (Workforce Housing).<br/><br/>Sin restricciones de edad ni ingresos.</p>
                 </div>
                 <div>
                   <div className="bg-slate-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                     <TrendingUp size={36} className="text-scutoid-blue" />
                   </div>
                   <h3 className="text-lg font-bold text-slate-900 mb-3">La Meta (El Negocio)</h3>
                   <p className="text-slate-600">Construir, estabilizar (alquilar al 90%) y vender a un fondo institucional.</p>
                 </div>
               </div>
               
               <div className="mt-12 bg-slate-900 text-white p-6 rounded-xl text-center">
                 <p className="font-medium">No vendemos apartamentos individuales. Construimos, operamos y vendemos el negocio completo a un fondo de inversión en el momento más lucrativo (estimado 2030).</p>
               </div>
            </div>
          </div>
        </section>

        {/* DEMANDA */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-center mb-12">La Ecuación de Demanda</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
               <div className="bg-white border-t-4 border-scutoid-blue shadow-sm p-6 rounded-lg">
                 <h4 className="font-bold text-lg mb-3">1. El Imán Demográfico</h4>
                 <p className="text-slate-600">The Villages atrae a miles de adultos mayores. En 2024 fue el mayor destino de migración interna en EE.UU.</p>
               </div>
               <div className="bg-white border-t-4 border-scutoid-blue shadow-sm p-6 rounded-lg">
                 <h4 className="font-bold text-lg mb-3">2. El Motor de Empleo</h4>
                 <p className="text-slate-600">Esta población requiere servicios, hospitales y retail, generando una demanda masiva de trabajadores esenciales.</p>
               </div>
               <div className="bg-white border-t-4 border-scutoid-blue shadow-sm p-6 rounded-lg">
                 <h4 className="font-bold text-lg mb-3">3. La Crisis de Vivienda</h4>
                 <p className="text-slate-600">Miles de trabajadores no tienen dónde vivir cerca. Los desarrollos actuales son exclusivos para adultos (55+).</p>
               </div>
            </div>

            <div className="bg-red-50 border border-scutoid-red p-8 rounded-2xl text-center max-w-4xl mx-auto">
               <h4 className="text-xl font-bold text-scutoid-red mb-2">Nuestra Oportunidad</h4>
               <p className="text-lg text-slate-800">Déficit estimado de 700 a 1,200 unidades en un radio de 15 millas. Renta objetivo asequible: $1,150 a $2,300 mensuales.</p>
            </div>
          </div>
        </section>

        {/* PROPUESTA DE INVERSION */}
        <section id="inversion" className="py-20 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
               <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 mb-4">Segunda Ronda de Capitalización</h2>
               <div className="w-16 h-1 bg-scutoid-red mx-auto mb-6"></div>
               <p className="text-lg text-slate-600 max-w-2xl mx-auto">La tierra ya ha sido adquirida (Ronda 1). Los fondos se destinan al desarrollo de planos y permisos (ACTIVA).</p>
             </div>

             <div className="bg-slate-50 p-8 lg:p-12 rounded-3xl mb-12 flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1 space-y-6">
                   <h3 className="text-2xl font-bold font-display text-slate-900 mb-6">Estructura de la Oferta</h3>
                   
                   <div className="flex justify-between items-end border-b border-slate-200 pb-3">
                     <span className="text-slate-600 font-medium">Capital Buscado</span>
                     <span className="text-2xl font-bold text-slate-900">$3,287,500</span>
                   </div>
                   
                   <div className="flex justify-between items-end border-b border-slate-200 pb-3">
                     <span className="text-slate-600 font-medium">Capital Societario Ofrecido</span>
                     <span className="text-2xl font-bold text-scutoid-blue">25%</span>
                   </div>

                   <div className="flex justify-between items-end border-b border-slate-200 pb-3">
                     <span className="text-slate-600 font-medium">Ticket de Inversión (por 1%)</span>
                     <span className="text-2xl font-bold text-scutoid-red">$131,500</span>
                   </div>
                   
                   <div className="mt-8 bg-blue-50 text-scutoid-blue p-4 rounded-xl flex gap-4 items-start">
                     <ShieldCheck size={24} className="shrink-0 mt-1" />
                     <p className="text-sm font-medium"><strong>Seguridad del Inversor:</strong> Todos los fondos se depositan en una cuenta de fideicomiso en custodia externa, destinados exclusivamente al desarrollo de Penrose Point.</p>
                   </div>
                </div>

                <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-slate-100 w-full">
                   <h3 className="text-xl font-bold text-center mb-8">El Camino de una Inversión del 1% ($131,500)</h3>
                   <div className="space-y-6 text-center">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 rounded-xl">
                          <div className="text-sm text-slate-500 mb-1">Retorno Total</div>
                          <div className="text-2xl font-bold text-slate-900">$264,403</div>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl">
                          <div className="text-sm text-slate-500 mb-1">Multiplicador</div>
                          <div className="text-2xl font-bold text-slate-900">2.01x</div>
                        </div>
                        <div className="col-span-2 p-4 bg-scutoid-blue text-white rounded-xl">
                          <div className="text-sm text-blue-200 mb-1">T.I.R. Proyectada</div>
                          <div className="text-4xl font-display font-bold">19.25%</div>
                        </div>
                      </div>
                      <p className="text-slate-500 text-sm mt-4">Proyección de salida institucional para finales de 2030.</p>
                   </div>
                </div>
             </div>
          </div>
        </section>
      </main>
    </div>
  );
}
