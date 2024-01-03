document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Hibrido De Timor Beans", img: "1.jpg", price: 20 },
      { id: 2, name: "USDA", img: "2.jpg", price: 30 },
    ],
  }));
});
