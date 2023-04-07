import { Header } from './components/Header';
import { Marketing } from './components/Marketing';
import { Help } from './components/Help';
import { Services } from './components/Services';
import { Startups } from './components/Startups';
import { Statistics } from './components/Statistics';
import classes from './styles.module.scss'
import { Clients } from './components/Clietnts';
import { News } from './components/News';
import { ReadyToStart } from './components/ReadyToStart';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div className={classes.box} >
      <Header />
      <Marketing />
      <Startups />
      <Services />
      <Help />
      <Statistics />
      <Clients />
      <News />
      <ReadyToStart />
      <Footer />
    </div>
  );
}


