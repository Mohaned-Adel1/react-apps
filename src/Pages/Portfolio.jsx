import SectionHeader from "../Components/SectionHeader";
import image1 from "./../assets/poert1.png";
import image2 from "./../assets/port2.png";
import image3 from "./../assets/port3.png";

export default function Portfolio() {
  return (
    <>
      <div className="container">
        <SectionHeader sectionName="PORTFOLIO SECTION" />
        <div className="row g-5 mb-5">
          <div className=" col-md-6 col-lg-4">
            <div className="rounded-3 overflow-hidden position-relative">
              <img className=" w-100 rounded-3" src={image1} alt="" />
            </div>
          </div>
          <div className=" col-md-6 col-lg-4">
            <div className="rounded-3 overflow-hidden position-relative">
              <img className=" w-100 rounded-3" src={image2} alt="" />
            </div>
          </div>
          <div className=" col-md-6 col-lg-4">
            <div className="rounded-3 overflow-hidden position-relative">
              <img className=" w-100 rounded-3" src={image3} alt="" />
            </div>
          </div>
          <div className=" col-md-6 col-lg-4">
            <div className="rounded-3 overflow-hidden position-relative">
              <img className=" w-100 rounded-3" src={image1} alt="" />
            </div>
          </div>
          <div className=" col-md-6 col-lg-4">
            <div className="rounded-3 overflow-hidden position-relative">
              <img className=" w-100 rounded-3" src={image2} alt="" />
            </div>
          </div>
          <div className=" col-md-6 col-lg-4">
            <div className="rounded-3 overflow-hidden position-relative">
              <img className=" w-100 rounded-3" src={image3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
