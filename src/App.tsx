import Footer from "./components/Footer"
import Header from "./components/Header"
import Projects from "./components/Projects"


function App() {

  return (
    <>

      <header className="bg-gray-800 text-white p-4">
        <Header />
      </header>

      <main className="bg-gray-900 text-white px-5 py-10 ">
        <Projects />
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <Footer />
      </footer>
    </>
  )
}

export default App
