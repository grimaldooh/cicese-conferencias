"use client";

import { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, parseISO, addMonths, subMonths } from "date-fns";
import { es } from "date-fns/locale";
import { Conferencia } from "@/types/components";
import { useRouter } from "next/navigation";

interface CalendarProps {
  conferencias: Conferencia[];
}

export default function Calendar({ conferencias }: CalendarProps) {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(new Date());

  // Funciones para navegar entre meses
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  // Obtener los días del mes actual
  const firstDay = startOfMonth(currentDate);
  const lastDay = endOfMonth(currentDate);
  const days: Date[] = eachDayOfInterval({ start: firstDay, end: lastDay });

  // Filtrar conferencias por día
  const getConferenciasByDay = (day: Date) => {
    return conferencias.filter(conf => {
      const confDate = parseISO(conf.fechaInicio);
      return isSameDay(day, confDate);
    });
  };

  // Función para navegar a la página de detalles
  const handleConferenciaClick = (id: string) => {
    router.push(`/conferencia/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Calendario de Conferencias</h1>
        <div className="flex space-x-4">
          <button
            onClick={prevMonth}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            ← Mes Anterior
          </button>
          <h2 className="text-xl font-semibold">
            {format(currentDate, "MMMM yyyy", { locale: es })}
          </h2>
          <button
            onClick={nextMonth}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            Mes Siguiente →
          </button>
        </div>
      </div>

      {/* Días de la semana */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"].map((day) => (
          <div key={day} className="text-center font-semibold py-2 bg-gray-100 dark:bg-gray-800">
            {day}
          </div>
        ))}
      </div>

      {/* Calendario */}
      <div className="grid grid-cols-7 gap-1 auto-rows-fr">
        {Array(firstDay.getDay())
          .fill(null)
          .map((_, idx) => (
            <div key={`empty-start-${idx}`} className="bg-gray-50 dark:bg-gray-900 p-1"></div>
          ))}

        {days.map((day) => {
          const conferenciasDelDia = getConferenciasByDay(day);
          
          return (
            <div
              key={day.toString()}
              className={`min-h-[120px] border border-gray-200 dark:border-gray-700 p-1 ${
                isSameMonth(day, currentDate)
                  ? "bg-white dark:bg-gray-800"
                  : "bg-gray-50 dark:bg-gray-900 text-gray-400"
              }`}
            >
              <div className="font-medium mb-1">{format(day, "d")}</div>
              
              <div className="space-y-1">
                {conferenciasDelDia.map((conf) => {
                  const inicio = parseISO(conf.fechaInicio);
                  const fin = parseISO(conf.fechaFin);
                  
                  return (
                    <div
                      key={conf.id}
                      onClick={() => handleConferenciaClick(conf.id)}
                      className={`${conf.color} text-white text-xs p-1 rounded truncate cursor-pointer hover:opacity-90 transition-transform hover:scale-105`}
                      title={`${conf.titulo} - ${conf.nombreSala}`}
                    >
                      <div className="font-medium">{conf.titulo}</div>
                      <div>
                        {format(inicio, "HH:mm")} - {format(fin, "HH:mm")}
                      </div>
                      <div className="text-xs opacity-90">{conf.nombreSala}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {Array(6 - lastDay.getDay())
          .fill(null)
          .map((_, idx) => (
            <div key={`empty-end-${idx}`} className="bg-gray-50 dark:bg-gray-900 p-1"></div>
          ))}
      </div>
    </div>
  );
}