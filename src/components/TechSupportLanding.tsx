import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Mail, Shield, Users } from "lucide-react";

export default function TechSupportLanding() {
  const professionals = [
    {
      name: "Diego Arcuri",
      role: "Soporte Técnico",
      specialties: ["Armado de Computadoras", "Optimización de Hardware"],
    },
    {
      name: "Martiniano Lopez",
      role: "Infraestructura Técnica",
      specialties: [
        "Instalación de Componentes",
        "Mantenimiento Preventivo de PCs",
      ],
    },
    {
      name: "Marcelo Arce Rojas",
      role: "Integración de Hardware",
      specialties: [
        "Configuración de BIOS/UEFI",
        "Pruebas de Rendimiento de Hardware",
      ],
    },
    {
      name: "Eduardo Gimenez",
      role: "Coordinador de Soporte Técnico",
      specialties: [
        "Diagnóstico de Fallas de Hardware",
        "Actualización de Equipos",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">AI PC Builder</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#team" className="text-sm font-medium hover:text-primary">
              Nuestro Equipo
            </a>
            <a
              href="#services"
              className="text-sm font-medium hover:text-primary"
            >
              Servicio
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contacto
            </a>
          </nav>

          <Button>
            <a href="#contact">Ayuda</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Soporte Tecnico de
            <span className="block">AI PC Builder</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Soporte profesional de IT y servicios de ciberseguridad para
            mantener tu negocio funcionando sin interrupciones. Disponibles 24/7
            con tiempos de respuesta rápidos.
          </p>
        </div>
      </section>

      {/* Our Professionals Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Profesionales
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conoce a nuestros expertos certificados, quienes aportan años de
              experiencia y conocimientos de vanguardia para resolver tus
              desafíos técnicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {professionals.map((professional, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {professional.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {professional.role}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {professional.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-muted-foreground">
              Soluciones para el armado de tu PC en todas las gamas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Armado de PC</h3>
              <p className="text-muted-foreground">
                Servicio profesional de armado y configuración de computadoras a
                medida, según tus necesidades.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mesa de Ayuda</h3>
              <p className="text-muted-foreground">
                Soporte técnico 24/7 para todas tus necesidades informáticas y
                problemas de usuario.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Us Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              ¿Tienes preguntas o necesitas ayuda? Comunícate con nuestro equipo
              por correo electrónico.
            </p>
          </div>

          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-3">Mandanos un mail.</h3>
            <p className="text-slate-300 text-xl mb-2">
              ortproyectofinal218@gmail.com
            </p>

            <Button size="lg" className="mt-8" variant="secondary">
              <Mail className="mr-2 h-5 w-5" />
              Envíanos un correo electrónico.
            </Button>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700 pt-8 mt-12 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Soporte Tecnico de AI PC BUILDER.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
