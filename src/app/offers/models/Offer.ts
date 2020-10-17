export class Offer {
  constructor(
    public name?: string,
    public description?: string,
    public companies?: string
  ) {}
}

export class OfferDetaills {
  constructor(
    public name?: string,
    public description?: string,
    public is_active?:boolean
  ) {}
}