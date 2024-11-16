import Link from 'next/link';
import '../styles/common/home-bar.sass';

export default function HomeBar() {
    return (
      <div id="home-bar">
        <h1><Link style={{ color: 'inherit', textDecoration: 'inherit'}} href="/">Hikari</Link></h1>
        <p>Current home page</p>
      </div>
    );
  }
