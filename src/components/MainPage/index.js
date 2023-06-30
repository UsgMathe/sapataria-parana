import Footer from "../Footer";
import Navbar from "../Navbar";

export default function MainPage({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center max-w-6xl  m-auto min-h-screen sm:px-10 md:px-14 lg:px-44 px-4 text-white">
        {children}
      </main>
      <Footer />
    </>
  )
}