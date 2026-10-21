import reactImage from "../assets/react.svg";

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>React Practice Tasks</h1>

      <p>Explore my React learning Tasks.</p>

      <img
        src={reactImage}
        alt="React"
        className="react-image"
      />
    </div>
  );
}

export default Home;