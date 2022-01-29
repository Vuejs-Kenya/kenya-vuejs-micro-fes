import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import placeFooter from "remote/placeFooter";
import "./index.scss";

const App = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    placeFooter(footerRef.current);
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: react-host</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
      <div ref={footerRef} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
