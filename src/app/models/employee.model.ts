// employee.model.ts
export interface Employee {
id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;   // nested object — needs its own interface
  company: Company; 
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: { lat: string; lng: string };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}