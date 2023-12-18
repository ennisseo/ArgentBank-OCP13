// import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import Feature from '../../components/Feature';
import Hero from '../../components/Hero';
import chatIcon from '../../assets/icon-chat.png';
import moneyIcon from '../../assets/icon-money.png';
import securityIcon from '../../assets/icon-security.png';


function App() {
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature
          img={chatIcon}
          alt="Chat Icon"
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          img={moneyIcon}
          alt="Chat Icon"
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          img={securityIcon}
          alt="Chat Icon"
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money
          is always safe."
        />
      </section>
    </main>
  );
}

export default App;
