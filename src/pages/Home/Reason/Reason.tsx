import "./Reason.scss"

//components
import Title from "../../../components/Title/Title.tsx";
import SeeMore from "../../../components/buttons/SeeMore/SeeMore.tsx";

function Reason() {
  return (
    <div className="Reasone">
      <div className="container">
        <Title mainText="" paragraph="" />
        <div className="central_asia_img"/>
        <SeeMore title="About Us"/>
      </div>
    </div>
  );
}

export default Reason;