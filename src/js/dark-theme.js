import Theme from './themes';
export default function changeOnDarkTheme() { 
  document.body.classList.value = Theme.DARK;
  localStorage.setItem('theme', Theme.DARK)
}