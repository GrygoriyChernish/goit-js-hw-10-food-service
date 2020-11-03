import menuItemTpl from '../templates/menu-item.hbs';
export default function createMenuItemsMarkup (item)  {
  return item.map(menuItemTpl).join('');
}