export interface Ads {
    ad_id?: Number,
    name: String,
    description: String,
    date_range:{
        initial_date: Date,
        final_date: Date,
    },
    longitude?: number,
    latitude?: number,
    company_id: Number
    is_active?: boolean

}