import type { Address, ContactInfo, FeeRange, Id, MediaItem, RatingSummary, Review } from './common';

export type UniversityType = 'state' | 'central' | 'private' | 'deemed' | 'other';

export interface University {
    id: Id;
    name: string;
    shortName?: string;
    type?: UniversityType;

    description?: string;
    departments?: string[];
    courses?: string[];

    address?: Address;
    contact?: ContactInfo;
    media?: MediaItem[];

    feeRange?: FeeRange;

    accreditations?: string[];
    rankings?: string[];

    rating?: RatingSummary;
    reviews?: Review[];

    createdAt: string;
    updatedAt?: string;
}
