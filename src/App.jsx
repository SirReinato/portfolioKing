import styles from './App.module.scss'
import Header from './componente/Header/Header'
import Sobre from './componente/Sobre/Sobre'

function App() {

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <Sobre/>
      </main>
    </>
  )
}

export default App
