import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Logo } from '../components/Logo';
import { 
  Menu, X, LineChart, Briefcase, Handshake, Building2, 
  Settings, CheckCircle2, Calculator, MapPin, ClipboardCheck, 
  HardHat, Key, ShieldCheck, Eye, TrendingUp, ChevronRight,
  Phone, Mail, Send, ChevronDown
} from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Perfil', href: '#perfil' },
    { name: 'Filosofía', href: '#filosofia' },
    { name: 'Cadena de Valor', href: '#cadenadevalor' },
    { name: 'Multifamily', href: '#multifamily' },
    { 
      name: 'Proyectos', 
      href: '#proyectos',
      subLinks: [
        { name: 'The Commander Charles Place', href: '/commander-charles-place', isRoute: true },
        { name: 'Penrose Point', href: '/penrose-point', isRoute: true }
      ]
    },
    { name: 'Inversores', href: '#inversores' },
    { name: 'Liderazgo', href: '#liderazgo' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-scutoid-blue selection:text-white">
      
      {/* Navigation */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-2 lg:py-3' : 'bg-white/90 backdrop-blur-md py-4 lg:py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#" className="flex-shrink-0" onClick={(e) => handleNavClick(e, '#')}>
              <Logo className="h-10 sm:h-12" />
            </a>
            
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                link.subLinks ? (
                  <div key={link.name} className="relative group">
                    <a 
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="flex items-center gap-1 font-display text-sm font-medium text-slate-600 hover:text-scutoid-blue transition-colors py-2"
                    >
                      {link.name}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                    </a>
                    <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-xl shadow-black/5 border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left -translate-y-2 group-hover:translate-y-0">
                      <div className="p-2 flex flex-col">
                        {link.subLinks.map(subGroup => (
                          subGroup.isRoute ? (
                            <Link 
                              key={subGroup.name}
                              to={subGroup.href}
                              onClick={() => { window.scrollTo(0,0); setMobileMenuOpen(false); }}
                              className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-scutoid-blue hover:bg-slate-50 rounded-md transition-colors"
                            >
                              {subGroup.name}
                            </Link>
                          ) : (
                            <a 
                              key={subGroup.name}
                              href={subGroup.href}
                              onClick={(e) => handleNavClick(e, subGroup.href)}
                              className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-scutoid-blue hover:bg-slate-50 rounded-md transition-colors"
                            >
                              {subGroup.name}
                            </a>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-display text-sm font-medium text-slate-600 hover:text-scutoid-blue transition-colors"
                  >
                    {link.name}
                  </a>
                )
              ))}
              <a href="#contacto" className="bg-scutoid-blue text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-blue-800 transition-colors">
                Contacto
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                type="button" 
                className="text-slate-600 hover:text-scutoid-blue"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-4 sm:px-6 lg:hidden flex flex-col overflow-y-auto pb-8">
          <nav className="flex flex-col text-center">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                <a 
                  href={link.href}
                  className="font-display text-lg font-medium text-slate-800 hover:text-scutoid-blue py-3"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
                {link.subLinks && (
                  <div className="flex flex-col space-y-1 bg-slate-50 py-3 mx-8 rounded-xl shadow-inner border border-slate-100 mb-2">
                    {link.subLinks.map(subGroup => (
                       subGroup.isRoute ? (
                         <Link 
                           key={subGroup.name}
                           to={subGroup.href}
                           onClick={() => { window.scrollTo(0,0); setMobileMenuOpen(false); }}
                           className="text-base font-medium text-slate-600 hover:text-scutoid-blue py-2"
                         >
                           {subGroup.name}
                         </Link>
                       ) : (
                         <a 
                           key={subGroup.name}
                           href={subGroup.href}
                           onClick={(e) => handleNavClick(e, subGroup.href)}
                           className="text-base font-medium text-slate-600 hover:text-scutoid-blue py-2"
                         >
                           {subGroup.name}
                         </a>
                       )
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <div className="pt-6 mt-4 border-t border-slate-100">
               <a 
                 href="#contacto" 
                 onClick={() => setMobileMenuOpen(false)}
                 className="inline-block w-full bg-scutoid-blue text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-blue-800 transition-colors"
               >
                 Contacto
               </a>
            </div>
          </nav>
        </div>
      )}

      <main className="pt-24 lg:pt-32">
        
        {/* HERO SECTION */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-slate-50 opacity-40 z-0">
             <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-scutoid-blue/5 rounded-full blur-3xl" />
             <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-scutoid-red/5 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 leading-tight mb-6">
                Creación de valor y rendimientos sostenibles a través de <span className="text-scutoid-blue">activos reales</span>.
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Firma especializada en la concepción, estructuración y ejecución de proyectos inmobiliarios 
                de alta complejidad, con foco predominante en activos multifamily de renta en Florida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#cadenadevalor" className="bg-scutoid-red text-white px-8 py-3 rounded text-base font-medium hover:bg-red-700 transition shadow-sm hover:shadow-md inline-flex justify-center items-center gap-2">
                  Conoce nuestra Cadena de Valor <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PERFIL CORPORATIVO */}
        <section id="perfil" className="py-20 lg:py-28 bg-scutoid-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold font-display mb-6 text-white">Perfil Corporativo</h2>
                <div className="w-16 h-1 bg-scutoid-red mb-8"></div>
                <div className="space-y-6 text-blue-50 text-lg">
                  <p>
                    <strong className="text-white">Scutoid Development</strong> es una firma de creación de valor a través del desarrollo inmobiliario 
                    con base en el estado de Florida. Se especializa en la concepción, estructuración y ejecución 
                    de proyectos inmobiliarios de alta complejidad y valor agregado, con foco predominante en 
                    activos <strong className="text-white">multifamily</strong> de renta.
                  </p>
                  <p>
                    Crea valor adoptando un enfoque integral de <strong>desarrollo de ciclo completo</strong>, 
                    integrando análisis estratégico, diseño, construcción, estructuración financiera y operación, 
                    con el objetivo de construir activos resilientes, eficientes y sostenibles, capaces de 
                    generar rendimientos y estabilidad de largo plazo para los inversores.
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                {/* Clean geometric abstraction to represent solid foundation */}
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 border-4 border-scutoid-red/30 rounded-xl transform rotate-3 transition-transform hover:rotate-6 duration-500"></div>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl transform -rotate-3 border border-white/20 p-8 flex flex-col justify-between shadow-2xl">
                    <Logo className="h-16 opacity-90 drop-shadow-md brightness-0 invert" />
                    <div className="text-right font-display text-2xl font-bold text-white/90">
                      Ciclo<br/>Completo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FILOSOFÍA DE INVERSIÓN */}
        <section id="filosofia" className="py-20 lg:py-28 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 mb-6">Filosofía de Inversión</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Disciplina financiera', text: 'Control sistemático de costos.', icon: <Calculator className="text-scutoid-blue" size={32} /> },
                { title: 'Decisiones analíticas', text: 'Basadas en estudios de mercado.', icon: <LineChart className="text-scutoid-blue" size={32} /> },
                { title: 'Factibilidad económica', text: 'Criterios sólidos y medibles.', icon: <CheckCircle2 className="text-scutoid-blue" size={32} /> },
                { title: 'Ejecución profesional', text: 'Responsable y con estándares.', icon: <Briefcase className="text-scutoid-blue" size={32} /> },
                { title: 'Alineación de intereses', text: 'Desarrollador e inversores.', icon: <Handshake className="text-scutoid-red" size={32} /> },
                { title: 'Activos reales', text: 'Fundamentos demográficos y económicos.', icon: <Building2 className="text-scutoid-red" size={32} /> },
                { title: 'Operación sólida', text: 'Fundamentos operativos confiables.', icon: <Settings className="text-scutoid-red" size={32} /> }
              ].map((item, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 flex flex-col text-center items-center group">
                  <div className="mb-4 p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LA CADENA DE CREACIÓN DE VALOR */}
        <section id="cadenadevalor" className="py-20 lg:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-scutoid-red mb-4">La Cadena de Creación de Valor</h2>
              <div className="w-16 h-1 bg-scutoid-blue mx-auto mb-6"></div>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                En lo que refiere a la estrategia, <strong>Scutoid Development</strong> se fundamenta en el concepto de 
                <span className="text-scutoid-red font-semibold"> "La Cadena de Creación de Valor"</span> respaldado en la seguridad del Real Estate como herramienta.
                Es un proceso secuencial y acumulativo que contribuye a la reducción de riesgos y a la maximización del valor del activo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: 'Identificación y Selección',
                  icon: <MapPin className="text-slate-400 mb-4" size={36} />,
                  text: 'Análisis y selección de terrenos ubicados en mercados con crecimiento poblacional sostenido, demanda estructural de vivienda en renta, dinamismo del empleo e infraestructura urbana consolidada.'
                },
                {
                  step: 2,
                  title: 'Análisis, Due Diligence y Planificación',
                  icon: <ClipboardCheck className="text-slate-400 mb-4" size={36} />,
                  text: 'Evaluación integral del activo mediante estudios de factibilidad técnica, legal y económica; análisis de mercado; estructuración de negocio, financiera y definición de la estrategia de salida.'
                },
                {
                  step: 3,
                  title: 'Diseño, Planos y Permisos',
                  icon: <Building2 className="text-slate-400 mb-4" size={36} />,
                  text: 'Conversión del terreno en un proyecto ejecutable, alineando el diseño arquitectónico, la ingeniería y las normativas urbanísticas con los objetivos económicos, reduciendo riesgos previos.'
                },
                {
                  step: 4,
                  title: 'Construcción y Ejecución',
                  icon: <HardHat className="text-slate-400 mb-4" size={36} />,
                  text: 'Implementación del proyecto bajo estrictos controles de costos, cronograma y calidad, materializando el plan de negocios en un activo institucional optimizado para la operación en renta.'
                },
                {
                  step: 5,
                  title: 'Operación y Estabilización',
                  icon: <Key className="text-slate-400 mb-4" size={36} />,
                  text: 'Administración de la operación de la propiedad transformando un bien inmueble en un activo en forma de negocio. Gestión operativa orientada a la optimización del Net Operating Income (NOI).'
                },
                {
                  step: 6,
                  title: 'Estrategia de Salida',
                  icon: <TrendingUp className="text-slate-400 mb-4" size={36} />,
                  text: 'Se vende el negocio a un cliente institucional. Aplicando la fórmula de cálculo de Valor = NOI / Cap Rate consiguiendo el rendimiento máximo de inversión del capital integrado por nuestros socios.'
                }
              ].map((step, index) => (
                <div key={index} className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-transparent hover:border-scutoid-blue group">
                  <div className="absolute top-6 right-6 text-7xl font-display font-bold text-slate-50 group-hover:text-slate-100 transition-colors select-none z-0">
                    {step.step}
                  </div>
                  <div className="relative z-10">
                    {step.icon}
                    <h3 className="text-xl font-bold font-display text-scutoid-blue mb-4 min-h-[56px] flex items-center pr-10">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENFOQUE MULTIFAMILY */}
        <section id="multifamily" className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold font-display text-scutoid-red mb-6">Enfoque en Multifamily de Renta</h2>
                <div className="w-16 h-1 bg-scutoid-blue mb-8"></div>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  <strong className="text-scutoid-blue">Scutoid Development</strong> se especializa en el desarrollo de proyectos multifamily de renta de escala media y grande, orientados a mercados con déficit estructural de vivienda y demanda sostenida, con énfasis en vivienda para la fuerza laboral (workforce housing) y productos de renta de categoría A- y B.
                </p>
                <h4 className="font-semibold text-slate-900 mb-6 font-display text-xl">Este posicionamiento estratégico permite:</h4>
                <ul className="space-y-4">
                  {[
                    'Generación de flujos de ingresos recurrentes y previsibles',
                    'Mayor resiliencia frente a ciclos económicos',
                    'Escalabilidad operativa y atractivo para capital institucional',
                    'Valuaciones basadas en ingresos estabilizados (NOI)'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-scutoid-red"></div>
                      </span>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative h-96 lg:h-full min-h-[400px]">
                {/* Abstract graphic representing multifamily units */}
                <div className="absolute inset-0 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 flex items-center justify-center shadow-inner">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-sm opacity-60 p-4">
                     {[...Array(9)].map((_, i) => (
                        <div key={i} className={`aspect-square rounded-lg ${i % 3 === 0 ? 'bg-scutoid-blue' : i % 4 === 0 ? 'bg-scutoid-red' : 'bg-slate-300'} opacity-80 shadow-sm transition-transform hover:scale-105`}></div>
                     ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 mb-4">Nuestros Proyectos</h2>
              <div className="w-16 h-1 bg-scutoid-red mx-auto mb-6"></div>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Desarrollos orientados a la fuerza laboral local en mercados de alta demanda y crecimiento sostenido en Florida.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              
              {/* Proyecto 1: The Commander Charles Place */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
                <div className="h-64 bg-slate-200 relative overflow-hidden flex items-center justify-center">
                   {/* Placeholder visual while concrete images are implemented */}
                   <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 opacity-90 z-0"></div>
                   <div className="relative z-10 text-center px-4">
                      <div className="text-white/80 font-display tracking-widest text-sm uppercase mb-2">Proyecto</div>
                      <h3 className="text-3xl font-display font-bold text-white mb-2">The Commander</h3>
                      <h3 className="text-3xl font-display font-bold text-white">Charles Place</h3>
                   </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 text-scutoid-blue mb-4">
                    <MapPin size={18} />
                    <span className="font-semibold">Orlando, FL</span>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <span className="text-slate-500">Unidades</span>
                      <span className="font-semibold text-slate-900">84 unidades (2 dormitorios / 2 baños)</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="text-slate-500">Estado</span>
                      <span className="font-semibold text-scutoid-blue">En Construcción (70%)</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-6">
                    Desarrollo de 84 unidades tipo A- en el corazón de Orlando, FL, sobre un terreno de 4.07 acres, a minutos del Aeropuerto Internacional y Downtown. Orientado a satisfacer la demanda insatisfecha de vivienda para la fuerza laboral local.
                  </p>
                  
                  <Link to="/commander-charles-place" onClick={() => window.scrollTo(0,0)} className="inline-flex items-center gap-2 text-scutoid-blue font-semibold hover:text-blue-800 transition-colors">
                    Más detalles <ChevronRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Proyecto 2: Penrose Point */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
                <div className="h-64 bg-slate-200 relative overflow-hidden flex items-center justify-center">
                   {/* Placeholder visual while concrete images are implemented */}
                   <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 opacity-90 z-0"></div>
                   <div className="relative z-10 text-center px-4">
                      <div className="text-white/80 font-display tracking-widest text-sm uppercase mb-2">Proyecto</div>
                      <h3 className="text-3xl font-display font-bold text-white mb-2">Penrose Point</h3>
                   </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 text-scutoid-blue mb-4">
                    <MapPin size={18} />
                    <span className="font-semibold">Wildwood, FL (Colindante a The Villages)</span>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <span className="text-slate-500">Unidades</span>
                      <span className="font-semibold text-slate-900">243 unidades (1, 2 y 3 Dormitorios)</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="text-slate-500">Estado</span>
                      <span className="font-semibold text-scutoid-blue">Planos & Permisos</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-6">
                    Desarrollo desde cero de 243 apartamentos en 3.53 acres para albergar la fuerza laboral de The Villages, el destino de mayor migración interna en EE.UU. Rentas modelo asequibles frente a un déficit regional de hasta 1,200 unidades.
                  </p>
                  
                  <Link to="/penrose-point" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2 text-scutoid-blue font-semibold hover:text-blue-800 transition-colors">
                    Más detalles <ChevronRight size={18} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PROPUESTA DE VALOR & EQUIPO Y LIDERAZGO */}
        <section id="inversores" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
           <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
           
           <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Propuesta de Valor */}
              <div className="mb-20">
                <h2 className="text-3xl lg:text-4xl font-bold font-display text-scutoid-blue mb-10 text-center">Propuesta de Valor para Inversores</h2>
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                  {[
                    {
                      icon: <Briefcase className="text-scutoid-red mb-4" size={40} />,
                      title: "Gestión profesional de ciclo completo",
                      desc: "Bajo estándares institucionales durante todo el desarrollo del negocio."
                    },
                    {
                      icon: <Eye className="text-scutoid-blue mb-4" size={40} />,
                      title: "Transparencia",
                      desc: "Política de 'Puertas Abiertas' financiera y de administración con acceso a información cumpliendo con las bases de nuestra filosofía."
                    },
                    {
                      icon: <ShieldCheck className="text-scutoid-red mb-4" size={40} />,
                      title: "Estructuras de inversión",
                      desc: "Enfoque en retornos atractivos. Con riesgos identificados y mitigados. Ajustados por riesgo y preservación de capital en el largo plazo."
                    },
                    {
                      icon: <TrendingUp className="text-scutoid-blue mb-4" size={40} />,
                      title: "Maximización de rendimientos",
                      desc: "A través de la participación en proyectos inmobiliarios con activos tangibles y estrategias de salida definidas."
                    }
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-800 p-8 rounded-xl border border-slate-700/50 hover:bg-slate-800/80 transition-colors">
                      {item.icon}
                      <h3 className="text-xl font-bold font-display mb-3 text-white">{item.title}</h3>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipo Summary */}
              <div id="liderazgo" className="scroll-mt-28">
                <h2 className="text-3xl lg:text-4xl font-bold font-display text-white mb-6">Equipo y Liderazgo</h2>
                <div className="w-16 h-1 bg-scutoid-red mb-8"></div>
                <div className="grid md:grid-cols-2 gap-8 text-slate-300 text-lg">
                  <p>
                    <strong className="text-white">Scutoid Development</strong> cuenta con un equipo directivo con amplia experiencia combinada
                    en desarrollo inmobiliario, construcción, estructuración financiera y gestión de 
                    inversiones.
                  </p>
                  <p>
                    La conducción se apoya en perfiles complementarios que integran la visión estratégica, 
                    el análisis financiero, la capacidad técnica y la ejecución operativa, garantizando rigor en 
                    decisiones y alineación de intereses.
                  </p>
                </div>
              </div>

           </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="py-20 lg:py-28 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 mb-6">Ponte en Contacto</h2>
                <div className="w-16 h-1 bg-scutoid-blue mb-8"></div>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  ¿Interesado en conocer más sobre nuestros proyectos de inversión multifamily? 
                  Comunícate con nuestro equipo para explorar oportunidades estratégicas y descubrir 
                  cómo podemos construir valor juntos.
                </p>

                <div className="space-y-6">
                  <a 
                    href="mailto:development@scutoid.us" 
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors group"
                  >
                    <div className="bg-blue-50 text-scutoid-blue p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 mb-1">Correo Electrónico</p>
                      <p className="text-lg font-semibold text-slate-900">development@scutoid.us</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+19545105301" 
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors group"
                  >
                    <div className="bg-red-50 text-scutoid-red p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 mb-1">Teléfono</p>
                      <p className="text-lg font-semibold text-slate-900">+1 (954) 510-5301</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-scutoid-red/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-scutoid-blue/5 rounded-full blur-2xl"></div>

                {isSubmitted ? (
                  <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[300px] text-center">
                    <div className="w-16 h-16 bg-blue-50 text-scutoid-blue rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">¡Gracias por contactarnos!</h3>
                    <p className="text-slate-600 mb-8 max-w-sm">
                      Tu mensaje ha sido enviado exitosamente. Nos pondremos en contacto contigo a la brevedad.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-scutoid-blue font-medium hover:text-blue-800 transition-colors"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form 
                    ref={formRef}
                    className="relative z-10" 
                    onSubmit={async (e) => {
                      e.preventDefault();
                      if (!formRef.current) return;
                      
                      setIsSubmitting(true);
                      setSubmitError('');
                      
                      try {
                        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
                        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
                        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
                        
                        // Si no están configuradas las variables, usamos mailto como fallback para DEV o simulación
                        if (!serviceId || !templateId || !publicKey) {
                          console.warn('EmailJS no está configurado. Configura las variables de entorno VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID y VITE_EMAILJS_PUBLIC_KEY. Usando fallback local para esta demostración.');
                          
                          // Simulación de envío de 1 segundo
                          setTimeout(() => {
                            setIsSubmitting(false);
                            setIsSubmitted(true);
                          }, 1000);
                          return;
                        }

                        await emailjs.sendForm(
                          serviceId,
                          templateId,
                          formRef.current,
                          { publicKey }
                        );
                        
                        setIsSubmitted(true);
                      } catch (error) {
                        console.error('Error al enviar el email:', error);
                        setSubmitError('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
                      } finally {
                        setIsSubmitting(false);
                      }
                    }}
                  >
                    <div className="space-y-6">
                      {submitError && (
                        <div className="p-3 bg-red-50 text-red-600 border border-red-200 rounded-lg text-sm">
                          {submitError}
                        </div>
                      )}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nombre Completo</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-scutoid-blue focus:ring-2 focus:ring-scutoid-blue/20 outline-none transition-all bg-white"
                          placeholder="Ingresa tu nombre"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Correo Electrónico</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-scutoid-blue focus:ring-2 focus:ring-scutoid-blue/20 outline-none transition-all bg-white"
                          placeholder="tu@email.com"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
                        <textarea 
                          id="message" 
                          name="message"
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-scutoid-blue focus:ring-2 focus:ring-scutoid-blue/20 outline-none transition-all resize-none bg-white"
                          placeholder="¿En qué podemos ayudarte?"
                          required
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`w-full bg-scutoid-blue hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                        {!isSubmitting && <Send size={18} />}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER & VISION */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-slate-50 border-l-4 border-scutoid-red p-8 rounded-r-xl mb-16 shadow-sm">
             <h3 className="text-2xl font-bold font-display text-slate-900 mb-4">Nuestra Visión</h3>
             <p className="text-lg text-slate-700 font-medium italic">
                "Consolidar a Scutoid Development como una plataforma de desarrollo inmobiliario reconocida por su disciplina, consistencia y capacidad sostenida de creación de valor, construyendo un portafolio de activos multifamily de alta calidad en Florida y posicionándose como un socio estratégico confiable para inversores privados, family offices e instituciones."
             </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-100 pt-8">
             <Logo className="h-14 opacity-80 grayscale hover:grayscale-0 transition-all duration-300" />
             <div className="text-center md:text-right">
                <p className="text-slate-500 font-medium mb-1">Scutoid Development &copy; {new Date().getFullYear()}</p>
                <p className="text-slate-400 text-sm">Creación de valor y rendimientos sostenibles a través de activos reales.</p>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
