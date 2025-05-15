// Tipos centralizados para toda la aplicación

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'technical' | 'user';
  department?: string;
}

export interface Room {
  id: string;
  name: string;
  building: string;
  capacity: number;
  hasVideoConference: boolean;
  equipment: Equipment[];
  status: 'available' | 'maintenance' | 'occupied';
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
}

export interface Reservation {
  id: string;
  title: string;
  description?: string;
  roomId: string;
  userId: string;
  startTime: Date;
  endTime: Date;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  attendees?: number;
  requiredEquipment?: string[];
}

export interface Equipment {
  id: string;
  name: string;
  type: string;
  status: 'operational' | 'maintenance' | 'broken';
  roomId?: string;
}

export interface Report {
  id: string;
  title: string;
  description: string;
  roomId: string;
  userId: string;
  status: 'pending' | 'in-progress' | 'resolved';
  createdAt: Date;
  updatedAt: Date;
  assignedToId?: string;
  priority: 'low' | 'medium' | 'high';
}