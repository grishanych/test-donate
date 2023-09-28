import Categorys from "./components/Categorys/Categorys";
import Subcategory from "./components/Subcategory/Subcategory";
import Button from "./components/Button/Button";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Categorys/>
        <Subcategory/>
        <Button 
        text="Click Me"
        color="rgba(70, 163, 88, 1)"
        imageSize="10px"
        image="https://cdn.icon-icons.com/icons2/934/PNG/512/arrow-angle-pointing-to-right_icon-icons.com_73097.png"
        />
      </header>
    </div>
  );
}

export default App;
