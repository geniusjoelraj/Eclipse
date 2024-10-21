import NavBar from './components/NavBar';
import Hero from './components/Hero'
export default function App() {
  return (
    <>
      <div className="py-6 h-lvh items-center px-8 lg:px-28 bg-black z-10">
        <NavBar />
        <Hero />
      </div>
    </>
  )
}
