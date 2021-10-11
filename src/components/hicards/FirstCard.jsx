import { Card, Button, ProgressBar } from "react-bootstrap";

const FirstCard = () => {
  return (
    <Card clasName="card" style={{ paddingBottom: "1.5rem" }}>
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>
          <header
            className="d-flex justify-space-between "
            style={{ justifyContent: "space-between" }}
          >
            <h2 className="inline-block t-20 t-black--light t-normal pr6">
              Profile Strength:&nbsp;
              <strong className="t-20 t-black t-bold">Intermediate</strong>
            </h2>
            <button
              aria-label="Collapse to hide profile tasks"
              id="ember121"
              className="artdeco-button "
            >
              {" "}
              <li-icon
                aria-hidden="true"
                type="chevron-down-icon"
                className="artdeco-button__icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </li-icon>
              <span class="artdeco-button__text"></span>
            </button>
          </header>
        </Card.Title>
        <Card.Text>
          <div>
            <ProgressBar>
              <ProgressBar
                variant="success"
                now={10}
                key={1}
                style={{ marginRight: "2px" }}
              />
              <ProgressBar
                variant="success"
                now={10}
                key={2}
                style={{ marginRight: "2px" }}
              />
              <ProgressBar
                variant="success"
                now={10}
                key={3}
                style={{ marginRight: "2px" }}
              />
              <ProgressBar
                variant="success"
                now={10}
                key={1}
                style={{ marginRight: "2px" }}
              />
              <ProgressBar
                variant="success"
                now={10}
                key={2}
                style={{ marginRight: "2px" }}
              />
              <ProgressBar
                variant="success"
                now={10}
                key={3}
                style={{ marginRight: "2px" }}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                class="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
              <ProgressBar
                now={10}
                key={1}
                style={{ marginRight: "2px", backgroundColor: "whitesmoke" }}
              />
              <ProgressBar
                now={10}
                key={2}
                style={{ marginRight: "2px", backgroundColor: "whitesmoke" }}
              />
              <ProgressBar
                now={10}
                key={3}
                style={{ marginRight: "2px", backgroundColor: "whitesmoke" }}
              />
              <ProgressBar
                now={10}
                key={3}
                style={{ marginRight: "2px", backgroundColor: "whitesmoke" }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path
                  style={{ height: "200px", width: "200px" }}
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
            </ProgressBar>
          </div>
        </Card.Text>
        {/*   <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};
export default FirstCard;
