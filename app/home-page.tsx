import '../styles/home/home.sass'
import Link from "next/link"


export default function HomePage() {
    return (
      <div id="main-content">
        <p>Hello, this is a test website on GitHub pages using Next.JS deployment, which is gonna transform into my site in the future.</p>
        <p>For testing purposes, this is a test on site routing with a link to another page: </p><Link href="/about">About me</Link>
        <hr/>
        <p style={{textAlign: "center"}}>Stay tuned!!! UwU</p>
      </div>
    );
  }
