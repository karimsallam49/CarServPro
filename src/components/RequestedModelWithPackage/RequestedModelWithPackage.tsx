"use client";
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { submitForm } from "../../services/api";

type RequestModalProps = {
  show: boolean;
  onHide: () => void;
  fixedPackage: string; 
};

const RequestedModelWithPackage = ({ show, onHide, fixedPackage }: RequestModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    // Reset form when modal opens
    if (show) {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }
  }, [show]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await submitForm({
        username: formData.fullName,
        email: formData.email,
        PhoneNumber: formData.phone,
        CompanyName: formData.company,
        message: formData.message,
        selectedPackage: fixedPackage,
      });
      
      if (response.success) {
        alert("Demo request submitted successfully!");
        onHide();
      } else {
        alert(response.message || "Failed to submit demo request.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the request.");
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Request a Demo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="p-3 rounded-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              placeholder="Your Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Phone Number</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Company Name</label>
            <input
              type="text"
              name="company"
              className="form-control"
              placeholder="Your Company Name"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Selected Package</label>
            <input
              type="text"
              className="form-control"
              value={fixedPackage}
              disabled
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Message</label>
            <textarea
              name="message"
              className="form-control"
              rows={4}
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <Button
            type="submit"
            className="w-100 fw-semibold"
            style={{
              backgroundColor: "#16A085",
              border: "none",
              borderRadius: "10px",
              padding: "12px 0",
            }}
          >
            Submit Request
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default RequestedModelWithPackage;
