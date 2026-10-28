
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // Reset the bag and wishlist on each fresh page load, as configured.
  localStorage.removeItem("houseOfChanduCart");
  localStorage.removeItem("houseOfChanduWishlist");

  /* =========================================
     HOUSE OF CHANDU SETTINGS
  ========================================= */

  const WHATSAPP_NUMBER = "919515069605";
  const CART_STORAGE_KEY = "houseOfChanduCart";
  const WISHLIST_STORAGE_KEY = "houseOfChanduWishlist";

  const isAllProductsPage =
    window.location.pathname.endsWith("/all-products.html");

  /* =========================================
     PRODUCT CATALOGUE
  ========================================= */

  const products = [
    {
      id: "eth-001",
      name: "Chanderi Cotton Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1499,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: ["L", "XL", "2XL"],
      images: [
        "images/anarkali-white-pink-01.jpeg",
        "images/anarkali-white-pink-02.jpeg"
      ],
      description: "An occasion-ready ethnic style with an elegant silhouette. Replace this sample description with the exact fabric, fit and care details for your product.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Embroidered",
        Color: "Pink",
        Occasion: "Festive"
      }
    },
    {
      id: "eth-002",
      name: "Chanderi Cotton Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1499,
      oldPrice: 1499,
      badge: "NEW",
      sizes: ["M", "XL"],
      available: ["M", "L", "XL"],
      images: ["images/Blackdress.png"],
      description: "A graceful festive look. Update with the product's verified materials and details.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "V-Neck",
        Sleeve: "Add sleeve type",
        Pattern: "Embroidered",
        Color: "Black",
        Occasion: "Festive"
      }
    },
    {
      id: "eth-003",
      name: "Anarkali dress-3",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 2299,
      oldPrice: 6499,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: ["images/Red Maroon-1.jpeg"],
      description: "A bright festive look for celebrations. Replace this placeholder description with accurate product information.",
      specs: {
        Fabric: "Chanderi",
        Neckline: "Round type",
        Sleeve: "3/4",
        Pattern: "Embroidery",
        Color: "Dark Pink",
        Occasion: "Festive wear & party wear"
      }
    },
    {
      id: "eth-004",
      name: "Anarkali Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1799,
      oldPrice: 2499,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL"],
      available: ["M", "L", "XL"],
      images: [
        "images/Brown-1.jpeg",
        "images/Brown-2.jpeg"
      ],
      description: "A statement ethnic silhouette for special occasions. Confirm colour, fabric and set contents before publishing.",
      specs: {
        Fabric: "Chanderi",
        Neckline: "Round neck",
        Sleeve: "3/4",
        Pattern: "Embroidered",
        Color: "Brown",
        Occasion: "Festive & party wear"
      }
    },
    {
      id: "eth-005",
      name: "Silk Chanderi Embroidered Anarkali Dress",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1999,
      badge: "NEW",
      sizes: ["M","2XL"],
      available: ["M","2XL"],
      images: [
        "images/H-1.jpeg",
        "images/H-2.jpeg",
      ],
      description: "Elegant 3-piece kurta set with embroidered Chanderi cotton, perfect for festive occasions.”“Elegant 3-piece kurta set with embroidered Chanderi cotton, perfect for festive occasions.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "V-neck",
        Sleeve: "3/4",
        Pattern: "Embroidered",
        Color: "Yellow",
        Occasion: "Festive wear & party wear"
      }
    },
    {
      id: "eth-006",
      name: "Peacock Green Chanderi Embroidered Anarkali Suit Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1999,
      badge: "NEW",
      sizes: ["M","L", "XL",],
      available: ["M","L", "XL", ],
      images: [
        "images/G-1.png",
        "images/G-2.png",
      ],
      description: "Elegant embroidered Chanderi cotton kurta set, perfect for festive and party wear",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "V-Neck",
        Sleeve: "3/4",
        Pattern: "Embroidered",
        Color: "Peacock Green",
        Occasion: "Festive party wear Traditional Wear"
      }
    },
    {
      id: "eth-007",
      name: "Green Chanderi Embroidered Anarkali Suit Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1999,
      badge: "NEW",
      sizes: ["M","L"],
      available: ["M","L"],
      images: [
        "images/D-1.png",
        "images/D-2.png",
        "images/D-3.png",
      ],
      description: "Elegant olive green Anarkali suit with beautiful pink floral detailing, perfect for festive occasions and special celebrations..",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "V-Neck",
        Sleeve: "3/4 type",
        Pattern: "Embroidered",
        Color: "Green",
        Occasion: "Festive,partywear,traditional wear"
      }
    },
    {
      id: "eth-008",
      name: "Chanderi Cotton Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1499,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: ["L", "XL", "2XL"],
      images: [
        "images/anarkali-white-pink-01.jpeg",
        "images/anarkali-white-pink-02.jpeg"
      ],
      description: "An occasion-ready ethnic style with an elegant silhouette. Replace this sample description with the exact fabric, fit and care details for your product.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Embroidered",
        Color: "Pink",
        Occasion: "Festive"
      }
    },
    {
      id: "eth-009",
      name: "Chanderi Cotton Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1499,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: ["L", "XL", "2XL"],
      images: [
        "images/anarkali-white-pink-01.jpeg",
        "images/anarkali-white-pink-02.jpeg"
      ],
      description: "An occasion-ready ethnic style with an elegant silhouette. Replace this sample description with the exact fabric, fit and care details for your product.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Embroidered",
        Color: "Pink",
        Occasion: "Festive"
      }
    },
    {
      id: "eth-010",
      name: "Chanderi Cotton Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1499,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: ["L", "XL", "2XL"],
      images: [
        "images/anarkali-white-pink-01.jpeg",
        "images/anarkali-white-pink-02.jpeg"
      ],
      description: "An occasion-ready ethnic style with an elegant silhouette. Replace this sample description with the exact fabric, fit and care details for your product.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Embroidered",
        Color: "Pink",
        Occasion: "Festive"
      }
    },
    {
      id: "eth-011",
      name: "Chanderi Cotton Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1499,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: ["L", "XL", "2XL"],
      images: [
        "images/anarkali-white-pink-01.jpeg",
        "images/anarkali-white-pink-02.jpeg"
      ],
      description: "An occasion-ready ethnic style with an elegant silhouette. Replace this sample description with the exact fabric, fit and care details for your product.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Embroidered",
        Color: "Pink",
        Occasion: "Festive"
      }
    },
    {
      id: "eth-012",
      name: "Chanderi Cotton Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1499,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: ["L", "XL", "2XL"],
      images: [
        "images/anarkali-white-pink-01.jpeg",
        "images/anarkali-white-pink-02.jpeg"
      ],
      description: "An occasion-ready ethnic style with an elegant silhouette. Replace this sample description with the exact fabric, fit and care details for your product.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Embroidered",
        Color: "Pink",
        Occasion: "Festive"
      }
    },
    {
      id: "eth-013",
      name: "Chanderi Cotton Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1499,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: ["L", "XL", "2XL"],
      images: [
        "images/anarkali-white-pink-01.jpeg",
        "images/anarkali-white-pink-02.jpeg"
      ],
      description: "An occasion-ready ethnic style with an elegant silhouette. Replace this sample description with the exact fabric, fit and care details for your product.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Embroidered",
        Color: "Pink",
        Occasion: "Festive"
      }
    },
    {
      id: "eth-014",
      name: "Chanderi Cotton Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1499,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: ["L", "XL", "2XL"],
      images: [
        "images/anarkali-white-pink-01.jpeg",
        "images/anarkali-white-pink-02.jpeg"
      ],
      description: "An occasion-ready ethnic style with an elegant silhouette. Replace this sample description with the exact fabric, fit and care details for your product.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Embroidered",
        Color: "Pink",
        Occasion: "Festive"
      }
    },
    {
      id: "eth-015",
      name: "Chanderi Cotton Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1499,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: ["L", "XL", "2XL"],
      images: [
        "images/anarkali-white-pink-01.jpeg",
        "images/anarkali-white-pink-02.jpeg"
      ],
      description: "An occasion-ready ethnic style with an elegant silhouette. Replace this sample description with the exact fabric, fit and care details for your product.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Embroidered",
        Color: "Pink",
        Occasion: "Festive"
      }
    },
    {
      id: "eth-016",
      name: "Chanderi Cotton Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1499,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: ["L", "XL", "2XL"],
      images: [
        "images/anarkali-white-pink-01.jpeg",
        "images/anarkali-white-pink-02.jpeg"
      ],
      description: "An occasion-ready ethnic style with an elegant silhouette. Replace this sample description with the exact fabric, fit and care details for your product.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Embroidered",
        Color: "Pink",
        Occasion: "Festive"
      }
    },
    {
      id: "eth-017",
      name: "Chanderi Cotton Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1499,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: ["L", "XL", "2XL"],
      images: [
        "images/anarkali-white-pink-01.jpeg",
        "images/anarkali-white-pink-02.jpeg"
      ],
      description: "An occasion-ready ethnic style with an elegant silhouette. Replace this sample description with the exact fabric, fit and care details for your product.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Embroidered",
        Color: "Pink",
        Occasion: "Festive"
      }
    },
    {
      id: "eth-018",
      name: "Chanderi Cotton Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1499,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: ["L", "XL", "2XL"],
      images: [
        "images/anarkali-white-pink-01.jpeg",
        "images/anarkali-white-pink-02.jpeg"
      ],
      description: "An occasion-ready ethnic style with an elegant silhouette. Replace this sample description with the exact fabric, fit and care details for your product.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Embroidered",
        Color: "Pink",
        Occasion: "Festive"
      }
    },
    {
      id: "eth-019",
      name: "Chanderi Cotton Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1499,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: ["L", "XL", "2XL"],
      images: [
        "images/anarkali-white-pink-01.jpeg",
        "images/anarkali-white-pink-02.jpeg"
      ],
      description: "An occasion-ready ethnic style with an elegant silhouette. Replace this sample description with the exact fabric, fit and care details for your product.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Embroidered",
        Color: "Pink",
        Occasion: "Festive"
      }
    },
    {
      id: "eth-020",
      name: "Chanderi Cotton Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1499,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: ["L", "XL", "2XL"],
      images: [
        "images/anarkali-white-pink-01.jpeg",
        "images/anarkali-white-pink-02.jpeg"
      ],
      description: "An occasion-ready ethnic style with an elegant silhouette. Replace this sample description with the exact fabric, fit and care details for your product.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Embroidered",
        Color: "Pink",
        Occasion: "Festive"
      }
    },
    {
      id: "eth-021",
      name: "Chanderi Cotton Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1499,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: ["L", "XL", "2XL"],
      images: [
        "images/anarkali-white-pink-01.jpeg",
        "images/anarkali-white-pink-02.jpeg"
      ],
      description: "An occasion-ready ethnic style with an elegant silhouette. Replace this sample description with the exact fabric, fit and care details for your product.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Embroidered",
        Color: "Pink",
        Occasion: "Festive"
      }
    },
    {
      id: "eth-022",
      name: "Chanderi Cotton Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1499,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: ["L", "XL", "2XL"],
      images: [
        "images/anarkali-white-pink-01.jpeg",
        "images/anarkali-white-pink-02.jpeg"
      ],
      description: "An occasion-ready ethnic style with an elegant silhouette. Replace this sample description with the exact fabric, fit and care details for your product.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Embroidered",
        Color: "Pink",
        Occasion: "Festive"
      }
    },
    {
      id: "eth-023",
      name: "Chanderi Cotton Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1499,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: ["L", "XL", "2XL"],
      images: [
        "images/anarkali-white-pink-01.jpeg",
        "images/anarkali-white-pink-02.jpeg"
      ],
      description: "An occasion-ready ethnic style with an elegant silhouette. Replace this sample description with the exact fabric, fit and care details for your product.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Embroidered",
        Color: "Pink",
        Occasion: "Festive"
      }
    },
    {
      id: "eth-024",
      name: "Chanderi Cotton Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1499,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: ["L", "XL", "2XL"],
      images: [
        "images/anarkali-white-pink-01.jpeg",
        "images/anarkali-white-pink-02.jpeg"
      ],
      description: "An occasion-ready ethnic style with an elegant silhouette. Replace this sample description with the exact fabric, fit and care details for your product.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Embroidered",
        Color: "Pink",
        Occasion: "Festive"
      }
    },
    {
      id: "eth-025",
      name: "Chanderi Cotton Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Ethnic Wear",
      price: 1499,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: ["L", "XL", "2XL"],
      images: [
        "images/anarkali-white-pink-01.jpeg",
        "images/anarkali-white-pink-02.jpeg"
      ],
      description: "An occasion-ready ethnic style with an elegant silhouette. Replace this sample description with the exact fabric, fit and care details for your product.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Embroidered",
        Color: "Pink",
        Occasion: "Festive"
      }
    },

    {
      id: "west-001",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg",
      ],
      description:"Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },
    {
      id: "west-002",
      name: "Cord SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice:1999,
      badge: "NEW",
      sizes: [ "M", "L", "XL", "2XL"],
      available: [ "M", "L", "XL","2XL"],
      images:[
        "images/B-1.png",
        "images/B-2.png",
        "images/B-3.png"
      ],
        
      description: "Co-ord Set Cost: ₹999 Brand: House of Chandu Style Code: Women Co-ord Set,Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Floral Print",
        Color: "Black",
        Occasion: "Everyday"
      }
    },
    {
      id: "west-003",
      name: "Women Co-ord Set",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL",],
      available: ["M", "L", "XL"],
      images: [
        "images/F-1.png",
        "images/F-2.png",
        "images/F-3.png",
        "images/F-5.png",
        "images/F-4.png",
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Floral print",
        Color: "Lavender",
        Occasion: "Casual & Every Daywear"
      }
    },
    {
      id: "west-004",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg"
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "Add sleeve type",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },
    {
      id: "west-005",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg"
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "Add sleeve type",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },
    {
      id: "west-006",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg"
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "Add sleeve type",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },
    {
      id: "west-007",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg"
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "Add sleeve type",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },
    {
      id: "west-008",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg"
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "Add sleeve type",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },
    {
      id: "west-009",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg"
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "Add sleeve type",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },
    {
      id: "west-010",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg"
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "Add sleeve type",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },
    {
      id: "west-011",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg"
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "Add sleeve type",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },
    {
      id: "west-012",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg"
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "Add sleeve type",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },
    {
      id: "west-013",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg"
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "Add sleeve type",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },
    {
      id: "west-014",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg"
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "Add sleeve type",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },
    {
      id: "west-015",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg"
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "Add sleeve type",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },
    {
      id: "west-016",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg"
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "Add sleeve type",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },
    {
      id: "west-017",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg"
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "Add sleeve type",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },
    {
      id: "west-018",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg"
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "Add sleeve type",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },
    {
      id: "west-019",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg"
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "Add sleeve type",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },
    {
      id: "west-020",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg"
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "Add sleeve type",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },
    {
      id: "west-021",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg"
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "Add sleeve type",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },
    {
      id: "west-022",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg"
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "Add sleeve type",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },
    {
      id: "west-023",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: null,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/White cord set-1.jpeg",
        "images/White cord set-2.jpeg",
        "images/look-3.jpeg",
        "images/Look-4.jpeg"
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "Add sleeve type",
        Pattern: "Floral print",
        Color: "White",
        Occasion: "Casual"
      }
    },

    {
      id: "occ-001",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },
    {
      id: "occ-002",
      name: "Elegant Evening Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3799,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A dressy evening-style placeholder. Replace with accurate product details before launch.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Add fit",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Evening"
      }
    },
    {
      id: "occ-003",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },
    {
      id: "occ-004",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },
    {
      id: "occ-005",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },
    {
      id: "occ-006",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },
    {
      id: "occ-007",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },
    {
      id: "occ-008",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },
    {
      id: "occ-009",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },
    {
      id: "occ-010",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },
    {
      id: "occ-011",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },
    {
      id: "occ-012",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },
    {
      id: "occ-013",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },
    {
      id: "occ-014",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },
    {
      id: "occ-015",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },
    {
      id: "occ-016",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },
    {
      id: "occ-017",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },
    {
      id: "occ-018",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },
    {
      id: "occ-019",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },
    {
      id: "occ-020",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },
    {
      id: "occ-021",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },
    {
      id: "occ-022",
      name: "Red Occasion Dress",
      brand: "HOUSE OF CHANDU",
      category: "Occasion Wear",
      price: 3299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An occasion-wear placeholder. Update with the correct fabric, lining, fit and garment measurements.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Red (verify)",
        Occasion: "Party"
      }
    },

    {
      id: "day-001",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-002",
      name: "Classic Casual Look",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1399,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A casual-wear placeholder. Update this description with actual product information.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Add fit",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-003",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-004",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },

    {
      id: "day-005",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-006",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-007",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-008",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-009",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },

    {
      id: "day-010",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-011",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-012",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-013",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-014",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-015",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-016",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-017",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-018",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-019",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-020",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-021",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-022",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-023",
      name: "Relaxed Everyday Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1599,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A relaxed daily-wear placeholder. Replace with accurate fabric, fit and wash-care details.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Relaxed (verify)",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Everyday"
      }
    },

    {
      id: "cel-001",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-002",
      name: "Festive Statement Outfit",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 3899,
      oldPrice: null,
      badge: "",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      available: ["S", "M", "L", "XL", "2XL"],
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A festive-style placeholder. Replace all details with your actual inventory data.",
      specs: {
        Fabric: "Add actual fabric",
        Fit: "Add fit",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Verify colour",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-003",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-004",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-005",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-006",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-007",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-008",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-009",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-010",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-011",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-012",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-013",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-014",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-015",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-016",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-017",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-018",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-019",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-020",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-021",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
       "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },
    {
      id: "cel-022",
      name: "Celebration Blue Ensemble",
      brand: "HOUSE OF CHANDU",
      category: "Celebration Wear",
      price: 4299,
      oldPrice: null,
      badge: "NEW",
      sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      available: ["XS", "S", "M", "L", "XL"],
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A celebration-style placeholder. Confirm product composition and specifications before use.",
      specs: {
        Fabric: "Add actual fabric",
        Neckline: "Add neckline",
        Sleeve: "Add sleeve type",
        Pattern: "Verify pattern",
        Color: "Blue (verify)",
        Occasion: "Celebration"
      }
    },

  ];

  /* =========================================
     HTML ELEMENTS
  ========================================= */

  const $ = id => document.getElementById(id);

  const productGrid = $("productGrid");
  const listingTitle = $("listingTitle");
  const productCount = $("productCount");
  const categoryTabs = $("categoryTabs");
  const detailSection = $("productDetailSection");
  const detailContainer = $("productDetail");
  const shopSection = $("shop");

  const cartDrawer = $("cartDrawer");
  const drawerBackdrop = $("drawerBackdrop");
  const cartItemsElement = $("cartItems");
  const cartCountElement = $("cartCount");
  const drawerCount = $("drawerCount");
  const cartSubtotal = $("cartSubtotal");
  const toast = $("toast");

  const checkoutButton = $("checkoutButton");
  const customerOrderForm = $("customerOrderForm");

  let activeCategory = "Ethnic Wear";
  let showAllForCategory = false;
  let currentProduct = null;
  let selectedSize = "";
  let selectedImage = "";
  let cart = [];

  /* =========================================
     UTILITIES AND STORAGE
  ========================================= */

  const money = amount => new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function notify(message) {
    if (!toast) {
      console.info(message);
      return;
    }

    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(notify.timer);

    notify.timer = setTimeout(() => {
      toast.classList.remove("show");
    }, 3200);
  }

  function bind(id, eventName, handler) {
    const element = $(id);
    if (element) element.addEventListener(eventName, handler);
  }

  function getProduct(productId) {
    return products.find(product => product.id === productId);
  }

  function loadCart() {
    try {
      const stored = JSON.parse(
        localStorage.getItem(CART_STORAGE_KEY) || "[]"
      );

      if (!Array.isArray(stored)) return [];

      return stored.filter(item =>
        item &&
        products.some(product => product.id === item.id) &&
        typeof item.size === "string" &&
        Number(item.quantity) > 0
      ).map(item => ({
        id: item.id,
        size: item.size,
        quantity: Math.max(1, Math.floor(Number(item.quantity)))
      }));
    } catch (error) {
      console.error("Could not load shopping bag:", error);
      return [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error("Could not save shopping bag:", error);
      notify("Could not save your bag in this browser.");
    }
  }

  cart = loadCart();

  /* =========================================
     FUNCTIONAL WISHLIST
  ========================================= */

  function loadWishlist() {
    try {
      const saved = JSON.parse(
        localStorage.getItem(WISHLIST_STORAGE_KEY) || "[]"
      );

      if (!Array.isArray(saved)) return [];

      return [...new Set(saved.filter(id =>
        typeof id === "string" &&
        products.some(product => product.id === id)
      ))];
    } catch (error) {
      console.error("Could not load wishlist:", error);
      return [];
    }
  }

  let wishlist = loadWishlist();

  function saveWishlist() {
    try {
      localStorage.setItem(
        WISHLIST_STORAGE_KEY,
        JSON.stringify(wishlist)
      );
    } catch (error) {
      console.error("Could not save wishlist:", error);
      notify("Could not save your wishlist in this browser.");
    }
  }

  function isWishlisted(productId) {
    return wishlist.includes(productId);
  }

  function toggleWishlist(productId) {
    const product = getProduct(productId);
    if (!product) return;

    if (isWishlisted(productId)) {
      wishlist = wishlist.filter(id => id !== productId);
      notify(`${product.name} removed from your wishlist.`);
    } else {
      wishlist.push(productId);
      notify(`${product.name} added to your wishlist.`);
    }

    saveWishlist();
    updateWishlistButtons();
    renderWishlist();
  }

  function updateWishlistButtons() {
    document.querySelectorAll("[data-wishlist]").forEach(button => {
      const selected = isWishlisted(button.dataset.wishlist);
      const product = getProduct(button.dataset.wishlist);

      button.textContent = selected ? "♥" : "♡";
      button.classList.toggle("selected", selected);
      button.setAttribute("aria-pressed", String(selected));
      button.setAttribute(
        "aria-label",
        `${selected ? "Remove from" : "Add to"} wishlist: ${
          product?.name || "product"
        }`
      );
    });

    const count = $("wishlistCount");
    if (count) count.textContent = wishlist.length;

    const detailButton = $("detailWishlist");

    if (detailButton && currentProduct) {
      const selected = isWishlisted(currentProduct.id);

      detailButton.textContent = selected ? "♥" : "♡";
      detailButton.classList.toggle("selected", selected);
      detailButton.setAttribute("aria-pressed", String(selected));
      detailButton.setAttribute(
        "aria-label",
        `${selected ? "Remove from" : "Add to"} wishlist: ${
          currentProduct.name
        }`
      );
    }
  }

  function renderWishlist() {
    const list = $("wishlistItems");
    const empty = $("wishlistEmpty");

    if (!list || !empty) return;

    const savedProducts = wishlist
      .map(id => getProduct(id))
      .filter(Boolean);

    empty.hidden = savedProducts.length > 0;

    list.innerHTML = savedProducts.map(product => {
      const image = Array.isArray(product.images)
        ? product.images.find(item => typeof item === "string" && item.trim())
        : "";

      return `
        <article class="wishlist-item">
          <button
            class="wishlist-product-open"
            type="button"
            data-wishlist-open="${escapeHTML(product.id)}"
            aria-label="View ${escapeHTML(product.name)}"
          >
            ${image
              ? `<img src="${escapeHTML(image)}" alt="${escapeHTML(product.name)}" loading="lazy">`
              : `<span class="wishlist-image-placeholder">Image coming soon</span>`
            }
          </button>

          <div class="wishlist-item-info">
            <h3>${escapeHTML(product.name)}</h3>
            <p>${money(product.price)}</p>

            <button
              class="wishlist-view-button"
              type="button"
              data-wishlist-open="${escapeHTML(product.id)}"
            >View product ↗</button>

            <button
              class="wishlist-remove-button"
              type="button"
              data-wishlist-remove="${escapeHTML(product.id)}"
            >Remove ♥</button>
          </div>
        </article>
      `;
    }).join("");
  }

  function openWishlist() {
    const panel = $("wishlistPanel");

    if (!panel) {
      notify("The wishlist panel HTML is missing from this page.");
      return;
    }

    closeCart();
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    document.body.classList.add("wishlist-open");
    renderWishlist();
  }

  function closeWishlist() {
    const panel = $("wishlistPanel");

    if (panel) {
      panel.classList.remove("open");
      panel.setAttribute("aria-hidden", "true");
    }

    document.body.classList.remove("wishlist-open");
  }

  /* =========================================
     COLLECTION FILTERING AND PRODUCT CARDS
  ========================================= */

  const categoryNames = {
    "Ethnic": "Ethnic Wear",
    "Ethnic Wear": "Ethnic Wear",
    "Western": "Western Wear",
    "Western Wear": "Western Wear",
    "Occasion": "Occasion Wear",
    "Occasion Wear": "Occasion Wear",
    "Everyday": "Everyday Wear",
    "Everyday Wear": "Everyday Wear",
    "Celebration": "Celebration Wear",
    "Celebration Wear": "Celebration Wear",
    "All": "All"
  };

  function renderProductCard(product) {
    const firstImage = Array.isArray(product.images)
      ? product.images.find(image =>
          typeof image === "string" && image.trim()
        )
      : "";

    const sizes = Array.isArray(product.sizes) ? product.sizes : [];
    const selected = isWishlisted(product.id);

    return `
      <article
        class="product-card"
        data-product-id="${escapeHTML(product.id)}"
        tabindex="0"
        role="button"
        aria-label="View ${escapeHTML(product.name)}"
      >
        <div class="product-image-wrap">
          ${product.badge
            ? `<span class="product-badge">${escapeHTML(product.badge)}</span>`
            : ""
          }

          <button
            class="product-heart ${selected ? "selected" : ""}"
            type="button"
            data-wishlist="${escapeHTML(product.id)}"
            aria-label="Add to wishlist: ${escapeHTML(product.name)}"
            aria-pressed="${selected}"
          >${selected ? "♥" : "♡"}</button>

          ${firstImage
            ? `<img class="product-image" src="${escapeHTML(firstImage)}" alt="${escapeHTML(product.name)}" loading="lazy">`
            : `<div class="product-image product-image-placeholder" role="img" aria-label="Image coming soon"></div>`
          }
        </div>

        <div class="product-info">
          <h3 class="product-name">${escapeHTML(product.name)}</h3>
          <p class="product-brand">${escapeHTML(product.brand || "HOUSE OF CHANDU")}</p>

          <p class="product-price">
            ${money(product.price)}
            ${product.oldPrice
              ? `<span class="old-price">${money(product.oldPrice)}</span>`
              : ""
            }
          </p>

          <div class="product-sizes" aria-label="Product sizes">
            ${sizes.map(size => `
              <span class="product-size ${
                product.available && product.available.includes(size)
                  ? ""
                  : "unavailable"
              }">${escapeHTML(size)}</span>
            `).join("")}
          </div>
        </div>
      </article>
    `;
  }

  function setCategory(category, scroll = true) {
    const normalizedCategory = categoryNames[category] || category;
    activeCategory = normalizedCategory;

    const filteredProducts = normalizedCategory === "All"
      ? products
      : products.filter(product => product.category === normalizedCategory);

    if (categoryTabs) {
      categoryTabs.querySelectorAll("[data-category]").forEach(button => {
        const buttonCategory =
          categoryNames[button.dataset.category] || button.dataset.category;

        button.classList.toggle(
          "active",
          buttonCategory === normalizedCategory
        );

        button.setAttribute(
          "aria-pressed",
          String(buttonCategory === normalizedCategory)
        );
      });
    }

    if (listingTitle) {
      listingTitle.textContent = normalizedCategory === "All"
        ? "Shop All Pieces"
        : normalizedCategory;
    }

    if (productCount) {
      productCount.textContent = `${filteredProducts.length} styles`;
    }

    if (productGrid) {
      if (normalizedCategory === "All") {
        productGrid.innerHTML = `
          <div class="category-empty-state">
            <h3>Find your style.</h3>
            <p>Select Ethnic, Western, Occasion, Everyday or Celebration to explore the collection.</p>
          </div>
        `;
      } else {
        const visibleProducts = showAllForCategory
          ? filteredProducts
          : filteredProducts.slice(0, 4);

        productGrid.innerHTML = visibleProducts
          .map(renderProductCard)
          .join("");
      }
    }

    const exploreWrap = $("exploreMoreWrap");

    if (exploreWrap) {
      exploreWrap.hidden =
        normalizedCategory === "All" ||
        showAllForCategory ||
        filteredProducts.length <= 4;
    }

    updateWishlistButtons();

    if (scroll && shopSection) {
      shopSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }

      const exploreMoreButton = document.getElementById("exploreMoreButton");

    if (exploreMoreButton) {
      exploreMoreButton.addEventListener("click", () => {
        showAllForCategory = true;
        setCategory(activeCategory, false);
      });
    }

  /* =========================================
     PRODUCT DETAILS
  ========================================= */

  function openProduct(productId) {
    currentProduct = getProduct(productId);

    if (!currentProduct || !detailSection || !detailContainer) return;

    selectedSize = "";
    selectedImage = Array.isArray(currentProduct.images)
      ? currentProduct.images.find(image =>
          typeof image === "string" && image.trim()
        ) || ""
      : "";

    renderProductDetail();
    detailSection.hidden = false;

    detailSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  function renderProductDetail() {
    const product = currentProduct;
    if (!product || !detailContainer) return;

    const images = Array.isArray(product.images)
      ? product.images.filter(image =>
          typeof image === "string" && image.trim()
        )
      : [];

    if (!selectedImage && images.length) {
      selectedImage = images[0];
    }

    detailContainer.innerHTML = `
      <div class="detail-gallery">
        <div class="detail-thumbnails">
          ${images.map((image, index) => `
            <button
              class="detail-thumb ${image === selectedImage ? "active" : ""}"
              data-image="${escapeHTML(image)}"
              aria-label="View image ${index + 1}"
              type="button"
            >
              <img
                src="${escapeHTML(image)}"
                alt="${escapeHTML(product.name)} view ${index + 1}"
                loading="lazy"
              >
            </button>
          `).join("")}
        </div>

        <div class="detail-main-image">
          ${selectedImage
            ? `<img src="${escapeHTML(selectedImage)}" alt="${escapeHTML(product.name)}">`
            : `<div class="detail-image-placeholder">Product image coming soon</div>`
          }
        </div>
      </div>

      <div class="detail-info">
        <p class="detail-brand">${escapeHTML(product.brand)}</p>
        <h2 class="detail-title">${escapeHTML(product.name)}</h2>

        <p class="detail-price">
          ${money(product.price)}
          ${product.oldPrice
            ? `<span class="old-price">${money(product.oldPrice)}</span>`
            : ""
          }
        </p>

        <p class="tax-note">Inclusive of all taxes · Demo price</p>
        <hr class="detail-rule">

        <div class="field-label">
          <span>Size</span>
        </div>

        <div class="size-options">
          ${(product.sizes || []).map(size => `
            <button
              class="size-option ${selectedSize === size ? "selected" : ""}"
              data-size="${escapeHTML(size)}"
              ${product.available && product.available.includes(size) ? "" : "disabled"}
              type="button"
            >${escapeHTML(size)}</button>
          `).join("")}
        </div>

        <p class="detail-error" id="sizeError" aria-live="polite"></p>

        <div class="detail-actions">
          <button
            class="wishlist-detail"
            id="detailWishlist"
            aria-label="Add to wishlist: ${escapeHTML(product.name)}"
            aria-pressed="false"
            type="button"
          >♡</button>

          <button class="button add-cart" id="addToCart" type="button">
            ADD TO CART
          </button>
        </div>

        <div class="shipping-note">
          <span>Shipping details to be confirmed</span>
          <span>Contact us for availability</span>
        </div>

        <h3 class="specifications-title">PRODUCT HIGHLIGHTS</h3>

        <div class="spec-grid">
          ${Object.entries(product.specs || {}).map(([key, value]) => `
            <div class="spec-item">
              <span>${escapeHTML(key)}</span>
              <strong>${escapeHTML(String(value))}</strong>
            </div>
          `).join("")}
        </div>

        <div class="product-description">
          <h3>Product Description</h3>
          <p>${escapeHTML(product.description || "Product description coming soon.")}</p>
        </div>
      </div>
    `;

    detailContainer.querySelectorAll("[data-image]").forEach(button => {
      button.addEventListener("click", () => {
        selectedImage = button.dataset.image;
        renderProductDetail();
      });
    });

    detailContainer.querySelectorAll("[data-size]").forEach(button => {
      button.addEventListener("click", () => {
        selectedSize = button.dataset.size;

        detailContainer.querySelectorAll("[data-size]").forEach(sizeButton => {
          sizeButton.classList.toggle(
            "selected",
            sizeButton === button
          );
        });

        const error = $("sizeError");
        if (error) error.textContent = "";
      });
    });

    bind("detailWishlist", "click", () => {
      toggleWishlist(product.id);
    });

    updateWishlistButtons();

    bind("addToCart", "click", () => {
      if (!selectedSize) {
        const error = $("sizeError");
        if (error) error.textContent = "Please select a size first.";
        return;
      }

      addToCart(product.id, selectedSize);
    });
  }

  /* =========================================
     ADD PRODUCT TO BAG
  ========================================= */

  function addToCart(productId, size) {
    const product = getProduct(productId);
    if (!product) return;

    const existingItem = cart.find(item =>
      item.id === productId && item.size === size
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: productId,
        size,
        quantity: 1
      });
    }

    saveCart();
    renderCart();
    openCart();

    notify(`${product.name} (${size}) added to your bag.`);
  }

  /* =========================================
     RENDER SHOPPING BAG
  ========================================= */

  function renderCart() {
    if (
      !cartItemsElement ||
      !cartCountElement ||
      !drawerCount ||
      !cartSubtotal
    ) return;

    cart = cart.filter(item => getProduct(item.id));
    saveCart();

    const totalQuantity = cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    const subtotal = cart.reduce((sum, item) => {
      const product = getProduct(item.id);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);

    cartCountElement.textContent = totalQuantity;
    drawerCount.textContent = `(${totalQuantity})`;
    cartSubtotal.textContent = money(subtotal);

    if (!cart.length) {
      cartItemsElement.innerHTML = `
        <p class="empty-cart">
          Your bag is empty.<br>
          Explore the collections to find your favourites.
        </p>
      `;

      if (customerOrderForm) customerOrderForm.hidden = true;
      if (checkoutButton) checkoutButton.hidden = false;
      return;
    }

    cartItemsElement.innerHTML = cart.map(item => {
      const product = getProduct(item.id);
      const image = Array.isArray(product.images)
        ? product.images.find(value =>
            typeof value === "string" && value.trim()
          )
        : "";

      return `
        <div class="cart-line">
          ${image
            ? `<img src="${escapeHTML(image)}" alt="${escapeHTML(product.name)}">`
            : `<div class="cart-image-placeholder"></div>`
          }

          <div>
            <h3>${escapeHTML(product.name)}</h3>
            <p>Size: ${escapeHTML(item.size)}</p>
            <p>Price: ${money(product.price)}</p>
            <p>Item total: ${money(product.price * item.quantity)}</p>

            <div class="quantity-control">
              <button
                type="button"
                data-quantity="${escapeHTML(product.id)}|${escapeHTML(item.size)}|-1"
                aria-label="Decrease quantity"
              >−</button>

              <span>${item.quantity}</span>

              <button
                type="button"
                data-quantity="${escapeHTML(product.id)}|${escapeHTML(item.size)}|1"
                aria-label="Increase quantity"
              >+</button>
            </div>
          </div>

          <button
            class="remove-line"
            type="button"
            data-remove="${escapeHTML(product.id)}|${escapeHTML(item.size)}"
          >Remove</button>
        </div>
      `;
    }).join("");

    cartItemsElement.querySelectorAll("[data-quantity]").forEach(button => {
      button.addEventListener("click", () => {
        const [id, size, change] = button.dataset.quantity.split("|");

        const item = cart.find(line =>
          line.id === id && line.size === size
        );

        if (item) item.quantity += Number(change);

        cart = cart.filter(line => line.quantity > 0);
        saveCart();
        renderCart();
      });
    });

    cartItemsElement.querySelectorAll("[data-remove]").forEach(button => {
      button.addEventListener("click", () => {
        const [id, size] = button.dataset.remove.split("|");

        cart = cart.filter(line =>
          !(line.id === id && line.size === size)
        );

        saveCart();
        renderCart();
        notify("Item removed from your bag.");
      });
    });
  }

  /* =========================================
     OPEN AND CLOSE BAG
  ========================================= */

  function openCart() {
    if (!cartDrawer || !drawerBackdrop) return;

    closeWishlist();

    cartDrawer.classList.add("open");
    drawerBackdrop.classList.add("open");
    cartDrawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("drawer-open");
  }

  function closeCart() {
    if (cartDrawer) {
      cartDrawer.classList.remove("open");
      cartDrawer.setAttribute("aria-hidden", "true");
    }

    if (drawerBackdrop) drawerBackdrop.classList.remove("open");
    document.body.classList.remove("drawer-open");
  }

  /* =========================================
     WHATSAPP CHECKOUT
  ========================================= */

  function sendWhatsApp(message) {
    if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
      notify("The business WhatsApp number is not configured correctly.");
      return;
    }

    const url =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(message);

    window.open(url, "_blank", "noopener,noreferrer");
  }

  function buildOrderMessage(customer) {
    const orderReference = "HOC-" + Date.now().toString().slice(-8);

    const itemLines = cart.map((item, index) => {
      const product = getProduct(item.id);
      const itemTotal = product.price * item.quantity;

      return [
        `${index + 1}. ${product.name}`,
        `   Size: ${item.size}`,
        `   Unit price: ${money(product.price)}`,
        `   Quantity: ${item.quantity}`,
        `   Item total: ${money(itemTotal)}`
      ].join("\n");
    });

    const totalQuantity = cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    const subtotal = cart.reduce((sum, item) => {
      return sum + getProduct(item.id).price * item.quantity;
    }, 0);

    return [
      "🛍️ *NEW ORDER - HOUSE OF CHANDU*",
      "",
      `Order reference: ${orderReference}`,
      "",
      "*CUSTOMER DETAILS*",
      `Name: ${customer.name}`,
      `Phone: ${customer.phone}`,
      `Delivery address: ${customer.address}`,
      "",
      "*ORDER ITEMS*",
      "",
      ...itemLines,
      "",
      "----------------------------",
      `Total items: ${totalQuantity}`,
      `*ORDER SUBTOTAL: ${money(subtotal)}*`,
      "Delivery charges: To be confirmed",
      "Payment: To be confirmed",
      "----------------------------",
      "",
      "Please confirm availability, delivery charges and payment details.",
      "",
      "Thank you for shopping with House of Chandu!"
    ].join("\n");
  }

  /* =========================================
     CATEGORY BUTTONS
  ========================================= */

  bind("categoryTabs", "click", event => {
    const button = event.target.closest("[data-category]");

    if (button) {
      showAllForCategory = false;
      setCategory(button.dataset.category, false);
    }
  });

  document.querySelectorAll("[data-open-category]").forEach(button => {
    button.addEventListener("click", () => {
      showAllForCategory = false;
      setCategory(button.dataset.openCategory);

      if (shopSection) {
        shopSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  /* =========================================
     PRODUCT GRID EVENTS
  ========================================= */

  if (productGrid) {
    productGrid.addEventListener("click", event => {
      const heart = event.target.closest("[data-wishlist]");

      if (heart) {
        event.preventDefault();
        event.stopPropagation();
        toggleWishlist(heart.dataset.wishlist);
        return;
      }

      const card = event.target.closest("[data-product-id]");

      if (card) {
        openProduct(card.dataset.productId);
      }
    });

    productGrid.addEventListener("keydown", event => {
      const card = event.target.closest("[data-product-id]");

      if (!card || event.target !== card) return;

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProduct(card.dataset.productId);
      }
    });
  }

  bind("backToProducts", "click", () => {
    if (detailSection) detailSection.hidden = true;

    if (shopSection) {
      shopSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });

  /* =========================================
     CART AND WISHLIST CONTROLS
  ========================================= */

  bind("cartTrigger", "click", openCart);
  bind("closeCart", "click", closeCart);

  bind("wishlistTrigger", "click", openWishlist);
  bind("closeWishlist", "click", closeWishlist);

  const wishlistPanel = $("wishlistPanel");

  if (wishlistPanel) {
    wishlistPanel.addEventListener("click", event => {
      const removeButton = event.target.closest("[data-wishlist-remove]");

      if (removeButton) {
        toggleWishlist(removeButton.dataset.wishlistRemove);
        return;
      }

      const openButton = event.target.closest("[data-wishlist-open]");

      if (openButton) {
        const productId = openButton.dataset.wishlistOpen;
        closeWishlist();
        openProduct(productId);
      }
    });
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener("click", closeCart);
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeCart();
      closeWishlist();
    }
  });

  /* =========================================
     CONTINUE TO ORDER
  ========================================= */

  bind("checkoutButton", "click", () => {
    if (!cart.length) {
      notify("Your bag is empty. Add a product before continuing.");
      return;
    }

    if (customerOrderForm) {
      customerOrderForm.hidden = false;
      if (checkoutButton) checkoutButton.hidden = true;
      $("customerName")?.focus();
    }
  });

  /* =========================================
     CUSTOMER DETAILS AND WHATSAPP ORDER
  ========================================= */

  if (customerOrderForm) {
    customerOrderForm.addEventListener("submit", event => {
      event.preventDefault();

      if (!cart.length) {
        notify("Your bag is empty. Add a product before ordering.");
        return;
      }

      if (!customerOrderForm.reportValidity()) return;

      const customer = {
        name: $("customerName")?.value.trim() || "",
        phone: $("customerPhone")?.value.trim() || "",
        address: $("customerAddress")?.value.trim() || ""
      };

      if (!customer.name || !customer.phone || !customer.address) {
        notify("Please complete all delivery details.");
        return;
      }

      const phoneDigits = customer.phone.replace(/\D/g, "");

      const indianMobile = phoneDigits.length === 10
        ? phoneDigits
        : phoneDigits.length === 12 && phoneDigits.startsWith("91")
          ? phoneDigits.slice(2)
          : "";

      if (!/^[6-9]\d{9}$/.test(indianMobile)) {
        alert("Please enter a valid 10-digit Indian mobile number.");
        return;
      }

      sendWhatsApp(buildOrderMessage(customer));
    });
  }

  /* =========================================
     CONTACT WHATSAPP
  ========================================= */

  bind("contactWhatsApp", "click", () => {
    sendWhatsApp(
      "Hello House of Chandu! I'd like to know more about your collections."
    );
  });

  /* =========================================
     HERO SLIDER
  ========================================= */

  const slides = [...document.querySelectorAll(".hero-slide")];
  const sliderProgress = $("sliderProgress");
  const heroSlider = $("heroSlider");

  let slideIndex = 0;
  let slideTimer;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function showSlide(index) {
    if (!slides.length) return;

    slideIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === slideIndex);
    });

    if (sliderProgress) {
      sliderProgress.style.width =
        ((slideIndex + 1) / slides.length * 100) + "%";
    }
  }

  function startSlider() {
    clearInterval(slideTimer);

    if (!reduceMotion && slides.length > 1) {
      slideTimer = setInterval(() => {
        showSlide(slideIndex + 1);
      }, 5000);
    }
  }

  bind("prevSlide", "click", () => {
    showSlide(slideIndex - 1);
    startSlider();
  });

  bind("nextSlide", "click", () => {
    showSlide(slideIndex + 1);
    startSlider();
  });

  if (heroSlider) {
    heroSlider.addEventListener("mouseenter", () => {
      clearInterval(slideTimer);
    });

    heroSlider.addEventListener("mouseleave", startSlider);
  }

  showSlide(0);
  startSlider();

  /* =========================================
     MOBILE NAVIGATION
  ========================================= */

  const menuToggle = $("menuToggle");
  const mainNav = $("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen =
        menuToggle.getAttribute("aria-expanded") !== "true";

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );

      mainNav.classList.toggle("open", isOpen);
    });

    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  /* =========================================
     INITIALIZE WEBSITE
  ========================================= */

  const currentYear = $("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Start with Ethnic Wear and show up to four products.
  showAllForCategory = false;

  if (productGrid && categoryTabs) {
    setCategory("Ethnic Wear", false);
  }

  renderCart();
  updateWishlistButtons();
  renderWishlist();
});
