// src/types/index.ts

export type ServiceCategory = 'streamingService' | 'iptv' | 'vpn' | 'aitool' | 'othertool'

export interface Service {
  id: number
  name: string
  category: ServiceCategory
  price?: string
  description?: string
  imageUrl?: string
  features?: string[]
}
