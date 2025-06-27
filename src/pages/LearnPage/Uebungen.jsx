import { useState } from "react";
import "./uebungen.scss";
import { Tabs } from "react-bootstrap";

const Uebungen = () => {
  const [key, setKey] = useState("HiraganaAlphabet");

  return (
    <div className="vocabulary-container uebungen-container">
      <Tabs
        id="uncontrolled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      ></Tabs>
    </div>
  );
};

export default Uebungen;
