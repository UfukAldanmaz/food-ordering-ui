import menu from '../assets/menu.json';

export const getByCategory = (categoryId) => {
    return menu.filter(item => item.categoryId == categoryId);
}