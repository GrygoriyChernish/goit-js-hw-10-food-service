import refs from './refs';
import changeOnDarkTheme from './dark-theme';
import changeOnLightTheme from './light-theme';


export default function onCheckBoxChange() {
  changeOnDarkTheme();
  if (refs.checkBox.checked === false) {
    changeOnLightTheme();
  }
  
}