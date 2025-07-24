import SectionHeader from "../Components/SectionHeader";

export default function About() {
  return (
    <>
      <div className="vh-100 bgColor">
        <div className="container  h-100">
          <div className="row justify-content-center align-content-center h-100">
            <SectionHeader sectionName="ABOUT SECTION" />
            <div className="col-md-6 p-md-3 text-white">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 p-md-3 text-white">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
