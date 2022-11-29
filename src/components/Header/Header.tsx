import "./Header.scss";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <h1 className="name-title">{t("APP.COMPONENTS.HEADER.NAME")}</h1>
      <div className="links">
        <Link to="/"></Link>
      </div>
    </header>
  );
};

export default Header;
