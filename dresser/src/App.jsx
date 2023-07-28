import Header from "./components/Header"
import HeroSection from "./components/HeroSection";

function App() {
  const menuItems = ['Feminino', 'Masculino', 'Marcas'];

  return (
    <div className="container">
      <Header menuItems={menuItems} />
      <HeroSection />
    </div>
  )
}

export default App
