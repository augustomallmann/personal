import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, darkMode, setDarkMode }) {
  return (
    <div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      {children}
      <Footer />
    </div>
  );
}
