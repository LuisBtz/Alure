import React from 'react'
import styled from 'styled-components';
import addToMailchimp from "gatsby-plugin-mailchimp"


// markup
class NewsletterFooter extends React.Component {

  constructor() {
    super()
    this.state = {
      message: "Subscribe to our newsletter for the latest updates & news directly to your mail.",
      name: "",
      email: "",
      result: null,
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(this.state.email, {
      FNAME: this.state.name,
    }) // listFields are optional if you are only capturing the email address.
      .then(data => {

        this.setState({ message: data.msg })
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data)
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
    this.setState({ email: "", name: "" })
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value })
  }

  render() {

    return (
      <NewsletterWrapper>

        <p className="detail">{this.state.message}</p>


        <div className='links'>
            <form className="subscribe" onSubmit={this.handleSubmit}>
                <input
                    type="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    name="EMAIL"
                    id="mce-EMAIL"
                    className="subscribe-email"
                    placeholder="Email"
                    required
                />
            <button className="btn_sent" type="submit">Subscribe</button>
            </form>
        </div>

      </NewsletterWrapper>

    )
  }
}

const  NewsletterWrapper = styled.section`
p {
    margin-bottom: 25px;
}
form {
    display: flex;
    width: 100%;
    input {
        padding: 5px 0;
        background: none;
        outline: none;
        border: none;
        border-bottom: solid 1px white;
        color: white;
        width: 70%;
        ::placeholder,
        ::-webkit-input-placeholder {
            color: white;
            opacity: 0.25;
        }
        :-ms-input-placeholder {
            color: white;
            opacity: 0.25;
        }
    }
    input:focus, button:focus {
        outline: 0;
    }
    
    button {
        width: 30%;
        text-align: right;
        color: white;
        border-bottom: solid 1px white;
    }
}
`

export default NewsletterFooter