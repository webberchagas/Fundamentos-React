import { Header } from './components/Header';
import styles from './App.module.css';
import { SideBar } from './components/SideBar';

export function App() {

  return (
    <div>
      <Header />
    
      <div className={styles.wrapper}>
        <SideBar />
        
        <main>
          posts
        </main>
      </div>
    </div>
  )
}
