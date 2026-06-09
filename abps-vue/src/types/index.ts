// src/types/index.ts

export type ServiceCategory = 'streaming' | 'iptv' | 'vpn' | 'ai' | 'other';

export interface Service {
  id: number;
  name: string;
  category: ServiceCategory;
  imageUrl: string;
  features: string[]; // Replacing that old HTML string with a clean array
}