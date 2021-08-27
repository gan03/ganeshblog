import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import Card from "../UI/Card/Card";
import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <Card>
        <div style={{ padding: "50px  0" }}>
          <Logo />
        </div>
        <NavBar />
      </Card>
    </div>
  );
};

export default Hero;
