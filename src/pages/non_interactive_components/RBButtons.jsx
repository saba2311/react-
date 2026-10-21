import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useState } from "react";

function RBButtons() {
  const [bold, setBold] = useState(true);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [strike, setStrike] = useState(false);

  return (
    <div className="component-page">
      <h1 className="component-title">Buttons</h1>

      <div className="button-section">
        <h2>Toggle Buttons</h2>

        <ButtonGroup>
          <ToggleButton
            id="bold"
            type="checkbox"
            variant={bold ? "primary" : "outline-primary"}
            checked={bold}
            value="bold"
            onChange={(e) => setBold(e.currentTarget.checked)}
          >
            <strong>B</strong>
          </ToggleButton>

          <ToggleButton
            id="italic"
            type="checkbox"
            variant={italic ? "primary" : "outline-primary"}
            checked={italic}
            value="italic"
            onChange={(e) => setItalic(e.currentTarget.checked)}
          >
            <em>I</em>
          </ToggleButton>

          <ToggleButton
            id="underline"
            type="checkbox"
            variant={underline ? "primary" : "outline-primary"}
            checked={underline}
            value="underline"
            onChange={(e) => setUnderline(e.currentTarget.checked)}
          >
            <u>U</u>
          </ToggleButton>

          <ToggleButton
            id="strike"
            type="checkbox"
            variant={strike ? "primary" : "outline-primary"}
            checked={strike}
            value="strike"
            onChange={(e) => setStrike(e.currentTarget.checked)}
          >
            <s>S</s>
          </ToggleButton>
        </ButtonGroup>

        <p
          className="toggle-description"
          style={{
            fontWeight: bold ? "700" : "400",
            fontStyle: italic ? "italic" : "normal",
            textDecoration: `${underline ? "underline" : ""} ${
              strike ? "line-through" : ""
            }`,
          }}
        >
          Here, the actions of the above buttons will be reflected.
        </p>
      </div>
    </div>
  );
}

export default RBButtons;