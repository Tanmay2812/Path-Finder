import React from "react";
import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbars.css";

let currentAlgo = "";
export let wallOrWeight = "wall";
export let digonalPath = false;

function algorithmCompletedTime(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export const Navbars = ({
  visualizeBfs,
  visualizeDijkstra,
  visualizeAStar,
  visualizeGreedyBFS,
  resetGrid,
  resetPath,
  resetWeight,
}) => {

  const [isRuning, setRuning] = useState(false);
  const [time, setTime] = useState(0);
  let Time = 0;

  const onBtnClick = () => {
    if (currentAlgo === "") {
      document.getElementById("Vizu").innerHTML = "Select Algorithm";
    } else if (currentAlgo === "BFS") {
      resetPath();
      resetWeight();
      Time = visualizeBfs();
    } else if (currentAlgo === "Dijkstra") {
      resetPath();
      Time = visualizeDijkstra();
    } else if (currentAlgo === "AStar") {
      resetPath();
      Time = visualizeAStar();
    } else if (currentAlgo === "GreedyBFS") {
      resetPath();
      Time = visualizeGreedyBFS();
    }
    setTime(Time);
  };
  useEffect(() => {
    if (isRuning) {
      algorithmCompletedTime(time).then(() => {
        setRuning(false);
      });
    }
  }, [isRuning, time]);

  const handleClick = () => setRuning(true);

  return (
    <Navbar bg="dark" variant="dark">``````````````
      <Navbar.Brand>PATH-FINDER </Navbar.Brand>````
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" >
          <NavDropdown title="Algorithm" id="basic-nav-dropdown" disabled={isRuning}>
            <NavDropdown.Item
              onClick={() => {
                const algo = document.getElementById("Vizu");
                currentAlgo = "Dijkstra";
                algo.innerHTML = "Visualize Dijkstra Algrithm";
              }}
            >
              Dijkstra's Shortest Path
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                const algo = document.getElementById("Vizu");
                currentAlgo = "BFS";
                algo.innerHTML = "Visualize BFS Algorithm (Unweighted)";
              }}
            >
              BFS Shortest Path
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                const algo = document.getElementById("Vizu");
                currentAlgo = "AStar";
                algo.innerHTML = "Visualize A* Algorithm";
              }}
            >
              A* Shortest Path
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                const algo = document.getElementById("Vizu");
                currentAlgo = "GreedyBFS";
                algo.innerHTML = "Visualize Greedy Algorithm";
              }}
            >
              Greedy Best First Search
            </NavDropdown.Item>
          </NavDropdown>````

          <Button
            id="resetGrid"
            className="btn_q"
            variant="info"
            disabled={isRuning}
            onClick={() => {
              resetGrid();
              setTime(1)
              handleClick();
              console.log(Time)
            }}
          >
            Reset Grid
          </Button>``````
          <Button
            id="resetPath"
            className="btn_q"
            variant="info"
            disabled={isRuning}
            onClick={() => {
              resetPath();
              setTime(1)
              handleClick();
            }}
          >
            Clear Path
          </Button>``````
          <Button
            id="Vizu"
            className="btn"
            variant="info"
            disabled={isRuning}
            onClick={() => {
              onBtnClick();
              handleClick();
            }}
          >
            Visualize!
          </Button>
        </Nav>
      </Navbar.Collapse>
      <Nav className="ww">
        <NavDropdown title="Obstacles" id="basic-nav-dropdown1" disabled={isRuning}>
          <NavDropdown.Item
            onClick={() => {
              wallOrWeight = "wall";
              setTime(1)
            }}
          >
            Wall
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => {
              wallOrWeight = "weight";
              setTime(1)
            }}
          >
            Weight
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>````
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label={
            <span style={{ "color": "white" }}>Enable Digonal Path</span>
          }
          disabled={isRuning}
          onClick={() => {
            digonalPath = !digonalPath;
            setTime(1)
          }}
        />
      </Form>````
    </Navbar>
  );
};
