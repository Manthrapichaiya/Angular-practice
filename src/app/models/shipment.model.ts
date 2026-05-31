// shipment.model.ts
export interface ShipmentData  {
 customer: string;
 status: 'pending' | 'delivered' | 'cancelled';
}