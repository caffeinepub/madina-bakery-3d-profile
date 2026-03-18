import Text "mo:core/Text";
import Order "mo:core/Order";

actor {
  type Review = {
    reviewerName : Text;
    reviewText : Text;
  };

  type BakeryProfile = {
    name : Text;
    address : Text;
    phone : Text;
    hours : Text;
    priceRange : Text;
    rating : Float;
    reviewCount : Nat;
    featuredReview : Review;
    facebookUrl : Text;
    whatsappUrl : Text;
    category : Text;
  };

  module BakeryProfile {
    public func compare(a : BakeryProfile, b : BakeryProfile) : Order.Order {
      Text.compare(a.name, b.name);
    };
  };

  let relatedBusinesses : [Text] = [
    "Paris Baguette",
    "La Boulangerie",
    "The Sweet Spot",
    "Bread & Butter",
  ];

  let bakeryProfile : BakeryProfile = {
    name = "Delicious Bakery";
    address = "123 Sweet St, Paris, France";
    phone = "+33 1 23 45 67 89";
    hours = "Mon-Sun: 8am-8pm";
    priceRange = "$$";
    rating = 4.8;
    reviewCount = 126;
    featuredReview = {
      reviewerName = "Jane Doe";
      reviewText = "The croissants are absolutely amazing! Will definitely come back.";
    };
    facebookUrl = "https://facebook.com/deliciousbakery";
    whatsappUrl = "https://wa.me/123456789";
    category = "Bakery";
  };

  public query ({ caller }) func getProfile() : async BakeryProfile {
    bakeryProfile;
  };

  public query ({ caller }) func getRelatedBusinesses() : async [Text] {
    relatedBusinesses;
  };
};
