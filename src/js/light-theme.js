import Theme from './themes';
export default function changeOnLightTheme() { 
  document.body.classList.value = Theme.LIGHT;
    localStorage.setItem('theme', Theme.LIGHT)
}