import '../styles/layout/_footer.sass';
import Image from 'next/image';

export default function Footer() {
    return (
      <footer id="gi-footer">
        <Image id="footer-img" src={'/gi-logo-jp.png'} alt="JP Logo" width={64} height={64} unoptimized/>

      </footer>
    );
  }