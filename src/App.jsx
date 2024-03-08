import styles from './App.module.scss'
import Header from './componente/Header/Header'
import Portfolio from './componente/Portfolio/Portfolio'
import Sobre from './componente/Sobre/Sobre'

function App() {

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <Sobre/>
        <Portfolio/>
      </main>
    </>
  )
}

export default App
