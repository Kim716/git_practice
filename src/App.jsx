import Button from "./components/Button";

function App() {
  const handleLoginClick = () => {
    console.log("hello");
  };

  return <Button buttonName={"click"} onClick={handleLoginClick} />;
}

export default App;
