import type {
  RealsSliderResponse,
  PackagesResponse,
  FeaturesResponse,
  StatsResponse,
  PartnersResponse,
  LogoResponse,
} from "../DTO/ApiDTO";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://your-domain.com";

// Generic fetch function with error handling
async function fetchAPI<T>(endpoint: string): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  console.log(`Fetching: ${url}`);
  try {
    const response = await fetch(url);
    console.log(`Response status: ${response.status}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(`Response data:`, data);
    return data as T;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
}

// Reals Slider API
export const getRealsSlider = async (): Promise<RealsSliderResponse> => {
  return fetchAPI<RealsSliderResponse>("/api/reals-slider");
};

export const getPublicRealsSlider = async (): Promise<RealsSliderResponse> => {
  return fetchAPI<RealsSliderResponse>("/public/reals-slider");
};

// Packages API
export const getPackages = async (): Promise<PackagesResponse> => {
  return fetchAPI<PackagesResponse>("/api/packages");
};

// Features API
export const getFeatures = async (category?: string): Promise<FeaturesResponse> => {
  const endpoint = category ? `/api/features/${category}` : "/api/features";
  return fetchAPI<FeaturesResponse>(endpoint);
};

// Colors API
export const getColors = async () => {
  return fetchAPI("/api/colors");
};

export const getMainColors = async () => {
  return fetchAPI("/api/main-colors");
};

// Stats API
export const getStats = async (): Promise<StatsResponse> => {
  return fetchAPI<StatsResponse>("/api/stats");
};

// Dashboard API


// Partners & Clients API
export const getSparePartsPartners = async (): Promise<PartnersResponse> => {
  return fetchAPI<PartnersResponse>("/api/v1/spare-parts-partners");
};

export const getOurClients = async (): Promise<PartnersResponse> => {
  return fetchAPI<PartnersResponse>("/api/v1/our-clients");
};

// Logo API
export const getLogo = async (): Promise<LogoResponse> => {
  return fetchAPI<LogoResponse>("/logo");
};

// Submission API
export const submitForm = async (formData: {
  username: string;
  email: string;
  PhoneNumber: string;
  CompanyName: string;
  message: string;
  selectedPackage: string;
}): Promise<{ success: boolean; message: string }> => {
  const SUBMISSION_API_URL = "https://carserv.pro/api/submission.php";
  
  try {
    const response = await fetch(SUBMISSION_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};
