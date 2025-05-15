import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://sic.cultura.gob.mx/images/62215" 
            alt="Logo CICESE" 
            width={40} 
            height={40}
            className="dark:invert"
          />
          <span className="text-xl font-semibold">CICESE Conferencias</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/dashboard" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">
            Dashboard
          </Link>
          <Link href="/salas" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">
            Salas
          </Link>
          <Link href="/reservas" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">
            Reservas
          </Link>
          <Link href="/reportes" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">
            Reportes
          </Link>
          <Link href="/calendario" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">
            Calendario
          </Link>
          <Link href="/test" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">
            Pokemon
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </header>
  );
}