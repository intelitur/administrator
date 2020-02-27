import { Time } from '@angular/common';

export interface EventType{
    event_id?: Number,
    name: string,
    address: string,
    detail: string,
    color: string,
    date_range: { //cambiar el dato a tipo date
        initial_date: string,
        final_date: string
    },
    cost: Number,
    all_day: boolean,
    initial_time: Time,
    final_time: Time,
    latitude: Number, 
    longitude: Number
}