
import Footer from './Footer';
import Navbar from './Nav';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
