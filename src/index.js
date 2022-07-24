import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles/style.css";

function App() {
  const [image, setImage] = useState("");

  useEffect(() => {
    const requisicao = axios.get("https://dog.ceo/api/breeds/image/random");
    requisicao.then((res) => {
      setImage(res.data.message);
    });
  }, []);
  return (
    <div className="view">
      <div className="image">
        {image ? (
          <img src={image} alt="Catioro fofíneo" />
        ) : (
          "Carregando imagem..."
        )}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
