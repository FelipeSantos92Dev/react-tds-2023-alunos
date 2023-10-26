import SideMenu from "./components/sidemenu/SideMenu";

import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <SideMenu />
      <div style={{ marginLeft: 100 }}>
        <p className={styles.titulo} >Página principal</p>
      </div>
    </div>
  )
}
