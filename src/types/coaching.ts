import type { Address, ContactInfo, FeeRange, Id, MediaItem, RatingSummary, Review } from './common';

export interface Coaching {
    id: Id;
    name: string;
    tagline?: string;
    description?: string;

    categories?: string[];
    courses?: string[];
    examPrep?: string[];

    address?: Address;
    serviceAreas?: string[];

    feeRange?: FeeRange;

    contact?: ContactInfo;
    media?: MediaItem[];

    rating?: RatingSummary;
    reviews?: Review[];

    verified?: boolean;
    createdAt: string;
    updatedAt?: string;
}
