import HomeBar from "./home-bar";
import variables from '../styles/variables.module.sass';
import HomePage from "./home-page";

export default function Home() {
  return (
    <div>
      <HomeBar/>
      <HomePage/>
    </div>
  );
}
