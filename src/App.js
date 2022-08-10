import Header from "./components/Header";
import Button from "./components/Button"
import  {Image}  from "./components/Image";
import NavBar from "./components/NavBar";

function App() {
  return (
  <div>
    <NavBar/>
    <Header/>
    <Button label="Add to Cart"/>
    <Button label="Read More..."/>
    <Button label="Register"/>
    <Button label="Login"/>
  <Image/>
  </div>

  )
}
export default App;
