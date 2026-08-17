
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const FooterComponent = () => {
  return (
    <section
    id="contact"
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#01081e",
      }}
    >
      <div className="container py-5">
            <h1 className="fw-bold mb-2 text-light w-100 text-center">Contact Us</h1>
            <h3 className="fw-bold mb-4 text-light w-100 text-center">
              Have questions? We're here to help!
            </h3>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-7 mb-4 mb-lg-0">

            <form className="p-4 rounded-4 shadow-sm bg-white">
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Phone Number"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Company Name"
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-100 fw-semibold"
                style={{
                  backgroundColor: "#16A085",
                  color: "#fff",
                  borderRadius: "10px",
                  padding: "12px 0",
                }}
              >
                Request Demo
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-lg-5">
            <div className="d-flex flex-column gap-4">
              {/* Email */}
              <a
                href="mailto:info@carservpro.com"
                className="d-flex align-items-center p-3 rounded-4 bg-white shadow-sm text-decoration-none"
                style={{ gap: "15px" }}
              >
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "#16A085",
                    color: "white",
                    width: "45px",
                    height: "45px",
                  }}
                >
                  <FaEnvelope size={18} />
                </div>
                <p className="mb-0 fw-semibold text-muted">
                  info@carservpro.com
                </p>
              </a>

              {/* Phone */}
              <a
                href="tel:01111728974"
                className="d-flex align-items-center p-3 rounded-4 bg-white shadow-sm text-decoration-none"
                style={{ gap: "15px" }}
              >
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "#16A085",
                    color: "white",
                    width: "45px",
                    height: "45px",
                  }}
                >
                  <FaPhone size={18} />
                </div>
                <p className="mb-0 fw-semibold text-muted">01111728974</p>
              </a>

              {/* Address */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=18+El-Hegaz+street+New+Cairo"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center p-3 rounded-4 bg-white shadow-sm text-decoration-none"
                style={{ gap: "15px" }}
              >
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "#16A085",
                    color: "white",
                    width: "45px",
                    height: "45px",
                  }}
                >
                  <FaMapMarkerAlt size={18} />
                </div>
                <p className="mb-0 fw-semibold text-muted">
                  18 El-Hegaz street ,New Cairo
                </p>
              </a>

              {/* Social Icons */}
              <div className="d-flex gap-3 mt-2">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        backgroundColor: "white",
                        color: "#16A085",
                        width: "42px",
                        height: "42px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget.style.backgroundColor = "#8b3af2"),
                        (e.currentTarget.style.color = "white"))
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget.style.backgroundColor = "white"),
                        (e.currentTarget.style.color = "#8b3af2"))
                      }
                    >
                      <Icon size={18} />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterComponent;
