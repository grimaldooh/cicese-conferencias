import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sistema de Gestión de Salas y Videoconferencias
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Reserva salas, organiza conferencias y gestiona recursos de
                forma eficiente en tiempo real.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/reservas/nueva"
                  className="rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 text-center"
                >
                  Nueva Reserva
                </Link>
                <Link
                  href="/calendario"
                  className="rounded-md bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 px-6 py-3 text-base font-medium text-center"
                >
                  Ver Calendario
                </Link>
              </div>
            </div>
            <div className="hidden md:block ">
              <img
                src="https://cicese.edu.mx/recorrido-virtual/img/cicese/social-hero.jpg"
                alt="Ilustración de gestión de salas"
                width={500}
                height={400}
                className="rounded-full object-cover dark:invert ml-32"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Funcionalidades Principales
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Gestión de Salas",
                desc: "Visualiza la disponibilidad de salas en tiempo real y reserva con anticipación.",
                icon: "🏢",
              },
              {
                title: "Calendario Integrado",
                desc: "Filtros avanzados para visualizar reservas por sala, edificio o estado.",
                icon: "📅",
              },
              {
                title: "Reportes Técnicos",
                desc: "Notifica problemas con equipos y sigue el estado de las reparaciones.",
                icon: "🔧",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} CICESE Conferencias | Sistema de
            Gestión de Salas
          </p>
        </div>
      </footer>
    </div>
  );
}