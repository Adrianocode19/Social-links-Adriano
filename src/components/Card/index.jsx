import style from "./card.module.css";
import gitHubLogo from "../../assets/github.svg";
import gmailLogo from "../../assets/gmail.svg";
import linkedinLogo from "../../assets/linkedin.svg";
const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.info}>
        <div className={style.perfilImg}></div>
        <h1>Adriano Carlos</h1>
        <h2>Desenvolvedor Front End</h2>
      </div>
      <div className={style.containerLinks}>
        <a
          className={style.containerLink}
          href="https://github.com/Adrianocode19"
        >
          <img src={gitHubLogo} alt="GitHub Logo" />
        </a>
        <a
          className={style.containerLink}
          href="https://mail.google.com/mail/u/0/#sent?compose=GTvVlcRzCpJKTcqJmgkLDdJBtNvdPDVVfRcPbCRtGZwjSwgRTvMdzNDbQhBSzKbppkHJdXshfThJG"
        >
          <img src={gmailLogo} alt="Gmail Logo" />
        </a>
        <a
          className={style.containerLink}
          href="https://www.linkedin.com/in/adriano-carlos-texeira-ba4a40262/"
        >
          <img src={linkedinLogo} alt="Linkedin Logo" />
        </a>
      </div>
    </div>
  );
};

export default Card;
