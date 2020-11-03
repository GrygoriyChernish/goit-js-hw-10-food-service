import menuItemsInfo from './js/menu.json';
import refs from './js/refs';
import saveSettings from './js/save-settings';
import createMenuItemsMarkup from './js/create-markup';
import onCheckBoxChange from './js/change-checkbox';

saveSettings();

refs.menu.innerHTML = createMenuItemsMarkup(menuItemsInfo);

refs.checkBox.addEventListener('change', onCheckBoxChange);











