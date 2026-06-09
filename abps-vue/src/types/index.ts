// src/types/index.ts

export type ServiceCategory = 'streamingService' | 'iptv' | 'Vpn' | 'aitool' | 'othertool';

export interface Service {
  id: number;
  name: string;
  category: ServiceCategory;
  imageUrl: string;
  features: string[]; // Replacing that old HTML string with a clean array
}