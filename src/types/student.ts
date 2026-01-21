import type { Address, ContactInfo, Id, MediaItem } from './common';

export interface StudentEnrollment {
    id: Id;
    type: 'class' | 'course' | 'test_series' | 'mentorship' | 'other';
    title: string;
    startDate?: string;
    endDate?: string;
    status?: 'active' | 'paused' | 'completed';
}

export interface Student {
    id: Id;
    name: string;
    email?: string;

    phone?: string;
    address?: Address;

    grade?: string;
    targetExams?: string[];
    goals?: string[];

    guardianName?: string;
    guardianContact?: ContactInfo;

    avatar?: MediaItem;
    enrollments?: StudentEnrollment[];

    createdAt: string;
    updatedAt?: string;
}
