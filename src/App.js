import './App.css'
import NavBar from './components/navbar/index.js'
import AppRouter from './router/index.js'
import Footer from './components/footer/index.js'


function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App
