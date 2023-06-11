import Footer from "../Footer";
import Navbar from "../Navbar";

export default function MainPage({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen sm:px-28 px-4 text-white">
        {children}
      </main>
      <Footer />
    </>
  )
}