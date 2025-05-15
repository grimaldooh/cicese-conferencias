"use client";

import { useState, useEffect } from "react";
import Calendar from "@/components/Calendario";
import { Conferencia } from "@/types/components";

export default function CalendarioPage() {
  const [conferencias, setConferencias] = useState<Conferencia[]>([]);
  
  // Fetch de ejemplo para las conferencias
  useEffect(() => {
    // Simulación de datos de conferencias
    const conferenciasSimuladas: Conferencia[] = [
      {
        id: "1",
        titulo: "Avances en Oceanografía",
        fechaInicio: "2025-05-05T10:00:00",
        fechaFin: "2025-05-05T12:00:00",
        color: "bg-blue-500",
        salaId: "sala1",
        nombreSala: "Auditorio Principal"
      },
      {
        id: "2",
        titulo: "Tecnologías Emergentes",
        fechaInicio: "2025-05-05T14:00:00",
        fechaFin: "2025-05-05T16:00:00",
        color: "bg-green-500",
        salaId: "sala2",
        nombreSala: "Sala de Juntas"
      },
      {
        id: "3",
        titulo: "Biología Marina",
        fechaInicio: "2025-05-12T09:00:00",
        fechaFin: "2025-05-12T11:30:00",
        color: "bg-purple-500",
        salaId: "sala1",
        nombreSala: "Auditorio Principal"
      },
      {
        id: "4",
        titulo: "Cambio Climático",
        fechaInicio: "2025-05-20T13:00:00",
        fechaFin: "2025-05-20T15:00:00",
        color: "bg-yellow-500",
        salaId: "sala3",
        nombreSala: "Sala Multimedia"
      },
      {
        id: "5",
        titulo: "Inteligencia Artificial",
        fechaInicio: "2025-05-28T16:00:00",
        fechaFin: "2025-05-28T18:00:00",
        color: "bg-red-500",
        salaId: "sala2",
        nombreSala: "Sala de Juntas"
      }
    ];

    setConferencias(conferenciasSimuladas);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Calendar conferencias={conferencias} />
    </div>
  );
}