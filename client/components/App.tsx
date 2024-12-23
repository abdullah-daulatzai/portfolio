import Nav from './Nav'
import AboutMe from './AboutMe'
import Icon from './Icon'

function App() {
  return (
    <div className="app">
      <header className=" flex w-full justify-center bg-[#000040] shadow-lg shadow-[#000040]/50">
        <Nav />
      </header>
      <section className=" mt-32 flex w-screen items-center justify-center">
        <AboutMe />
      </section>
      <section className="mt-32 ">
        <Icon />
      </section>

      <main className="p-4"></main>
    </div>
  )
}

export default App
