// Home.js
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-container">
      <h1>Блог платформасы</h1>
      <p>Барлық қызықты жаңалықтар мен мақалалар бір жерде</p>
      <Link to="/posts" className="btn btn-primary">Менің посттарым</Link>
    </div>
  );
}

export default Home