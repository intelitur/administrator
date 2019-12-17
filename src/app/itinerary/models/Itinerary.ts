export class Itinerary {
  constructor(
    public name?: string,
    public total_price?: number,
    public adult_number?: number,
    public child_number?: number,
    public description?: string,
    public duration?: number,
    public active?: boolean,
    public _public?: boolean,
    public initial_date?: Date,
    public final_date?: Date
  ) {}
}