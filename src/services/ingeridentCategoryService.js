import ingeridentCategories from '../assets/ingeridentCategories.json'

export const list = () => {
    return ingeridentCategories;
}

export const get = (id) => {
    return ingeridentCategories.find(w => w.id == id);
}