import { Room, User } from '@/types/globals';

interface ReservationFormProps {
  availableRooms: Room[];
  currentUser: User;
  onSubmit: (formData: ReservationFormData) => Promise<void>;
  initialData?: Partial<ReservationFormData>;
}

export interface ReservationFormData {
  title: string;
  description?: string;
  roomId: string;
  startTime: Date;
  endTime: Date;
  attendees?: number;
  requiredEquipment: string[];
}

// Tipo para las conferencias que recibe el componente
export interface Conferencia {
  id: string;
  titulo: string;
  fechaInicio: string; // ISO string format
  fechaFin: string;    // ISO string format
  color: string;
  salaId: string;
  nombreSala: string;
  // Nuevos campos para detalles
  descripcion?: string;
  ponente?: string;
  institucionPonente?: string;
  capacidadSala?: number;
  equipoRequerido?: string[];
  participantes?: number;
  estado?: 'programada' | 'en curso' | 'finalizada' | 'cancelada';
}

export default function ReservationForm({ availableRooms, currentUser, onSubmit, initialData }: ReservationFormProps) {
  // Implementación del componente
}