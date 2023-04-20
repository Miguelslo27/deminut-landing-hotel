import HttpClient, { MultipartClient } from './HttpClient';

class MenuController {
  getMenu = async storeId => {
    const result = await HttpClient.get(`/menus/${storeId}`);
    return result.data;
  }

  getClientMenu = async menuId => {
    const result = await HttpClient.get(`/menus/view/${menuId}`);
    return result.data;
  }
}

export default new MenuController();
