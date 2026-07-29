import { api } from "./api.js";

export const QUERY = {
  async getProducts(search = "") {
    const query = search ? `?search=${encodeURIComponent(search)}` : "";
    const data = await api.get(`/products${query}`);
    return data.products;
  },
  async getProduct(productId) {
    const data = await api.get(`/products/${productId}`);
    return data.product;
  },
  async getMyProducts() {
    const data = await api.get("/my/products");
    return data.products;
  },
  async getMyStats() {
    const data = await api.get("/my/stats");
    return data.stats;
  },
};

export const MUTATIONS = {
  async postProduct(product) {
    const data = await api.post("/products", product);
    return data.product;
  },
  async deleteProduct(id) {
    return api.delete(`/products/${id}`);
  },
};
