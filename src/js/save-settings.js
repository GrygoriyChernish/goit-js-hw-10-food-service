import Theme from './themes';
import refs from './refs';
export default function saveSettings() {
  const saveSettings = localStorage.getItem('theme');
  if (saveSettings) {
    document.body.classList.value = saveSettings;
    if (saveSettings === Theme.DARK) {
      refs.checkBox.checked = true;
    }
  }
} 