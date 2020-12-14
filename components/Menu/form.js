import {Component} from "react"
import TextareaAutosize from "react-autosize-textarea"
import axios from "axios"
//[1]

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      mail: "",
      formContent: "",
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onSub = this.onSub.bind(this)
  }
  
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  
  async handleSubmit(e) {
    e.preventDefault()
    
    const {name, mail, formContent} = this.state
    
    const form = await axios.post('/api/form',{
      name,
      mail,
      formContent
    })
    }
  onSubmit(e){
    e.preventDefault()
    this.setState({submitted: true})
  }
  onSub(){
    if(this.submitted)  {window.location='THE REDIRECT LINK HERE';}
  }
  
  render() {
    
    return (
      <div>
        <iframe name="hidden_iframe" id="hidden_iframe" style={{display:"none"}}
                onLoad={this.onSub}/>
  
        <form className="form" method="post" target="hidden_iframe"
              onSubmit={this.onSubmit} action="https://forms.gle/5J2rhrKEVZmHPNYB8">
          <div className="grid">
            <div className="col-8">
              <h2>Contact form title</h2>
              <p>Contact form introduction text</p>
            </div>
          </div>
          <div className="grid">
            <div className="col-4">
              <input
                type="text"
                placeholder="Name"
                // value={this.name}
                // onChange={this.handleChange}
                name="entry.2005620554"
              />
            </div>
            <div className="col-4">
              <input
                type="email"
                placeholder="E-Mail"
                // value={this.mail}
                // onChange={this.handleChange}
                name="entry.1045781291"/>
            </div>
          </div>
          <div className="grid">
            <div className="col-4">
              <TextareaAutosize
                name="entry.1318606386"
                placeholder="Message"
                // value={this.formContent}
                // onChange={this.handleChange}
                // style={{
                //   minHeight: "48px",
                //   width: "100%",
                //   borderRadius: "4px",
                //   margin: "8px 0px",
                //   resize: "none",
                //   padding: "0px",
                //   paddingBottom: "14px",
                //   WebkitAppearance: "none",
                //   MozAppearance: "none"
                // }}
                />
              <div className="col-4">
                <input
                  type="text"
                  placeholder="tel"
                  // value={this.mail}
                  // onChange={this.handleChange}
                  name="entry.1166974658"/>
              </div>
            </div>
            <div className="col-8">
  
              <input type="submit" value="Send" />
            </div>
          </div>
          {/*<style jsx>{`*/}
          {/*  .grid {*/}
          {/*    display: flex;*/}
          {/*    flex-direction: row;*/}
          {/*    flex-wrap: wrap;*/}
          {/*    max-width: 1280px;*/}
          {/*    margin-right: auto;*/}
          {/*    margin-left: auto;*/}
          {/*    padding-left: 12px;*/}
          {/*    padding-right: 12px;*/}
          {/*  }*/}
          
          {/*  .col-4,*/}
          {/*  .col-8 {*/}
          {/*    padding: 8px 12px;*/}
          {/*    box-sizing: border-box;*/}
          {/*  }*/}
          
          {/*  .col-4 {*/}
          {/*    flex-basis: 50%;*/}
          {/*    max-width: 50%;*/}
          {/*  }*/}
          
          {/*  .col-8 {*/}
          {/*    flex-basis: 100%;*/}
          {/*    max-width: 100%;*/}
          {/*  }*/}
          
          {/*  @media only screen and (max-width: 768px) {*/}
          {/*    .grid {*/}
          {/*      flex-direction: column;*/}
          {/*      padding-left: 0px;*/}
          {/*      padding-right: 0px;*/}
          {/*    }*/}
          
          {/*    .col-4,*/}
          {/*    .col-8 {*/}
          {/*      padding-left: 24px;*/}
          {/*      padding-right: 24px;*/}
          {/*      flex-basis: 100%;*/}
          {/*      max-width: 100%;*/}
          {/*    }*/}
          {/*  }*/}
          
          {/*  input[type=text], input[type=email] {*/}
          {/*    height: 48px;*/}
          {/*    width: 100%;*/}
          {/*    border: none;*/}
          {/*    border-radius: 0px;*/}
          {/*    border-bottom: 1px solid #121212;*/}
          {/*    margin: 8px 0px;*/}
          {/*    box-shadow: none;*/}
          {/*    -webkit-appearance: none;*/}
          {/*    -moz-appearance: none;*/}
          {/*    padding: 0px;*/}
          {/*    outline: none;*/}
          {/*  }*/}
          
          {/*  ::placeholder {*/}
          {/*    color: #C8CBCE;*/}
          {/*  }*/}
          
          {/*  ::-ms-input-placeholder {*/}
          {/*    color: #C8CBCE;*/}
          {/*  }*/}
          
          {/*  button {*/}
          {/*    padding: 0px 24px;*/}
          {/*    height: 48px;*/}
          {/*    background-color: #F83850;*/}
          {/*    margin: 16px 0px;*/}
          {/*    border: none;*/}
          {/*    border-radius: 0px;*/}
          {/*    cursor: pointer;*/}
          {/*    color: #fff;*/}
          {/*  }*/}
          
          {/*  .disabled {*/}
          {/*    background-color: #fff;*/}
          {/*    color: #121212;*/}
          {/*    cursor: auto;*/}
          {/*    padding-left: 0px;*/}
          {/*  }*/}
          {/*`}</style>*/}
        </form>
      </div>
    )
  }
  
}

export default Contact
