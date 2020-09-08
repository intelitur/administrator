export interface Ads {
    ad_id?: Number,
    name: String,
    description: String,
    creation_date?: Date,
    active_range:{
        start: String,
        end: String,
    },
    longitude?: number,
    latitude?: number,
    is_active?: boolean
    is_up?: boolean
}