import React from "react";
import { render, fireEvent, getByRole, getByAltText }  from '@testing-library/react'
import ContactForm from "./ContactForm";

test("renders Contactform without crashing", () => {
  render(<ContactForm />);
});

test("Each form field renders to the DOM", () => {
  //Arrange
  const {getByLabelText} = render(<ContactForm />);

  const fName = getByLabelText(/first name/i);
  const fName = getByLabelText(/last name/i);
  const email = getByLabelText(/email/i);
  const message = getByLabelText(/message/i);


  //Assert
  expect(fName).toBeInTheDocument()
  expect(fName).toBeInTheDocument()
  expect(email).toBeInTheDocument()
  expect(message).toBeInTheDocument()
})