document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // Reset wishlist on every fresh page load. Keep the shopping bag saved.
  localStorage.removeItem("houseOfChanduWishlist");

  /* =========================================
     HOUSE OF CHANDU SETTINGS
  ========================================= */

  const WHATSAPP_NUMBER = "917842428844";
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
      oldPrice: 2499,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: ["L", "XL", "2XL"],
      images: [
        "images/anarkali-white-pink-01.jpeg",
        "images/anarkali-white-pink-02.jpeg",
      ],
      description: "An occasion-ready ethnic style with an elegant silhouette. Replace this sample description with the exact fabric, fit and care details for your product.",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "V-Neck",
        Sleeve: "3/4",
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
      oldPrice: 2499,
      badge: "NEW",
      sizes: ["M", "XL","XXL"],
      available: ["M", "L","XL","XXL"],
      images: ["images/Blackdress.png"],
      description: "Elegant black embroidered Anarkali kurta set with colourful detailing and a beautifully designed dupatta. Perfect for festive and special occasions..",
      specs: {
        Fabric: "Chanderi Cotton",
        Neckline: "V-Neck",
        Sleeve: "3/4",
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
      oldPrice: 3499,
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
      description: "Elegant chocolate brown embroidered kurta set with matching pants and a beautifully detailed dupatta. Perfect for festive and traditional occasions. .",
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
      oldPrice: 2999,
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
      oldPrice: 2999,
      badge: "NEW",
      sizes: ["M","L", "XXL",],
      available: ["M","L", "XXL", ],
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
      oldPrice: 2999,
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
      id: "west-001",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: 1999,
      badge: "NEW",
      sizes: ["M", "L", "XL",],
      available: ["M", "L", "XL", ],
      images: [
        "images/white cord set-1.jpeg",
        "images/white cord set-2 back.jpeg",
        "images/Look-3.jpeg",
        "images/Look-4.jpeg",
      ],
      description:"Top and bottom included,Co-ord Set Cost: ₹999 Brand: House of Chandu Style Code: Women Co-ord Set,Top and bottom included,comes With collar Neck ",
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
      sizes: [ "XL", "2XL"],
      available: [ "XL","2XL"],
      images:[
        "images/B-1.png",
        "images/B-2.png",
        "images/B-3.png"
      ],
        
      description: "Co-ord Set Cost: ₹999 Brand: House of Chandu Style Code: Women Co-ord Set,Top and bottom included.Comes With collar Neck",
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
      oldPrice:1999,
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
      description: "Top and bottom included.Comes with collar Neck ",
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
      oldPrice:1999,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/L-1.jpeg",
        "images/L-2.jpeg",
        "images/L-3.jpeg",
        "images/L-4.jpeg",

      ],
      description: "comes with collar neck,with Beautiful floral print .",
      specs: {
        Fabric: "Viscose Rayon",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Floral print",
        Color: "BLUE",
        Occasion: "Casual"
      }
    },
    {
      id: "west-005",
      name: "Elegant Ink Blue Embroidered",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice:1999,
      badge: "NEW",
      sizes: ["M", "L",  "2XL"],
      available: ["M", "L",  "2XL"],
      images: [
        "images/X-1.png",
        "images/X-2.png",
        "images/X-3.png",
        
      ],
      description: "Add a touch of elegance to your everyday wardrobe with this beautiful Ink Blue Kurti from House of Chandu. Crafted from comfortable cotton-blend fabric, it features intricate all-over thread embroidery that gives it a stylish and sophisticated loo",
      specs: {
        Fabric: "Cotton Blend",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "All-Over Embroidery",
        Color: "Ink Blue",
        Occasion: "Casual"
      }
    },
    {
      id: "west-006",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice: 1999,
      badge: "NEW",
      sizes: ["M", "L", "2XL"],
      available: ["M", "L", "2XL"],
      images: [
        "images/Y-1.jpeg",
        "images/Y-2.png",
      ],
      description:"Upgrade your wardrobe with this elegant Light Green Pure Cotton Kurti, beautifully designed with all-over thread embroidery. Crafted from premium pure cotton fabric, it offers a comfortable feel with a stylish Western wear look..",
      specs: {
        Fabric: " 100% Pure Cotton",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: " Thread Embroidery",
        Color: "Light Green",
        Occasion: "Casual"
      }
    },
    {
      id: "west-007",
      name: "CORD-SET",
      brand: "HOUSE OF CHANDU",
      category: "Western Wear",
      price: 999,
      oldPrice:1999,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/Z-1.jpeg",
        "images/Z-2.png",
        "images/Z-3.png",
        "images/Z-4.png",
      ],
      description: "Top and bottom included.",
      specs: {
        Fabric: "",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Floral print",
        Color: "Blue",
        Occasion: "Casual"
      }
    },
    {
      id: "day-001",
      name: "Ivory Bloom Printed Kurta Set.",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 799,
      oldPrice:1999,
      badge: "NEW",
      sizes: ["M", "L",  "2XL"],
      available: ["M", "L", "XL","2XL"],
      images: [
        "images/I-1.jpeg",
        "images/I-2.jpeg",
        "images/I-3.jpeg",
        "images/I-4,jpeg",
      ],
      description: "Add a touch of elegance to your everyday style with this beautiful ivory printed kurta set. Featuring intricate traditional motifs, a stylish front panel, and 3/4 sleeves, paired with comfortable white palazzo pants. Perfect for casual outings, festive gatherings, and everyday ethnic wear..",
      specs: {
        Fabric: "Cotton Blend ",
        Fit: "Co SET",
        Sleeve: "3/4",
        Pattern: "Embroidery",
        Color: "Cream",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-002",
      name: "Maroon Embroidered Cotton Blend 3-Piece Suit Set",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 999,
      oldPrice:1999,
      badge: "NEW",
      sizes: ["M", "L", "XXL"],
      available: [ "M", "L",,"XXL"],
      images: [
        "images/J-1.png",
        "images/J-2.png",
        "images/J-3.png",
        "images/J-4.png",
        "images/J-5.png",
      ],
      description: "Elevate your ethnic wardrobe with this beautiful wine-Marron kurta set. Featuring elegant white floral embroidery on the neckline and hem, stylish 3/4 sleeves, matching straight pants, and a stunning tie-dye printed dupatta. A perfect blend of comfort and traditional elegance, ideal for festive occasions, family gatherings, and celebrations..",
      specs: {
        Fabric: "Cotton Blend",
        Fit: "Regular Fit ",
        Sleeve: "3/4",
        Pattern: "Thread Embroidery",
        Color: "  :Maroon",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-003",
      name: "Premium Chanderi Embroidered 3-Piece Suit Set",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear/causal wear",
      price: 1199,
      oldPrice: 2199,
      badge: "NEW",
      sizes: [ "M", "L",  "XXL"],
      available: [ "M", "L", "XXL"],
      images: [
        "images/K-1.jpeg",
        "images/K-2.jpeg",
        "images/K-2.jpeg",
        "images/K-3.jpeg",
        "images/K-4.jpeg",
      ],
      description: ".",
      specs: {
        Fabric: "Premium Chanderi",
        Fit: "Straight-cut kurta with a comfortable, relaxed-fit bottom.",
        Sleeve: "3/4",
        Pattern: "Floral Embroidered Pattern with a Printed Dupatta",
        Color: "GREEN",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-004",
      name: "Maroon Ethnic Elegance Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 799,
      oldPrice: 1899,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL","2XL"],
      images: [
        "images/M-2.jpeg",
        "images/M-1.jpeg",
        "images/M-3.jpeg",
        "images/M-4.jpeg",
      ],
      description: ".",
      specs: {
        Fabric: "Cotton Blend",
        Fit: "Regular fit ",
        Sleeve: "3/4",
        Pattern: "Geometric & Traditional Printed",
        Color: "Marron",
        Occasion: "	Casual, Festive & Family Wear"
      }
    },

    {
      id: "day-005",
      name: "Premium Chanderi Embroidered 3-Piece Suit Set",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 849,
      oldPrice: 1999,
      badge: "NEW",
      sizes: [ "M", "L",  "2XL"],
      available: ["M", "L", "2XL"],
      images: [
        "images/K-1.jpeg",
        "images/K-2.jpeg",
        "images/K-2.jpeg",
        "images/K-3.jpeg",
        "images/K-4.jpeg",

      ],
      description: "Elevate your ethnic style with this beautiful sage green suit set, featuring delicate floral embroidery, a stylish neckline and a soft floral printed dupatta. Paired with matching straight pants, it's perfect for everyday elegance and festive occasions..",
      specs: {
        Fabric: "Premium Chanderi",
        Fit: "Straight-cut kurta with a comfortable, relaxed-fit bottom.",
        Sleeve: "3/4",
        Pattern: "Floral Embroidered Pattern with a Printed Dupatta",
        Color: "Light GREEN",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-006",
      name: "Elegant Teal Green Cotton Blend Kurti",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 999,
      oldPrice:1999,
      badge: "NEW",
      sizes: [ "M", "L","2XL"],
      available: [ "M", "L", "2XL"],
      images: [
        "images/N-1.jpeg",
        "images/N-2.jpeg",
        "images/N-3.jpeg",
      ],
      description: "Refresh your everyday wardrobe with this beautiful Teal Green Cotton Blend Kurti. Designed with elegant all-over thread embroidery, it combines traditional charm with everyday comfort. The stylish 3/4 sleeves and graceful look make it perfect for daily wear, casual outings and everyday styling..",
      specs: {
        Fabric: "Cotton Blend",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "All-Over Thread Embroidery",
        Color: "Teal Green",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-007",
      name: "Bloom Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 899,
      oldPrice:1999,
      badge: "NEW",
      sizes: [ "L", "XL", "2XL"],
      available: ["XL", "L", "2XL"],
      images: [
        "images/O-0.jpeg",
        "images/O-1.png",
        "images/O-2.png",
        "images/O-3.png",
        "images/O-4.png",
        
      ],
      description: "Elevate your ethnic wardrobe with this elegant black straight-fit kurta set, featuring beautiful white floral embroidery on the front, a stylish V-notch neckline, and three-quarter sleeves. Paired with matching black straight pants and a stunning black-grey tie-dye dupatta with subtle stripe detailing, this three-piece set is perfect for festive occasions, family gatherings, and casual celebrations.",
      specs: {
        Fabric: "Cotton Blend",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Thread Embroidery",
        Color: "Black",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-008",
      name: "Lavender Chanderi Dress",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 999,
      oldPrice:1999,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: [ "M", "L", "XL","2XL"],
      images: [
        "images/P-1.png",
        'images/P-3.png',
        "images/P-4.png",
        "images/P-5.jpeg",

      ],
      description: "Add a touch of elegance to your ethnic wardrobe with this beautiful lavender straight-fit kurta set. Featuring delicate white floral embroidery on the front, a detailed neckline, and elegant three-quarter sleeves, it comes paired with matching lavender pants and a beautifully printed dupatta with intricate floral borders. Perfect for festive occasions, family gatherings, and everyday ethnic styling.",
      specs: {
        Fabric: "Chanderi",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Theard Embroidery",
        Color: "Lavender",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-009",
      name: "Royal Ivory Zari Embroidered Three-Piece Suit Set",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 849,
      oldPrice:1999,
      badge: "New",
      sizes: ["M", "L", "XL", "2XL"],
      available: [ "M", "L", "XL","2XL"],
      images: [
        "images/Q-1.png",
        "images/Q-2.png",
        "images/Q-3.png",
        "images/Q-3.png",
        "images/Q-4.jpeg",
      ],
      description: "Add timeless elegance to your ethnic collection with this beautiful ivory straight-fit kurta set. Featuring intricate golden floral embroidery on the neckline and throughout the kurta, it comes paired with matching straight pants and a stunning beige-gold dupatta with subtle woven detailing. Perfect for festive celebrations, family gatherings, parties, and special occasions.",
      specs: {
        Fabric: "Cotton Blend",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Theard Embroidery",
        Color: "Hot Cream",
        Occasion: "Everyday"
      }
    },

    {
      id: "day-010",
      name: "Deep Teal Floral Embroidered Three-Piece Suit Set",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 999,
      oldPrice:1999,
      badge: "NEW",
      sizes: [ "M", "L", "XL", "2XL"],
      available: [ "M", "L", "XL","2XL"],
      images: [
        "images/R-1.jpeg",
        "images/R-2.png",
        "images/R-3.png",
        "images/R-4.png",
      ],
      description: "Make a stunning style statement with this elegant deep teal embroidered kurta set. Featuring beautiful pink floral embroidery with intricate golden detailing on the front, a stylish embellished neckline, and three-quarter sleeves. Paired with matching teal straight pants and a gorgeous ivory dupatta adorned with pink floral prints, golden motifs, and a contrasting teal border. Perfect for festive celebrations, parties, and special occasions..",
      specs: {
        Fabric: "chanderi",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Floral Design",
        Color: "Peacock Green",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-011",
      name: "Sage Green Floral Embroidered Three-Piece Suit Set",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 899,
      oldPrice:1599,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: [ "M", "L", "XL","2XL"],
      images: [
        "images/S-1.png",
        "images/S-2.png",
        "images/S-3.png",
        "images/S-4.png",
        "images/S-5.jpeg",
      ],
      description: "Refresh your ethnic wardrobe with this elegant sage green straight-fit kurta set. Featuring delicate white floral embroidery, a beautifully detailed neckline, and subtle all-over motifs. Paired with matching straight pants and a stunning sage green dupatta adorned with intricate floral embroidery and an elegant geometric border. Perfect for festive occasions, family gatherings, and everyday ethnic styling..",
      specs: {
        Fabric: "Chanderi",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Thread Embroidery",
        Color: "Olive Green",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-017",
      name: "Royal Blue Ethnic Printed Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 899,
      oldPrice:1999,
      badge: "NEW",
      sizes: [ "M", "L", "XL", "2XL"],
      available: [ "M", "L", "XL","2Xl"],
      images: [
        "images/AA-1.png",
        "images/AA-2.png",
        "images/AA-3.png",
        "images/AA-4.jpeg",
      ],
      description: "Beautiful royal blue kurta set featuring intricate all-over beige floral and traditional motifs with a stylish round neckline and three-quarter sleeves. Paired with matching straight-fit pants and a lightweight blue dupatta with delicate woven detailing. Perfect for festive celebrations, family gatherings, and ethnic occasions..",
      specs: {
        Fabric: "Cotton Blend",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Thread Embroidery",
        Color: "Blue&Cream",
        Occasion: "Everyday"
      }
    },
    
    {
      id: "day-013",
      name: "Magenta Bloom Floral Printed Dupatta Three-Piece Suit Set",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 799,
      oldPrice:1999,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: ["M", "L", "XL", "2XL"],
      images: [
        "images/U-1.png",
        "images/U-2.png",
        "images/U-3.png",
        "images/U-4.jpeg",
      ],
      description: "Elevate your ethnic style with this gorgeous deep magenta straight-fit kurta set. Featuring delicate silver floral embroidery on the front, an elegant neckline, and subtle all-over motifs. Paired with matching magenta straight pants and a beautiful ivory dupatta adorned with bold magenta floral prints, intricate patterns, and a decorative border. Perfect for festive celebrations, family gatherings, and special occasions..",
      specs: {
        Fabric: "Chanderi",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Thread Embroidery",
        Color: "Baby Pink",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-014",
      name: "Royal Purple Gold Embroidered Three-Piece Suit Set",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 1049,
      oldPrice:2099,
      badge: "NEW",
      sizes: ["M", "L",],
      available: [ "M", "L",],
      images: [
        "images/V-1.png",
        "images/V-2.png",
        "images/V-3.png",
        "images/V-4.jpeg",
      ],
      description: "Enhance your ethnic wardrobe with this elegant royal purple straight-fit kurta set. Featuring intricate golden floral embroidery on the neckline, sleeves, and kurta hem, along with delicate all-over motifs. Paired with matching purple straight pants and a beautiful purple-and-white tie-dye dupatta highlighted with subtle golden stripes. Perfect for festive celebrations, family gatherings, and special occasions..",
      specs: {
        Fabric: "Cotton Blend",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Thread Embroidery",
        Color: "Violet",
        Occasion: "Everyday wear"
      }
    },
    {
      id: "day-015",
      name: "Sage Grey Gold Embroidered Three-Piece Suit Set",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 849,
      oldPrice:1999,
      badge: "NEW",
      sizes: ["M", "L", "XL",],
      available: [ "M", "L", "XL"],
      images: [
        "images/W-1.png",
        "images/W-2.png",
        "images/W-3.png",
        "images/W-4.png",
        "images/W-5.jpeg",
      ],
      description: "Add a touch of sophistication to your ethnic wardrobe with this elegant sage grey straight-fit kurta set. Featuring intricate golden embroidery around the neckline, delicate all-over motifs, and beautifully detailed sleeve borders. Paired with matching straight pants and a stunning champagne-gold dupatta with subtle shimmering stripes. Perfect for festive occasions, family gatherings, celebrations, and elegant everyday styling..",
      specs: {
        Fabric: "Cotton Blend",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Thread Embroidery",
        
        Color: "Muted Grey",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-016",
      name: "Turquoise Blue Floral Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 899,
      oldPrice:1999,
      badge: "",
      sizes: ["M", "L", "XL", "2XL"],
      available: [ "M", "L", "XL","2XL"],
      images: [
        "images/Z-1.jpeg",
        "images/Z-2.png",
        "images/Z-3.png",
        "images/Z-4.png",
      ],
      description: "Elegant turquoise blue kurta set featuring delicate white floral embroidery on the front, a stylish notched neckline, and detailed sleeve borders. Paired with matching straight-fit pants and a beautiful white-and-blue tie-dye dupatta with fine striped detailing. Perfect for everyday wear, casual outings, and festive occasions..",
      specs: {
        Fabric: "Cotton Blend",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "c",
        Color: "Blue",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-012",
      name: "Ruby Red Floral Embroidered Three-Piece Suit Set",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 799,
      oldPrice:1999,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: [ "M", "L", "XL","2XL"],
      images: [
        "images/T-1.png",
        "images/T-2.png",
        "images/T-3.png",
        "images/T-4.png",
        "images/T-5.jpeg",

      ],
      description: "Make a bold ethnic statement with this beautiful ruby red straight-fit kurta set. Featuring elegant white floral embroidery on the neckline, sleeves, and front, with delicate all-over motifs. Paired with matching red straight pants and a stunning red dupatta adorned with intricate floral embroidery and a decorative border. Perfect for festive celebrations, weddings, parties, and special occasions..",
      specs: {
        Fabric: "Chanderi",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Thread Embroidery",
        Color: "RED",
        Occasion: "Everyday"
      }
    },
    
    {
      id: "day-018",
      name: "Cream Floral Paisley Printed Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 799,
     oldPrice:1999,
      badge: "NEW",
      sizes: ["M", "L", "XL",],
      available: [ "M", "L", "XL"],
      images: [
        "images/BB-1.jpeg",
        "images/BB-2.png",
        "images/BB-3.png",
        "images/BB-4.png",
      ],
      description: "Elegant cream kurta set featuring beautiful all-over floral and paisley prints in soft brown and blush pink tones. Designed with three-quarter sleeves and a classic round neckline, paired with matching white straight-fit pants and a lightweight textured ivory dupatta. Perfect for casual outings, office wear, and elegant everyday styling..",
      specs: {
        Fabric: "Cotton Blend",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Thread Embroidery",
        Color: "Cream",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-019",
      name: "Green Floral Embroidered Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 899,
      oldPrice:1999,
      badge: "NEW",
      sizes: [ "M", "L", "XL", "2XL"],
      available: ["M", "L", "XL","2XL"],
      images: [
        "images/CC-1.png",
        "images/CC-2.png",
        "images/CC-3.png",
        "images/CC-4.jpeg",
      ],
      description: "Elegant pastel green kurta set featuring beautiful white floral embroidery, a stylish V-neckline, and three-quarter sleeves. Paired with matching straight-fit pants and a sheer green dupatta adorned with intricate floral embroidery and a decorative border. Perfect for festive occasions, casual outings, and elegant daywear..",
      specs: {
        Fabric: "Cotton Blend",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Thread Embroidery",
        Color: "Light Green",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-020",
      name: "Ivory & Black Botanical Printed Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 899,
      oldPrice:1999,
      badge: "NEW",
      sizes: ["L"],
      available: [ "L"],
      images: [
        "images/DD-1.png",
        "images/DD-2.png",
        "images/DD-3.png",
        "images/DD-4.jpeg"
      ],
      description: "Stylish ivory kurta set featuring bold black botanical and abstract floral prints, a classic round neckline, and three-quarter sleeves with black cuffs. Paired with matching black straight-fit pants and a sheer black dupatta adorned with subtle golden stripe detailing. Perfect for office wear, casual outings, and elegant everyday styling..",
      specs: {
        Fabric: "Cotton Blend",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Thread Embroidery",
        Color: "Cream And Black",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-021",
      name: "Mustard Yellow Ikat Printed Kurta Set",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 799,
      oldPrice:1999,
      badge: "NEW",
      sizes: ["L", "XL", "2XL"],
      available: [ "L", "XL","2XL"],
      images: [
        "images/EE-1.png",
        "images/EE-2.png",
        "images/EE-3.png",
        "images/EE-4.jpeg",
      ],
      description: "Stylish mustard yellow kurta set featuring traditional ikat-inspired geometric motifs in cream and brown tones, a classic round neckline, and three-quarter sleeves. Paired with matching straight-fit pants and a coordinating mustard dupatta with subtle woven stripe detailing. Perfect for festive occasions, casual outings, and everyday ethnic wear..",
      specs: {
        Fabric: "Cotton Blend",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Thread Embroidery",
        Color: "YELLOW",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-022",
      name: "Blue Blossom Embroidered Kurta Pant Set with Designer Dupatta",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 849,
      oldPrice:1999,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: [ "M", "L", "2XL"],
      images: [
        "images/FF-1.png",
        "images/FF-2.png",
        "images/FF-3.png",
        "images/FF-4.jpeg",
      ],
      description: "Elevate your ethnic wardrobe with this elegant Blue Blossom Kurta Set. Featuring a beautiful slate-blue kurta adorned with delicate pink embroidered motifs and an intricately embroidered neckline, this outfit offers a graceful and sophisticated look..",
      specs: {
        Fabric: "Cotton Blend ",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Thread Embroidery",
        Color: "ASH",
        Occasion: "Everyday"
      }
    },
    {
      id: "day-023",
      name: "Ivory Elegance Embroidered Kurta Pant Set with Golden Dupatta",
      brand: "HOUSE OF CHANDU",
      category: "Everyday Wear",
      price: 949,
      oldPrice:1999,
      badge: "NEW",
      sizes: ["M", "L", "XL", "2XL"],
      available: [ "M", "L", "XL","2XL"],
      images: [
        "images/GG-1.png",
        "images/GG-2.png",
        "images/GG-3.png",
        "images/GG-4.jpeg",
      ],
      description: "Enhance your ethnic wardrobe with this elegant Ivory Embroidered Kurta Set. Featuring a beautiful ivory kurta with intricate beige-gold embroidery around the neckline, sleeves and hemline, this outfit offers a sophisticated and timeless look..",
      specs: {
        Fabric: "Cotton Blend",
        Fit: "Regular",
        Sleeve: "3/4",
        Pattern: "Thread Embroidery",
        Color: "Creamy White",
        Occasion: "Everyday"
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

  let previousProductScrollPosition = 0;

function openProduct(productId) {
  currentProduct = getProduct(productId);

  if (!currentProduct || !detailSection || !detailContainer) return;

  // Remember the exact product-listing scroll position
  previousProductScrollPosition = window.scrollY;

  selectedSize = "";

  selectedImage = Array.isArray(currentProduct.images)
    ? currentProduct.images.find(image =>
        typeof image === "string" && image.trim()
      ) || ""
    : "";

  // Render selected product details
  renderProductDetail();

  // Open the separate product view
  detailSection.hidden = false;
  document.body.classList.add("product-view");

  // Update URL without reloading the page
  history.pushState(
    { productView: true, productId },
    "",
    `?product=${encodeURIComponent(productId)}`
  );

  window.scrollTo(0, 0);
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

  // Generate a unique order reference
  const timestamp = Date.now().toString(36).toUpperCase();

  const randomCode = Math.random()
    .toString(36)
    .substring(2, 6)
    .toUpperCase();

  const orderReference = `HOC-${timestamp}-${randomCode}`;

  // Generate order items
  const itemLines = cart.map((item, index) => {
    const product = getProduct(item.id);
    const itemTotal = product.price * item.quantity;

    return [
      `${index + 1}. ${product.name}`,
      `   Item Order ID: ${product.id}`,
      `   Size: ${item.size}`,
      `   Unit price: ${money(product.price)}`,
      `   Quantity: ${item.quantity}`,
      `   Item total: ${money(itemTotal)}`
    ].join("\n");
  });

  // Calculate total quantity
  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Calculate subtotal
  const subtotal = cart.reduce((sum, item) => {
    return sum + getProduct(item.id).price * item.quantity;
  }, 0);

  // Final WhatsApp message
  return [
    "🛍️ *NEW ORDER - HOUSE OF CHANDU*",
    "",
    `*Order Reference: ${orderReference}*`,
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
    "Payment method: Awaiting confirmation",
    "----------------------------",
    "",
    "*Please confirm your preferred payment method to proceed.*",
    "Also confirm product availability and delivery charges.",
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
  if (history.state?.productView) {
    history.back();
  } else {
    closeProductView();
  }
});

function closeProductView() {
  if (detailSection) {
    detailSection.hidden = true;
  }

  document.body.classList.remove("product-view");

  // Restore the previous listing position
  window.scrollTo(0, previousProductScrollPosition);
}

// Handle browser Back and Forward buttons
window.addEventListener("popstate", event => {
  if (event.state?.productView) {
    const productId = event.state.productId;
    currentProduct = getProduct(productId);

    if (currentProduct) {
      selectedSize = "";
      selectedImage = currentProduct.images?.[0] || "";
      renderProductDetail();
      detailSection.hidden = false;
      document.body.classList.add("product-view");
      window.scrollTo(0, 0);
    }
  } else {
    closeProductView();
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
      }, 2500);
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
  // Start with Everyday Wear and show up to four products.
showAllForCategory = false;

if (productGrid && categoryTabs) {
  setCategory("Everyday Wear", false);
}
  renderCart();
  updateWishlistButtons();
  renderWishlist();
});
