import React from "react";

function Contact() {
  return (
    <>
      <div id="contact">
        <h1>Make a Booking</h1>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Phone" required />
          <input type="Submit" value="Book Now" />

        </form>
      </div>
    </>
  );
}

export default Contact;