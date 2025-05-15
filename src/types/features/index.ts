import type { Reservation, Room } from '@/types/globals';

export interface CalendarEvent extends Reservation {
  color: string;
  isRecurring: boolean;
}

export interface CalendarFilters {
  buildings: string[];
  rooms: string[];
  status: Reservation['status'][];
  dateRange: {
    start: Date;
    end: Date;
  };
}