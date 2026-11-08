// DEMO PRODUCTS: replace sample prices, images and details with real inventory.
const PRODUCTS = [
  {
    id: "eth-001",
    name: "Baby Pink Embroidered Lehenga Set",
    brand: "HOUSE OF CHANDU",
    category: "Ethnic Wear",
    price: 5799,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1597983073493-88cd35cf93e1?auto=format&fit=crop&w=1000&q=85"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    available: ["XS", "S", "M", "L", "XL", "2XL"],
    description: "Sample description. Replace with accurate garment information.",
    specs: { Fabric: "Confirm fabric", Neckline: "Confirm neckline", Sleeve: "Confirm sleeve", Pattern: "Embroidered", Color: "Pink", Occasion: "Festive" }
  },
  {
    id: "eth-002",
    name: "Ivory Embroidered Anarkali Set",
    brand: "HOUSE OF CHANDU",
    category: "Ethnic Wear",
    price: 5499,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e9?auto=format&fit=crop&w=1000&q=85",
    images: ["https://images.unsplash.com/photo-1583391733956-6c78276477e9?auto=format&fit=crop&w=1000&q=85"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    available: ["S", "M", "L", "XL"],
    description: "Sample description. Add accurate product details.",
    specs: { Fabric: "Confirm fabric", Neckline: "Confirm neckline", Sleeve: "Confirm sleeve", Pattern: "Embroidered", Color: "Ivory", Occasion: "Festive" }
  },
  {
    id: "eth-003",
    name: "Pink Festive Suit Set",
    brand: "HOUSE OF CHANDU",
    category: "Ethnic Wear",
    price: 4999,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85",
    images: ["https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    available: ["S", "M", "L", "XL"],
    description: "Sample description. Replace with accurate details.",
    specs: { Fabric: "Confirm fabric", Neckline: "Confirm neckline", Sleeve: "Confirm sleeve", Pattern: "Embellished", Color: "Pink", Occasion: "Festive" }
  },
  {
    id: "eth-004",
    name: "Green Embroidered Anarkali Set",
    brand: "HOUSE OF CHANDU",
    category: "Ethnic Wear",
    price: 6999,
    image: "https://images.unsplash.com/photo-1610030469668-8e9f641aaf4a?auto=format&fit=crop&w=1000&q=85",
    images: ["https://images.unsplash.com/photo-1610030469668-8e9f641aaf4a?auto=format&fit=crop&w=1000&q=85"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    available: ["XS", "S", "M", "L", "XL"],
    description: "Sample description. Confirm garment details before publishing.",
    specs: { Fabric: "Confirm fabric", Neckline: "Confirm neckline", Sleeve: "Confirm sleeve", Pattern: "Embroidered", Color: "Green", Occasion: "Festive" }
  },
  {
    id: "west-001",
    name: "Contemporary Tailored Look",
    brand: "HOUSE OF CHANDU",
    category: "Western Wear",
    price: 2499,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85",
    images: ["https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    available: ["XS", "S", "M", "L", "XL"],
    description: "Sample description. Replace with actual product details.",
    specs: { Fabric: "Confirm fabric", Fit: "Confirm fit", Sleeve: "Confirm sleeve", Pattern: "Confirm pattern", Color: "Confirm colour", Occasion: "Casual" }
  },
  {
    id: "west-002",
    name: "Everyday Blue Statement Outfit",
    brand: "HOUSE OF CHANDU",
    category: "Western Wear",
    price: 1899,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=85",
    images: ["https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=85"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    available: ["S", "M", "L", "XL"],
    description: "Sample description. Replace with actual product details.",
    specs: { Fabric: "Confirm fabric", Fit: "Confirm fit", Sleeve: "Confirm sleeve", Pattern: "Confirm pattern", Color: "Confirm colour", Occasion: "Everyday" }
  },
  {
    id: "occ-001",
    name: "Red Occasion Dress",
    brand: "HOUSE OF CHANDU",
    category: "Occasion Wear",
    price: 3299,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85",
    images: ["https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    available: ["XS", "S", "M", "L", "XL"],
    description: "Sample description. Add accurate fabric and fit details.",
    specs: { Fabric: "Confirm fabric", Neckline: "Confirm neckline", Sleeve: "Confirm sleeve", Pattern: "Confirm pattern", Color: "Confirm colour", Occasion: "Party" }
  },
  {
    id: "occ-002",
    name: "Elegant Evening Outfit",
    brand: "HOUSE OF CHANDU",
    category: "Occasion Wear",
    price: 3799,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85",
    images: ["https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    available: ["S", "M", "L", "XL"],
    description: "Sample description. Replace with verified product information.",
    specs: { Fabric: "Confirm fabric", Fit: "Confirm fit", Sleeve: "Confirm sleeve", Pattern: "Confirm pattern", Color: "Confirm colour", Occasion: "Evening" }
  },
  {
    id: "day-001",
    name: "Relaxed Everyday Outfit",
    brand: "HOUSE OF CHANDU",
    category: "Everyday Wear",
    price: 1599,
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85",
    images: ["https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    available: ["XS", "S", "M", "L", "XL"],
    description: "Sample description. Add actual fabric and care instructions.",
    specs: { Fabric: "Confirm fabric", Fit: "Confirm fit", Sleeve: "Confirm sleeve", Pattern: "Confirm pattern", Color: "Confirm colour", Occasion: "Everyday" }
  },
  {
    id: "day-002",
    name: "Classic Casual Look",
    brand: "HOUSE OF CHANDU",
    category: "Everyday Wear",
    price: 1399,
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=85",
    images: ["https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=85"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    available: ["S", "M", "L", "XL"],
    description: "Sample description. Replace with accurate product information.",
    specs: { Fabric: "Confirm fabric", Fit: "Confirm fit", Sleeve: "Confirm sleeve", Pattern: "Confirm pattern", Color: "Confirm colour", Occasion: "Everyday" }
  },
  {
    id: "cel-001",
    name: "Celebration Blue Ensemble",
    brand: "HOUSE OF CHANDU",
    category: "Celebration Wear",
    price: 4299,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=1000&q=85",
    images: ["https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=1000&q=85"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    available: ["XS", "S", "M", "L", "XL"],
    description: "Sample description. Confirm garment composition.",
    specs: { Fabric: "Confirm fabric", Neckline: "Confirm neckline", Sleeve: "Confirm sleeve", Pattern: "Confirm pattern", Color: "Confirm colour", Occasion: "Celebration" }
  },
  {
    id: "cel-002",
    name: "Festive Statement Outfit",
    brand: "HOUSE OF CHANDU",
    category: "Celebration Wear",
    price: 3899,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85",
    images: ["https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    available: ["S", "M", "L", "XL", "2XL"],
    description: "Sample description. Replace with actual product details.",
    specs: { Fabric: "Confirm fabric", Fit: "Confirm fit", Sleeve: "Confirm sleeve", Pattern: "Confirm pattern", Color: "Confirm colour", Occasion: "Celebration" }
  }
];

function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(price);
}