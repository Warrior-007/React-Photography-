import { useContext } from "react";
import { Link } from "react-router-dom";
import homePagePicture from "../Files/homePage.png"; // with import
import AuthContext from "../../store/auth-context";

function Home() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={homePagePicture}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Every moment can be catch in memory forever!
            </h1>
            <br />
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              {isLoggedIn && (
                <Link to="/upload-image">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg px-4 me-md-2"
                  >
                    Start now
                  </button>
                </Link>
              )}
              {!isLoggedIn && (
                <Link to="/login">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg px-4 me-md-2"
                  >
                    Start now
                  </button>
                </Link>
              )}
              <Link to="/all-images">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  View all Images
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
