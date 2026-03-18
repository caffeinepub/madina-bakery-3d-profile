import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BakeryProfile {
    whatsappUrl: string;
    hours: string;
    featuredReview: Review;
    name: string;
    priceRange: string;
    address: string;
    category: string;
    rating: number;
    phone: string;
    reviewCount: bigint;
    facebookUrl: string;
}
export interface Review {
    reviewText: string;
    reviewerName: string;
}
export interface backendInterface {
    getProfile(): Promise<BakeryProfile>;
    getRelatedBusinesses(): Promise<Array<string>>;
}
