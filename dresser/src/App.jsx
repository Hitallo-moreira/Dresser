import Header from "./components/Header"
import Footer from "./components/Footer"

// eslint-disable-next-line react/prop-types
function App({ children }) {
  const menuItems = ['Feminino', 'Masculino', 'Marcas'];
  const companyItems = ['Sobre', 'Contato'];

  return (
    <div>
      <div className="container">
        <Header menuItems={menuItems} />
      </div>
      {children}
      <Footer menuItems={menuItems} companyItems={companyItems} buySectionTitle="Comprar" companySectionTitle="Empresa"/>
    </div>
  )
}

export default App
