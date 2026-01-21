import type { Address, ContactInfo, FeeRange, Id, MediaItem, RatingSummary, Review } from './common';

export type CollegeType = 'government' | 'private' | 'deemed' | 'autonomous' | 'other';

export interface College {
    id: Id;
    name: string;
    shortName?: string;
    type?: CollegeType;

    description?: string;
    highlights?: string[];

    courses?: string[];
    eligibility?: string[];

    address?: Address;
    contact?: ContactInfo;
    media?: MediaItem[];

    feeRange?: FeeRange;
    seatInfo?: {
        totalSeats?: number;
        notes?: string;
    };

    accreditations?: string[];
    rankings?: string[];

    rating?: RatingSummary;
    reviews?: Review[];

    createdAt: string;
    updatedAt?: string;
}
