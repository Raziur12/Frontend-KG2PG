import type { Address, ContactInfo, FeeRange, Id, MediaItem, RatingSummary, Review } from './common';

export type InstituteCategory = 'training' | 'coaching' | 'college' | 'university' | 'consultancy' | 'other';

export interface Institute {
    id: Id;
    name: string;
    category?: InstituteCategory;

    description?: string;
    services?: string[];
    programs?: string[];

    address?: Address;
    contact?: ContactInfo;
    media?: MediaItem[];

    feeRange?: FeeRange;

    rating?: RatingSummary;
    reviews?: Review[];

    verified?: boolean;
    createdAt: string;
    updatedAt?: string;
}
