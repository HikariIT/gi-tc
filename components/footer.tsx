import '../styles/layout/_footer.sass';
import Image from 'next/image';
import { DiGithubBadge } from "react-icons/di";


export default function Footer() {
    return (
      <footer id="gi-footer">
        <Image id="footer-img" src={'/gi-tc/images/gi-logo-jp.png'} alt="JP Logo" width={100} height={100} unoptimized/>
        <div id="footer__content">
          <div id="footer__content__left">
            <h1>Genshin Stove Theorycrafting Tool</h1>
            <div id="footer__project-link">
              <a href="https://github.com/HikariIT/gi-tc"><DiGithubBadge size={45} /><span>Project GitHub</span></a>
            </div>
          </div>
        </div>
        <div id="footer__bottom">
          <span>@2024, by <b>Hikari</b></span>
          <span>Genshin Stove is not affiliated with Hoyoverse</span>
        </div>
      </footer>
    );
  }