import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import WelcomeMessage from "./components/WelcomeMessage";

export default function App() {
  return (
    <div>
      <WelcomeMessage/>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  )
}
