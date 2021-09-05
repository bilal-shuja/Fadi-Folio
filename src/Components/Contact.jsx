import React from "react";
import { useForm } from '@formspree/react';
const Contact = () => {
  const [state, handleSubmit] = useForm("xgerrzzn");
  if (state.succeeded) {
  return <p className="alert-warning text-center" style={{fontSize:"30px"}}>Your Message has been Sucessfully Delivered!</p>;
}
     
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form action="https://formspree.io/f/xgerrzzn" method="POST" onSubmit={handleSubmit}>
              <div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows={3}
                    defaultValue={""}
                    required
                  />
                </div>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-outline-primary" disabled={state.submitting}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
