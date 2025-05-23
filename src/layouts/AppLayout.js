import Header from '../widgets/header/Header';
import Footer from '../widgets/footer/Footer';

export default function AppLayout({ children }) {
  if (children)
    return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    );
}
