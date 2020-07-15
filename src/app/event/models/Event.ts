import { Time } from '@angular/common';

export interface EventType{
    event_id?: Number,
    name: string,
    address: string,
    detail: string,
    color: string,
    date_range: {
        initial_date: Date,
        final_date: Date
    },
    cost: Number,
    all_day: boolean,
    initial_time: Time,
    final_time: Time,
    latitude?: number, 
    longitude?: number
    is_active?: boolean
    user_id?: number
    images?: any[]
}