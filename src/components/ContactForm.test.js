import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders correctly", () => {
  render(<ContactForm />);
});

// query for the form inputs
test("Each form field renders to the DOM", ()=> {
  const { getByText } = render(<ContactForm />);

  //Act
  const firstName = getByText("First Name*");
  const lastName = getByText("Last Name*");
  const email = getByText("Email*");
  const message = getByText("Message");
})