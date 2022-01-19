import React from 'react';
import styled from 'styled-components';
import addToMailchimp from "gatsby-plugin-mailchimp"


// markup
class Newsletter extends React.Component {

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
        <div className='container'>
        <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="800" className="detail">{this.state.message}</p>
          <div className='links' data-aos="fade-up" data-aos-delay="700" data-aos-duration="800">
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
          <div className='text' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
              <ul>
                  <li ><a target='_blank' rel="noreferrer" href='mailto:HELLO@ALURE.AGENCY'>Email ↗</a></li>
                  <li ><a target='_blank' rel="noreferrer" href='https://www.instagram.com/alureagency/?hl=es'>Instagram ↗</a></li>
                  <li ><a target='_blank' rel="noreferrer" href='https://www.facebook.com/alureagency'>Facebook ↗</a></li>
              </ul>
              <button className='close'>
                <p>close <span>x</span></p>
              </button>
          </div>
        </div>
        

      </NewsletterWrapper>

    )
  }
}

const  NewsletterWrapper = styled.section`
position: absolute;
right: 25px;
top: 50%;
transform: translateY(-50%);
width: calc(33vw - 20px);
padding: 25px 50px;
background-color: var(--gray);
color: var(--dark-gray);
@media (max-width: 860px) {
    display: none;
}
@media (min-width: 1500px) {
  padding: 50px;
  width: calc(33vw - 16px);
}
p {
    margin-bottom: 20px;
}
form {
    display: flex;
    width: 100%;
    input {
        padding: 5px 0;
        background: none;
        outline: none;
        border: none;
        border-bottom: solid 1px var(--dark-gray);
        color: var(--dark-gray);
        width: 70%;
        ::placeholder,
        ::-webkit-input-placeholder {
            color: var(--dark-gray);
            opacity: 0.25;
            @media (min-width: 1500px) {
                font-size: 1vw;
            }
            @media (min-width: 1640px) {
                font-size: 1vw;
            }
        }
        :-ms-input-placeholder {
            color: var(--dark-gray);
            opacity: 0.25;
            @media (min-width: 1500px) {
                font-size: 1vw;
            }
            @media (min-width: 1640px) {
                font-size: 1vw;
            }
        }
    }
    input:focus, button:focus {
        outline: 0;
    }
    
    button {
        width: 30%;
        text-align: right;
        color: var(--dark-gray);
        border-bottom: solid 1px var(--dark-gray);
    }
}
.text {
  display: flex;
  justify-content: space-between;
    ul {
        margin-top: 65px;
        li {
            display: inline-block;
            margin-right: 15px;
            a {
                color: var(--dark-gray);
            }
        }
    }
    .close {
      align-self: flex-end;
      cursor: pointer;
      p {
        margin-bottom: 0;
        text-transform: uppercase;
        font-size: 13px;
        span {
          text-transform: lowercase;
        }
      }
    }
}
`

export default Newsletter