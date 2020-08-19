export interface Ads {
    ad_id?: Number,
    name: String,
    description: String,
    initial_date: Date,
    final_date: Date,
    ubication?: {
        longuitude: Number,
        latitude: Number
    },
    company_id: Number
    is_active?: boolean

}