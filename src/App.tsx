import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo/Index";
import { Menu } from "./components/Menu/Index";
import { CountDown } from "./components/CountDown/Index";
import DefaultInput from "./components/DefaultInput/Index";
import { Cycles } from "./components/Cycles";
import DefaultButton from "./components/DefaultButton/Index";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer/Index";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              labelText="Task"
              id="meuInput"
              type="text"
              placeholder="Digite algo"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon/>}/>
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
