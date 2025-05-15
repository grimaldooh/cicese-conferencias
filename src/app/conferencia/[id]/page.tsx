"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import { es } from "date-fns/locale";
import { Conferencia } from "@/types/components";

// Simulación de datos (en un proyecto real esto vendría de tu API)
const conferenciasData: Conferencia[] = [
  {
    id: "1",
    titulo: "Avances en Oceanografía",
    fechaInicio: "2025-05-05T10:00:00",
    fechaFin: "2025-05-05T12:00:00",
    color: "bg-blue-500",
    salaId: "sala1",
    nombreSala: "Auditorio Principal",
    descripcion: "Presentación sobre los últimos avances en investigación oceanográfica y su impacto en el cambio climático global.",
    ponente: "Dra. María Rodríguez",
    institucionPonente: "Instituto Oceanográfico Nacional",
    capacidadSala: 120,
    equipoRequerido: ["Proyector", "Micrófono", "Sistema de videoconferencia"],
    participantes: 85,
    estado: "programada"
  },
  {
    id: "2",
    titulo: "Tecnologías Emergentes",
    fechaInicio: "2025-05-05T14:00:00",
    fechaFin: "2025-05-05T16:00:00",
    color: "bg-green-500",
    salaId: "sala2",
    nombreSala: "Sala de Juntas",
    descripcion: "Exploración de tecnologías emergentes y su impacto en la investigación científica.",
    ponente: "Dr. Carlos Vega",
    institucionPonente: "Universidad Tecnológica",
    capacidadSala: 50,
    equipoRequerido: ["Proyector", "Computadora"],
    participantes: 45,
    estado: "programada"
  },
  {
    id: "3",
    titulo: "Biología Marina",
    fechaInicio: "2025-05-12T09:00:00",
    fechaFin: "2025-05-12T11:30:00",
    color: "bg-purple-500",
    salaId: "sala1",
    nombreSala: "Auditorio Principal",
    descripcion: "Estudio de ecosistemas marinos y biodiversidad en la costa del Pacífico.",
    ponente: "Dr. Juan Méndez",
    institucionPonente: "Centro de Investigación Marina",
    capacidadSala: 120,
    equipoRequerido: ["Proyector", "Sistema de audio"],
    participantes: 110,
    estado: "programada"
  },
  {
    id: "4",
    titulo: "Cambio Climático",
    fechaInicio: "2025-05-20T13:00:00",
    fechaFin: "2025-05-20T15:00:00",
    color: "bg-yellow-500",
    salaId: "sala3",
    nombreSala: "Sala Multimedia",
    descripcion: "Análisis de datos climáticos y previsiones para las próximas décadas.",
    ponente: "Dra. Ana López",
    institucionPonente: "Instituto de Estudios Climáticos",
    capacidadSala: 80,
    equipoRequerido: ["Sistema audiovisual completo"],
    participantes: 65,
    estado: "programada"
  },
  {
    id: "5",
    titulo: "Inteligencia Artificial",
    fechaInicio: "2025-05-28T16:00:00",
    fechaFin: "2025-05-28T18:00:00",
    color: "bg-red-500",
    salaId: "sala2",
    nombreSala: "Sala de Juntas",
    descripcion: "Aplicaciones de la inteligencia artificial en la investigación científica.",
    ponente: "Dr. Roberto García",
    institucionPonente: "Instituto Tecnológico",
    capacidadSala: 50,
    equipoRequerido: ["Computadora con GPU", "Proyector 4K"],
    participantes: 48,
    estado: "programada"
  }
];

export default function ConferenciaDetalle({ params }: { params: { id: string } }) {
  const [conferencia, setConferencia] = useState<Conferencia | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga de datos (en un proyecto real esto sería una llamada a la API)
    const fetchConferencia = async () => {
      try {
        // Simular tiempo de carga
        setTimeout(() => {
          const encontrada = conferenciasData.find(conf => conf.id === params.id);
          if (encontrada) {
            setConferencia(encontrada);
          }
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error al cargar la conferencia:", error);
        setLoading(false);
      }
    };

    fetchConferencia();
  }, [params.id]);

  // Mostrar pantalla de carga mientras se obtienen los datos
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Si no se encuentra la conferencia, mostrar 404
  if (!conferencia) {
    notFound();
  }

  const fechaInicio = parseISO(conferencia.fechaInicio);
  const fechaFin = parseISO(conferencia.fechaFin);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        href="/calendario" 
        className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800"
      >
        ← Volver al calendario
      </Link>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Encabezado de la conferencia */}
        <div className={`${conferencia.color} px-6 py-4 text-white`}>
          <h1 className="text-2xl md:text-3xl font-bold">{conferencia.titulo}</h1>
          <div className="mt-2 flex items-center">
            <span className="mr-4">
              {format(fechaInicio, "EEEE d 'de' MMMM 'de' yyyy", { locale: es })}
            </span>
            <span className="bg-white/20 px-2 py-1 rounded text-sm">
              {format(fechaInicio, "HH:mm")} - {format(fechaFin, "HH:mm")}
            </span>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Columna 1: Información básica */}
            <div className="col-span-2">
              <h2 className="text-xl font-semibold mb-4">Descripción</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {conferencia.descripcion}
              </p>

              <h2 className="text-xl font-semibold mb-4">Ponente</h2>
              <div className="flex items-center mb-6">
                <div className="bg-gray-200 dark:bg-gray-700 h-12 w-12 rounded-full flex items-center justify-center text-xl">
                  {conferencia.ponente?.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-medium">{conferencia.ponente}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {conferencia.institucionPonente}
                  </p>
                </div>
              </div>

              {conferencia.equipoRequerido && conferencia.equipoRequerido.length > 0 && (
                <>
                  <h2 className="text-xl font-semibold mb-4">Equipo Requerido</h2>
                  <ul className="list-disc pl-5 mb-6 text-gray-600 dark:text-gray-300">
                    {conferencia.equipoRequerido.map((equipo, idx) => (
                      <li key={idx}>{equipo}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Columna 2: Detalles y Acciones */}
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Detalles del Evento</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">Ubicación</h3>
                  <p className="font-medium">{conferencia.nombreSala}</p>
                </div>
                
                <div>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">Capacidad</h3>
                  <p className="font-medium">{conferencia.capacidadSala} personas</p>
                </div>
                
                <div>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">Participantes Registrados</h3>
                  <p className="font-medium">{conferencia.participantes} / {conferencia.capacidadSala}</p>
                </div>
                
                <div>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">Estado</h3>
                  <span className={`
                    inline-block rounded-full px-3 py-1 text-xs font-medium
                    ${conferencia.estado === 'programada' ? 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100' : ''}
                    ${conferencia.estado === 'en curso' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' : ''}
                    ${conferencia.estado === 'finalizada' ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' : ''}
                    ${conferencia.estado === 'cancelada' ? 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100' : ''}
                  `}>
                    {conferencia.estado === 'programada' && 'Programada'}
                    {conferencia.estado === 'en curso' && 'En curso'}
                    {conferencia.estado === 'finalizada' && 'Finalizada'}
                    {conferencia.estado === 'cancelada' && 'Cancelada'}
                  </span>
                </div>
              </div>
              
              <div className="mt-8 space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                  Registrar Asistencia
                </button>
                
                <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 py-2 px-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:hover:bg-gray-500">
                  Reportar Problema
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}