import ingeridents from '../assets/ingeridents.json';

export const query = (menuItem) => {
    return ingeridents.filter(item => menuItem.ingeridents.find(w => w.id == item.id));
}

