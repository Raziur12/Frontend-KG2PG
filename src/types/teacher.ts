import type { Address, ContactInfo, FeeRange, Id, MediaItem, RatingSummary, Review } from './common';

export type TeachingMode = 'online' | 'offline' | 'hybrid';

export interface AvailabilitySlot {
    dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    startTime: string;
    endTime: string;
}

export interface Teacher {
    id: Id;
    name: string;
    headline?: string;
    bio?: string;

    subjects: string[];
    grades?: string[];
    examPrep?: string[];

    experienceYears?: number;
    qualifications?: string[];
    languages?: string[];

    mode: TeachingMode;
    address?: Address;
    serviceAreas?: string[];

    fee?: FeeRange;
    availability?: AvailabilitySlot[];

    contact?: ContactInfo;
    media?: MediaItem[];

    rating?: RatingSummary;
    reviews?: Review[];

    verified?: boolean;
    createdAt: string;
    updatedAt?: string;
}
