import "./App.css";
import Home from "./main/header/home";
// import Content from "./main/content/content";
import Icon from "./main/footer/icon";
import First from "./main/contact/con-details";
import Obj from "./main/content/con-obj";
import Class1 from "./main/class/class1";
// import Details from "./main/contact/con-details";
// const F1 =(props)=>{
//    return <div>Hello{props.name} </div>
// }
// console.log(F1);

function App() {
  // const obj = { name: "name", number: 233 };
  // const btnName = "CLICKMENU";

  return (
    <div>
      <Home />
      <Obj />
      <First />
      <Class1/>
      <Icon />
    </div>
  );
}

export default App;
