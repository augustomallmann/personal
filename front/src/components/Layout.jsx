import Header from './Header';

export default function Layout({ children, darkMode, setDarkMode }) {
  return (
    <div>
      {/* <Header darkMode={darkMode} setDarkMode={setDarkMode} /> */}
      {children}
    </div>
  );
}
