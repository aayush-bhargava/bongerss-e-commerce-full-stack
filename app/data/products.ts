export type Product = {
  slug: string;
  name: string;
  price: number;
  image: string;
  category: "tshirts" | "hoodies" | "mugs" | "covers";
};

export const products: Record<string, Product> = {
  "smoking-skull": {
    slug: "smoking-skull",
    name: "Smoking Skull",
    price: 599,
    image: "https://m.media-amazon.com/images/I/612YG+MkrvL._SY741_.jpg",
    category: "tshirts",
  },
  "chaos-is-culture": {
    slug: "chaos-is-culture",
    name: "Chaos is Culture!",
    price: 499,
    image: "https://m.media-amazon.com/images/I/61SXfFgTWFL._SY741_.jpg",
    category: "tshirts",
  },
  "devil-on-my-shoulder": {
    slug: "devil-on-my-shoulder",
    name: "Devil on my shoulder",
    price: 599,
    image: "https://m.media-amazon.com/images/I/61STbqcsf2L._SY741_.jpg",
    category: "tshirts",
  },
    "plain-black-oversized-tshirt" : {
        slug : "plain-black-oversized-tshirt",
        name : "Plain Black Oversized T", 
        price : 699,
        image : "https://m.media-amazon.com/images/I/612t+ciLnDL._SY741_.jpg",
        category : "tshirts",
  },

    "bora-style-rug-tshirts" : {
        slug : "bora-style-rug-tshirt",
        name : "Bora-style Rug Tshirts", 
        price : 399,
        image : "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/i/p/z/m-polo-8015-kajaru-original-imahev4uwp5hf6x9.jpeg?q=70",
        category : "tshirts",
  },

  "jack-daniels-happiness-is-temporary" : {
        slug : "jack-daniels-happiness-is-temporary",
        name : "Jack Daniels (Happiness is Temporary)", 
        price : 299,
        image : "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/t/p/o/l-melting-smiley-regular-tshirt-l-velora-original-imahjy8h8evxzbae.jpeg?q=70",
        category : "tshirts",
  },

  "oversized-plain-tshirt" : {
        slug : "oversized-plain-tshirt",
        name : "Oversized Plain Tshirt", 
        price : 499,
        image : "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/3/j/i/xxl-round-neck-tshirt-for-men-solstice-original-imah8mr6zywjfhxe.jpeg?q=70",
        category : "tshirts",
  },

  "snoop-dogg-sports-tshirt" : {
        slug : "snoop-dogg-sports-tshirt",
        name : "Snoop Dogg Sports Tshirt", 
        price : 1799,
        image : "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/u/w/z/l-n-11-epicsports-resized-2-original-imah3nmwdy3khs8h.jpeg?q=70",
        category : "tshirts",
  },

  "Dog-Printed-Hoodies" : {
        slug : "dog-printed-hoodies",
        name : "Dog-Printed Hoodie", 
        price : 699,
        image : "https://m.media-amazon.com/images/I/81t80rny9LL._AC_UL480_FMwebp_QL65_.jpg",
        category : "hoodies",
  },

  "Colorado-Hoodie" : {
        slug : "colorado-hoodie",
        name : "Colorado Hoodie", 
        price : 799,
        image : "https://m.media-amazon.com/images/I/51CX9bU3UJL._AC_UL480_FMwebp_QL65_.jpg",
        category : "hoodies",
  },

  "Black-front-printed-hoodie" : {
        slug : "black-front-printed-hoodie",
        name : "Black-Front Printed Hoodie", 
        price : 599,
        image : "https://m.media-amazon.com/images/I/71HpRbLi2jL._AC_UL480_FMwebp_QL65_.jpg",
        category : "hoodies",
  },
    "Snoop-Dogg -original-hoodie" : {
        slug : "snoop-dogg-original-hoodie",
        name : "Snoop Dogg Original Hoodie", 
        price : 4299,
        image : "https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/k/q/j/m-snoop-dog-annymark-original-imahhqg2verzcfhy.jpeg?q=70",
        category : "hoodies",
  },

  "one-man-punch-hoodie" : {
        slug : "one-man-punch-hoodie",
        name : "One Man Punch Hoodie", 
        price : 699,
        image : "https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/s/5/p/m-men-s-black-one-punch-man-graphic-printed-oversized-hoodies-2-original-imah4ghfqrr6gpkm.jpeg?q=70",
        category : "hoodies",
  },

  "snoop-dogg-hoodie-for-pets" : {
        slug : "snoop-dogg-hoodie-for-pets",
        name : "Snoop Dogg Hoodies for Pets", 
        price : 9999,
        image : "https://m.media-amazon.com/images/I/61BXh84HI+L._AC_UL480_FMwebp_QL65_.jpg",
        category : "hoodies",
  },

  "plain-front-printed-hoodie" : {
        slug : "plain-front-printed-hoodie",
        name : "Plain Front-Printed Hoodie", 
        price : 699,
        image : "https://m.media-amazon.com/images/I/51DxRcQQh1L._AC_UL480_FMwebp_QL65_.jpg",
        category : "hoodies",
  },
  
  "pink-hoodies for pets" : {
        slug : "pink-hoodie-for-pets",
        name : "Pink Hoodie for Pets", 
        price : 799,
        image : "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-apparel/v/d/t/xl-bs-oreo-pawstar-hoody-pink-xl-baeship-original-imahh6hjhb6cmmty.jpeg?q=70",
        category : "hoodies",
  },

  "smoke-free-mugs" : {
        slug : "smoke-free-mugs",
        name : "Smoke-Free Mugs", 
        price : 199,
        image : "https://m.media-amazon.com/images/I/716KKXW8oPL._AC_UL480_FMwebp_QL65_.jpg",
        category : "mugs",
  },

  "Cigar-Mode-Mugs" : {
        slug : "cigar-mode-mugs",
        name : "Cigar Mode Mug", 
        price : 199,
        image : "https://m.media-amazon.com/images/I/61DBloEz0qL._AC_UL480_FMwebp_QL65_.jpg",
        category : "mugs",
  },

  "Cameramans-mug" : {
        slug : "cameraman-mug",
        name : "CameraMan's Mug", 
        price : 399,
        image : "https://m.media-amazon.com/images/I/712pdmon7zL._AC_UL480_FMwebp_QL65_.jpg",
        category : "mugs",
  },

  "QuitSmokingMugs" : {
        slug : "quit-smoking-mugs",
        name : "Quit Smoking Mugs", 
        price : 299,
        image : "https://m.media-amazon.com/images/I/71sS0X3b+5L._AC_UL480_FMwebp_QL65_.jpg",
        category : "mugs",
  },

  MousepadSony: {
    slug: "mousepad-sony",
    name: "Mousepad Sony",
    price: 99,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/mousepad/n/4/g/-original-imahhjt6gszt7y2p.jpeg?q=70",
    category: "covers",
  },

  SpidermanMousepad: {
    slug: "spiderman-gaming-mousepad",
    name: "Spiderman Logo Printed Gaming Mouse Pad",
    price: 199,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/mousepad/v/0/5/spiderman-logo-printed-gaming-mouse-pad-non-slip-rubber-base-original-imah8hb67q6gtcbg.jpeg?q=70",
    category: "covers",
  },

  LaptopCover1416: {
    slug: "laptop-cover-14-16",
    name: "Laptop Cover (14–16 inch)",
    price: 299,
    image:
      "https://m.media-amazon.com/images/I/61CVKqM0hcL._AC_UY327_FMwebp_QL65_.jpg",
    category: "covers",
  },

  LaptopCoverStorage: {
    slug: "laptop-cover-with-storage",
    name: "Laptop Cover with storage",
    price: 299,
    image:
      "https://m.media-amazon.com/images/I/81iwP8i+SEL._AC_UY327_FMwebp_QL65_.jpg",
    category: "covers",
  },

  MacLaptopCover: {
    slug: "large-capacity-mac-laptop-cover",
    name: "Large-Capacity Laptop Covers only for Macs",
    price: 699,
    image : "https://rukminim2.flixcart.com/image/612/612/xif0q/bag/t/k/s/26-laptop-sleeve-carrying-case-tablet-handle-waterproof-laptop-original-imah84s3sszzkbzh.jpeg?q=70",
    category: "covers",
  },

  CaptainLaptopCase: {
    slug: "captain-16-inch-laptop-case",
    name: "Captain 16-inch Laptop Case with Handle",
    price: 499,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/bag/3/2/6/28-captain-16-inch-laptop-case-with-handle-for-all-15-15-6-inch-original-imahf3eqghwms7mn.jpeg?q=70",
    category: "covers",
  },
};