import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./Styles.module.css";
import { useState } from "react";


type AvailableThemes = 'dark' | 'light';

export function Menu(){
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function toggleTheme(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    setTheme(prevTheme => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      console.log(`Tema alterado para: ${newTheme}`);
      return newTheme;
    })
    document.documentElement.setAttribute("data-theme", theme);

  }

  return (
  <nav className={styles.menu}>
    <a href="#" className={styles.menuLink} aria-label="Ir para Home" title="Ir para Home">
      <HouseIcon />
    </a>
    <a href="#" className={styles.menuLink} aria-label="Ver Histórico" title="Ver Histórico">
      <HistoryIcon />
    </a>
    <a href="#" className={styles.menuLink} aria-label="Configurações" title="Configurações">
      <SettingsIcon />
    </a>
    <a href="#" className={styles.menuLink} aria-label="Mudar Tema" title="Mudar Tema"
    onClick={toggleTheme}>
      <SunIcon />
    </a>
  </nav>
  );
}
