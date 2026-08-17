// Reals Slider DTO
export interface RealsSliderItem {
  id: number;
  title: string;
  description: string;
  video_path: string;
  thumbnail_path: string;
  sort_order: number;
  status: number;
  created_at: string;
  updated_at: string;
}

export interface RealsSliderResponse {
  success: boolean;
  data: RealsSliderItem[];
  count: number;
}

// Package DTO
export interface Package {
  id: number;
  title: string;
  description: string;
  price: number;
  features: string[];
  recommended: boolean;
  status: boolean;
  note: string;
  button_label: string;
  currency: string;
}

export interface PackagesResponse {
  success: boolean;
  data: Package[];
  count: number;
  message: string;
}

// Feature DTO
export interface Feature {
  id: number;
  name: string;
  description: string;
  category: string;
  status: boolean;
  created_at: string;
  updated_at: string;
}

export interface FeaturesResponse {
  success: boolean;
  data: Feature[];
  count: number;
}

// Color DTO
export interface Color {
  id: number;
  name: string;
  hex_code: string;
  category: string;
  logo_path: string;
  status: boolean;
  created_at: string;
  updated_at: string;
}

// Stats DTO
export interface Stats {
  reals_slider: number;
  packages: number;
  features: number;
  colors: number;
  active_packages: number;
  active_features: number;
  active_colors: number;
  main_colors: number;
  categories: number;
}

export interface StatsResponse {
  success: boolean;
  data: Stats;
}

// Dashboard DTO
export interface DashboardData {
  stats: Stats;
  recent_reals: RealsSliderItem[];
  recent_packages: Package[];
  features_by_category: { category: string; count: number }[];
  colors_by_category: { category: string; count: number }[];
}

export interface DashboardResponse {
  success: boolean;
  data: DashboardData;
}

// Partner/Client DTO
export interface PartnerClient {
  id: number;
  name: string;
  logo: string;
  website: string;
  description: string;
  order: number;
  is_active: boolean;
}

export interface PartnersResponse {
  success: boolean;
  data: PartnerClient[];
  count: number;
  message: string;
}

// Logo Response
export interface LogoResponse {
  success: boolean;
  logo_url: string;
}
