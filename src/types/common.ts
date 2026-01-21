export type Id = string;

export interface GeoLocation {
    lat: number;
    lng: number;
}

export interface Address {
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
    country?: string;
    pincode?: string;
    geo?: GeoLocation;
}

export interface ContactInfo {
    phone?: string;
    whatsapp?: string;
    email?: string;
    website?: string;
}

export type MediaType = 'image' | 'video' | 'document';

export interface MediaItem {
    id: Id;
    type: MediaType;
    url: string;
    title?: string;
}

export interface RatingSummary {
    average: number;
    count: number;
}

export interface Review {
    id: Id;
    userId?: Id;
    userName?: string;
    rating: number;
    comment?: string;
    createdAt: string;
}

export interface FeeRange {
    min?: number;
    max?: number;
    currency?: 'INR' | 'USD';
    unit?: 'hour' | 'day' | 'month' | 'course';
}
