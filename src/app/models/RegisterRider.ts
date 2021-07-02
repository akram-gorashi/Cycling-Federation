export interface RegisterRider {
   name: string,
   email: string,
   tshirt_color: string,
   image: string,
   riders_ids: RidersIds[],
}

export interface RidersIds {
   riders: string,
   phone: string
}