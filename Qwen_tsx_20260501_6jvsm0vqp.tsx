'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Bot, 
  Headphones, 
  Zap, 
  Clock, 
  TrendingUp, 
  Shield,
  Menu,
  X,
  MessageSquare,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Users,
  Stethoscope,
  Navigation
} from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const whatsappNumber = "56959369384"
  const whatsappMessage = "Hola Agencia IA Pro, vi tu web y quiero automatizar las citas de mi clínica/consultorio"
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Agencia IA Pro" 
              className="h-10 w-auto object-contain"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Beneficios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </button>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white">
                <MessageSquare className="mr-2 h-4 w-4" />
                Escríbenos
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-background border-t border-border py-4">
            <div className="container mx-auto px-4 flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-muted-foreground hover:text-foreground transition-colors py-2 text-left"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('beneficios')}
                className="text-muted-foreground hover:text-foreground transition-colors py-2 text-left"
              >
                Beneficios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-muted-foreground hover:text-foreground transition-colors py-2 text-left"
              >
                Contacto
              </button>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Escríbenos por WhatsApp
                </Button>
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-cyan-50 dark:from-violet-950/30 dark:via-fuchsia-950/30 dark:to-cyan-950/30 -z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-violet-200/40 to-transparent rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-cyan-200/40 to-transparent rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              Especialistas en Clínicas y Consultorios
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Automatizamos Citas con{' '}
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">
                Inteligencia Artificial
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Más citas. Más clientes. Más resultados para tu clínica dental, centro de salud o consultorio. 
              Atención 24/7 sin perder ninguna oportunidad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white text-lg px-8 py-6">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Agenda tu Demo Gratis
                </Button>
              </a>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('servicios')} className="text-lg px-8 py-6">
                Ver Servicios<ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">+40%</div>
                <div className="text-muted-foreground text-sm mt-1">Más Citas Agendadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-muted-foreground text-sm mt-1">Atención Automática</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">90s</div>
                <div className="text-muted-foreground text-sm mt-1">Respuesta Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">-70%</div>
                <div className="text-muted-foreground text-sm mt-1">Menos Inasistencias</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Soluciones diseñadas para clínicas, centros de salud y profesionales</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-violet-500/50 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mb-4">
                  <Calendar className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Agendamiento + Recordatorios Automáticos</CardTitle>
                <CardDescription className="text-base">Tus pacientes nunca más olvidarán su cita. Reprogramación inteligente según tu disponibilidad.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Recordatorio 24h antes</strong> - Confirmación inicial</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Recordatorio 3h antes</strong> - Última confirmación</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Reprogramación inteligente</strong> - El sistema busca nuevos horarios según tu disponibilidad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                    <span>Confirmación/Cancelación con un clic</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-fuchsia-500/50 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 flex items-center justify-center mb-4">
                  <Bot className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Chatbot Inteligente para WhatsApp</CardTitle>
                <CardDescription className="text-base">Responde preguntas frecuentes, califica pacientes y deriva automáticamente.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-fuchsia-500 mt-0.5 flex-shrink-0" />
                    <span>Respuestas instantáneas 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-fuchsia-500 mt-0.5 flex-shrink-0" />
                    <span>Información de servicios y precios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-fuchsia-500 mt-0.5 flex-shrink-0" />
                    <span>Calificación de urgencias</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-fuchsia-500 mt-0.5 flex-shrink-0" />
                    <span>Derivación a humano cuando se necesita</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-cyan-500/50 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Seguimiento de Pacientes</CardTitle>
                <CardDescription className="text-base">Mantén el contacto automático post-consulta y aumenta la fidelización.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span>Encuestas de satisfacción automáticas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span>Recordatorios de controles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span>Campañas de reactivación</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span>Programas de fidelización</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-500/50 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4">
                  <Navigation className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Asistencia de Ubicación Inteligente</CardTitle>
                <CardDescription className="text-base">Ayuda a tus pacientes a llegar sin problemas. Información completa de cómo llegar a tu consulta.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>Mapa de Google Maps integrado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>Rutas de locomoción colectiva cercanas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>Estacionamientos disponibles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>Instrucciones paso a paso automáticas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-500/50 overflow-hidden relative md:col-span-2">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mb-4">
                  <Stethoscope className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Integración con tu Software</CardTitle>
                <CardDescription className="text-base">Conectamos con tu sistema actual de gestión clínica.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Compatible con principales softwares</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Sincronización en tiempo real</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Historial de pacientes actualizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Reportes y analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">¿Por qué elegirnos?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Beneficios reales para tu clínica o consultorio</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-violet-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Ahorra 20+ Horas/Semana</h3>
              <p className="text-muted-foreground text-sm">Tu recepcionista se libera de llamadas repetitivas y se enfoca en atender pacientes presenciales.</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/50 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-fuchsia-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Más Citas, Menos Ausentismo</h3>
              <p className="text-muted-foreground text-sm">Recordatorios automáticos reducen las inasistencias hasta en 70%.</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Recordatorios Inteligentes</h3>
              <p className="text-muted-foreground text-sm">Doble recordatorio (24h y 3h antes) + reprogramación automática según tu agenda.</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Atención Sin Errores</h3>
              <p className="text-muted-foreground text-sm">Sin confusiones de horarios ni dobles reservas. Todo automatizado y preciso.</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Soporte Personalizado</h3>
              <p className="text-muted-foreground text-sm">Te acompañamos en la implementación y estamos siempre disponibles.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Agenda tu Demostración Gratis</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">15 minutos son suficientes para mostrarte cómo automatizar tu clínica</p>
            </div>
            
            <div className="grid lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold text-xl mb-4">Contacto Directo</h3>
                  <div className="space-y-4">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center group-hover:bg-violet-200 transition-colors">
                        <MessageSquare className="h-5 w-5 text-violet-600" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">WhatsApp</div>
                        <div className="font-medium">+56 9 5936 9384</div>
                      </div>
                    </a>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-fuchsia-100 dark:bg-fuchsia-900/50 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-fuchsia-600" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Email</div>
                        <div className="font-medium">agenciaiapro.cl@gmail.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-cyan-600" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Cobertura</div>
                        <div className="font-medium">Chile</div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white border-0">
                  <h3 className="font-semibold text-xl mb-2">¿Listo para automatizar?</h3>
                  <p className="text-white/80 text-sm">Una llamada de 15 minutos es todo lo que necesitas para descubrir cómo podemos ayudarte.</p>
                </Card>
              </div>
              
              <Card className="lg:col-span-3 p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input 
                        id="name" 
                        placeholder="Dr. Juan Pérez" 
                        value={formData.name} 
                        onChange={(e) => setFormData({...formData, name: e.target.value})} 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="tu@clinica.com" 
                        value={formData.email} 
                        onChange={(e) => setFormData({...formData, email: e.target.value})} 
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+56 9 1234 5678" 
                        value={formData.phone} 
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Clínica / Consultorio</Label>
                      <Input 
                        id="company" 
                        placeholder="Nombre de tu clínica" 
                        value={formData.company} 
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">¿Cómo podemos ayudarte?</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Cuéntanos brevemente sobre tu clínica y qué te gustaría automatizar..." 
                      rows={4} 
                      value={formData.message} 
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting} 
                    className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white"
                  >
                    {isSubmitting ? (
                      <><span className="animate-spin mr-2">⏳</span>Enviando...</>
                    ) : (
                      <><Calendar className="mr-2 h-5 w-5" />Solicitar Demostración</>
                    )}
                  </Button>
                  
                  {submitSuccess && (
                    <div className="p-4 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-lg text-center">
                      ¡Gracias! Te contactaremos en menos de 24 horas para agendar tu demostración.
                    </div>
                  )}
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img src="/logo.png" alt="Agencia IA Pro" className="h-10 w-auto object-contain mb-4"/>
              <p className="text-muted-foreground max-w-md">
                Automatizamos citas. Impulsamos resultados. Especialistas en clínicas dentales, centros de salud y profesionales.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Agendamiento 24/7</li>
                <li>Chatbots WhatsApp</li>
                <li>Seguimiento Pacientes</li>
                <li>Integraciones</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>agenciaiapro.cl@gmail.com</li>
                <li>+56 9 5936 9384</li>
                <li>Chile</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Agencia IA Pro. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <MessageSquare className="h-6 w-6" />
      </a>
    </div>
  )
}