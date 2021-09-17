import PropTypes from "prop-types";
import Button from "./Button";
import {useLocation} from "react-router-dom";

const Header = ({ title, onAdd, ShowAdd }) => {
    const Location = useLocation()
  return (
    <header>
      <h1>
        {title}
        {ShowAdd}
      </h1>
        {Location.pathname === '/' && <Button
            color={ShowAdd ? "red" : "green"}
            text={ShowAdd ? "Close" : "Add"}
            onClick={onAdd}
        />}
      {/* make button color change work */}
    </header>
  );
};

Header.defaultProps = {
  title: "Default Title",
};
Header.propTypes = {
  title: PropTypes.string,
  onAdd: PropTypes.func,
  showAdd: PropTypes.bool,
};

export default Header;
