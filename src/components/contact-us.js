import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0;
  flex: 1;
  
  label, button {
    font-size: 1.35rem;
    line-height: 145%;
  }

  textarea, input {
    display: block;
    width: 100%;
  }

  textarea {
    height: 75%;

    @media (max-width: 900px) {
      height: 63%
    }
  }
`;

const StyledLabel = styled.label`
  flex: 1;
`;

const encode = (data) => Object.keys(data)
  .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  .join("&");

const ContactUs = ({ data }) => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  }
  const [hasSubmitted, setHasSubmitted] = React.useState(false)
  const [formValues, setFormValues] = React.useState(initialValues)

  const handleSubmit = (e) => {
    const { email, name, message } = formValues;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact', email, name, message
      })
    })
      .then(() => {
        setFormValues(initialValues);
        setHasSubmitted(true)
      })
      .catch((error) => alert(error));
    e.preventDefault()
  }

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div style={{
      backgroundColor: 'black',
      color: "white",
      padding: '.5rem',
      display: 'flex',
    }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          border: `.334rem solid white`,
          padding: `.5rem`,
        }}
      >
        {!hasSubmitted && (
          <>
            <h3>Message Us</h3>
            <StyledForm
              autoComplete="on"
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="name">
                Name
          <input type="text" name="name" placeholder="Jerami Grant" onChange={handleChange} value={formValues.name} />
              </label>
              <label htmlFor="email">
                Email Address
          <input type="email" name="email" placeholder="trusttheprocess76@mail.com" required onChange={handleChange} value={formValues.email} />
              </label>
              <StyledLabel htmlFor='message'>
                Message
          <textarea></textarea>
              </StyledLabel>
              <button type="submit">submit</button>
            </StyledForm>
          </>
        )}
        {hasSubmitted && (
          <>
            <h3>Thanks for listening</h3>
            <p>We'll get back at ya!</p>
            <Img fixed={data.file.childImageSharp.fixed} />
          </>
        )}
      </div>
    </div >
  )
};

export default ContactUs