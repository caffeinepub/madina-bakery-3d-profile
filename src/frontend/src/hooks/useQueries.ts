import { useQuery } from "@tanstack/react-query";
import type { BakeryProfile } from "../backend.d";
import { useActor } from "./useActor";

export function useGetProfile() {
  const { actor, isFetching } = useActor();
  return useQuery<BakeryProfile>({
    queryKey: ["profile"],
    queryFn: async () => {
      if (!actor) {
        return {
          name: "Madina Baker's & Sweets Jauharabad",
          address: "Sarwar Shaheed Chowk, Jauharabad, District Khushab",
          phone: "0300 6072702",
          hours: "Open daily, Closes 11 PM",
          priceRange: "Rs 1–500",
          rating: 4.0,
          reviewCount: BigInt(76),
          category: "Bakery & Sweets",
          facebookUrl: "https://www.facebook.com/madinabakery178",
          whatsappUrl: "https://wa.me/923006072702",
          featuredReview: {
            reviewerName: "Uzair Malik",
            reviewText:
              "Outstanding quality sweets and baked goods! The barfi here is absolutely divine — fresh, rich, and melts in your mouth. Best bakery in Jauharabad by far.",
          },
        };
      }
      return actor.getProfile();
    },
    enabled: !isFetching,
    staleTime: 1000 * 60 * 5,
  });
}

export function useGetRelatedBusinesses() {
  const { actor, isFetching } = useActor();
  return useQuery<string[]>({
    queryKey: ["relatedBusinesses"],
    queryFn: async () => {
      if (!actor) {
        return [
          "مدینہ بیکرز اینڈ سویٹس",
          "Madina Breakfast Hotel",
          "Madina Bakers & Sweets",
          "Bhatti Sweets and Bakers",
          "Al Rahat Bakery",
          "Jauharabad Sweets Corner",
        ];
      }
      return actor.getRelatedBusinesses();
    },
    enabled: !isFetching,
    staleTime: 1000 * 60 * 5,
  });
}
