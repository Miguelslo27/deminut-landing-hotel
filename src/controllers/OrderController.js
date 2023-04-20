import HttpClient from './HttpClient';

class OrderController {
  createOrder = async (menuId, items, location) => {
    const result = HttpClient.post(
      `/orders`,
      {
        menuId,
        items,
        location
      }
    );
    return result;
  };

  getOrder = async orderId => {
    const result = HttpClient.get(`/orders/${orderId}`);
    return result;
  }
}

export default new OrderController();
