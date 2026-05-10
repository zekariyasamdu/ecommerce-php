import { products } from "../data/mock.js";
import { simulateDelay } from "../utils.js";

export const QUERY = {
  async getUserProducts(userId) {
    await simulateDelay();
    const data = products.filter((product) => product.ownerId === userId);
    return data;
  },
  async getSpecificProduct(productId) {
    await simulateDelay();
    const data = products.filter((product) => product.id === productId);
    return data;
  },
  async getProducts() {
    await simulateDelay();
    const data = products;
    return data;
  },
};

export const MUTATIONS = {
  async postProduct(product, userId) {
    await simulateDelay();
    products.push(products);
    return;
  },
  async updateProduct(id) {
    await simulateDelay();
  },
  async deleteProduct(id) {
    await simulateDelay();
  },
};
