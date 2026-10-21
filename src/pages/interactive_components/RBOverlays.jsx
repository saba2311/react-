import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Tooltip from 'react-bootstrap/Tooltip';

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">
      Popover bottom
    </Popover.Header>

    <Popover.Body>
      <strong>Holy guacamole!</strong> Check this info.
    </Popover.Body>
  </Popover>
);

function TipButton({ placement }) {
  return (
    <OverlayTrigger
      placement={placement}
      overlay={
        <Tooltip id={`tooltip-${placement}`}>
          Tooltip on {placement}
        </Tooltip>
      }
    >
      <Button variant="secondary">
        Tooltip on {placement}
      </Button>
    </OverlayTrigger>
  );
}

function RBOverlays() {
  const positions = ['top', 'right', 'bottom', 'left'];

  return (
    <div className="demo-area">
      <div className="d-flex flex-wrap gap-2 mb-5">
        {positions.map((placement) => (
          <OverlayTrigger
            key={placement}
            trigger="click"
            placement={placement}
            overlay={popover}
          >
            <Button variant="outline-secondary">
              Popover on {placement}
            </Button>
          </OverlayTrigger>
        ))}
      </div>

      <hr />

      <div className="d-flex flex-wrap gap-2">
        {positions.map((placement) => (
          <TipButton
            key={placement}
            placement={placement}
          />
        ))}
      </div>
    </div>
  );
}

export default RBOverlays;