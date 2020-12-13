import Header from './Header';

const Layout = ({ children, categories }) => (
  <>
    <Header categories={categories} />
    {children}
  </>
);

export default Layout;
