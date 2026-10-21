import Figure from "react-bootstrap/Figure";

function RBFigure() {
  return (
    <div className="component-page">
      <h1 className="component-title">Figures</h1>

      <div className="figure-section">
        <Figure>
          <Figure.Image
            width={650}
            height={380}
            alt="React Features Diagram"
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
          />

          <Figure.Caption>
            A beautiful example of a React development image.
          </Figure.Caption>
        </Figure>
      </div>
    </div>
  );
}

export default RBFigure;