import Link from "next/link";
import Image from "next/image";
import "../styles/pages/_error.sass";

export default function NotFound() {
  return (
    <div id="error-container">
      <div id="error">
        <h2 id="error__code">404</h2>
        <div id="error__description">
          <p>Whoops, it seems that you have overcooked!</p>
          <p>Go back to the <Link href={"/"}>title page</Link></p>
        </div>
      </div>
      <Image src={'/gi-tc/images/fry-pan.png'} alt="Fry Pan" width={100} height={100} unoptimized/>
    </div>

  );
}