import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import style from "./btnChoseeTheme.module.css";
import { useEffect, useState } from "react";

const Turn = ({ children }) => {
  const [light, setLight] = useState();

  useEffect(() => {
    setLight(
      localStorage.getItem("light") === null
        ? true
        : JSON.parse(localStorage.getItem("light"))
    );
  }, []);

  const toggle = () => {
    if (light === true) {
      setLight(false);
      localStorage.setItem("light", false);
    } else {
      setLight(true);
      localStorage.setItem("light", true);
    }
  };

  return (
    <div className={`${style.container} ${light ? "" : style.darkTheme}`}>
      <div
        className={`${style.containerDarkLight} ${
          light ? "" : style.darkThemeBtn
        }`}
      >
        <div
          className={`${style.button} ${light ? "" : style.dark}`}
          onClick={toggle}
        >
          <img
            className={style.icon}
            src={light ? sun : moon}
            alt={light ? "Sun icon" : "Moon icon"}
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Turn;
