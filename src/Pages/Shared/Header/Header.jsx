import moment from "moment/moment";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <div className="text-center">
      {/* <h2 className="text-3xl">This is header</h2> */}
      <img className="mx-auto" src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
