/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  bullets: string[];
  roiMetric: string;
  roiLabel: string;
  details: string[];
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readingTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

export interface AssessmentQuestion {
  id: number;
  text: string;
  category: string;
  options: {
    text: string;
    score: number; // 0 to 5
    recommendation: string;
  }[];
}

export interface BookingSubmission {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  serviceInterest: string;
  preferredDate: string;
  preferredTime: string;
  riskScore?: number;
  message?: string;
}
