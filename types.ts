
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface PortfolioItem {
  title: string;
  type: 'video' | 'photo';
  imageUrl: string;
  category: string;
}
