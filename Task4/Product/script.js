const products = [
  {
    id: 1,
    name: "HandBag",
    category: "accesories",
    price: 25000,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "T-shirts",
    category: "clothing",
    price: 5099,
    rating: 3.5,
    image:
      "https://images.unsplash.com/photo-1618354691438-25bc04584c23?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Teddy",
    category: "Kids and toys",
    price: 4999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 4,
    name: "Compact Kit",
    category: "Beauty & More",
    price: 2987,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 5,
    name: "Toy colony",
    category: "Kids",
    price: 3500,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1612355524120-462e49e4ffe6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Headset",
    category: "electronics",
    price: 3999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Sunglasses",
    category: "accesories",
    price: 2999,
    rating: 4.0,
    image:
      "https://images.unsplash.com/photo-1612902457652-33aff0a641fa?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Puzzle",
    category: "Kids",
    price: 1800,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1722814044999-03bf427e0076?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Lipstick",
    category: "Beauty & More",
    price: 4999,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1602261036425-9bb62da15969?q=80&w=2516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Dress",
    category: "Clothing",
    price: 4999,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    name: "Lip Care",
    category: "Beauty & More",
    price: 1999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Phone cases",
    category: "accesories",
    price: 3999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1542219550-76864b1bc385?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    name: "Ear rings",
    category: "Beauty & More",
    price: 2999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1723802205505-2f88b2227718?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    name: "Braclet",
    category: "Beauty & More",
    price: 2599,
    rating: 4.9,
    image:
      "https://plus.unsplash.com/premium_photo-1709033404514-c3953af680b4?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    name: "Jeans",
    category: "clothing",
    price: 4599,
    rating: 4.8,
    image:
      "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?q=80&w=2253&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    name: "ELectric oven",
    category: "electronics",
    price: 5999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1617713780979-4ae0c726f253?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 17,
    name: "train",
    category: "Kids",
    price: 500,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 18,
    name: "Trousers",
    category: "CLothing",
    price: 3999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1592343516109-362f7bd871aa?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 19,
    name: "Homemade Serum",
    category: "Beauty & More",
    price: 5899,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 20,
    name: "airpods",
    category: "electronics",
    price: 8000,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1610438235354-a6ae5528385c?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let currentProducts = [...products];

function renderProducts(list) {
  const container = document.getElementById("productGrid");
  container.innerHTML = "";
  list.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>Rating: ${product.rating}</p>
        <div class="price">Rs.${product.price}</div>
      `;
    container.appendChild(card);
  });
}

function filterProducts() {
  const category = document.getElementById("Filter").value;
  currentProducts =
    category === "all"
      ? [...products]
      : products.filter((p) => p.category === category);
  sortProducts();
}

function sortProducts() {
  const sortBy = document.getElementById("sort").value;
  let sorted = [...currentProducts];
  if (sortBy === "price-asc") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    sorted.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating-desc") {
    sorted.sort((a, b) => b.rating - a.rating);
  }
  renderProducts(sorted);
}

window.onload = () => renderProducts(products);
