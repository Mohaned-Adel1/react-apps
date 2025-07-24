import SectionHeader from "../Components/SectionHeader";

export default function Contact() {
  return (
    <>
      <div>
        <div className="container">
          <SectionHeader sectionName="CONTACT SECTION" />
          <form className="w-50 p-3 mx-auto mt-">
            <label for="" class="form-label">
              User Name
            </label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="john due"
            />
            <label for="" class="form-label">
              User Email
            </label>
            <input
              type="email"
              class="form-control"
              id=""
              placeholder="name@example.com"
            />
            <label for="" class="form-label">
              User Age
            </label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="e.g.: 25"
            />{" "}
            <label for="" class="form-label">
              User Password
            </label>
            <input
              type="password"
              class="form-control"
              id=""
              placeholder="User Password"
            />
            <button className="btn btn-success mt-3">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}
