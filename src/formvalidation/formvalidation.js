import react,{Component} from 'react';
class FormValidation extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            useremail:'',
            userpassword:'' ,
            usernameerr:'',
            usermailerr:'',
            userpasserr:'',
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.formSubmit=this.formSubmit.bind(this);

    }
    handleInputChange(event){
        const name=event.target.name;
        const value=event.target.value;
        this.setState({
            [name]:value
         } );
    }
    formSubmit(){
             if(this.isFormValid())
             {
                alert('form valid');
             }
             else{
                alert('form invalid');
             }
    }
    isFormValid(){
        let nameerrmsg='';
        let mailerrmsg='';
        let passerrmsg='';
        if(this.state.username.length<5){
             nameerrmsg='please enter valid name';
        }
        if(this.state.useremail.length<5){
            mailerrmsg='please enter valid email';
       }
       if(this.state.userpassword.length<5){
        passerrmsg='please enter valid password';
   }
   this.setState({
    usernameerr:nameerrmsg,
    usermailerr:mailerrmsg,
    userpasserr:passerrmsg,
   });
    return !nameerrmsg && !mailerrmsg && !passerrmsg;
    }
    render(){
    return(
        <>
          <div>
            <h3>Form validation in React refers to the process of validating user input within a form to ensure that it meets specific criteria or constraints before it is submitted to the server or processed further. It is a critical part of web development, as it helps ensure data integrity, security, and a good user experience. </h3>
            <h1>example</h1>
            <label>Name:</label>
            <input type='text' name='username' id='username' placeholder='username'
            onChange={this.handleInputChange}/>
            <span style={{color:'red'}}>{this.state.usernameerr}</span>
          </div>
          <div>
            <label>email:</label>
            <input type='text' name='useremail' id='useremail' placeholder='useremail'
            onChange={this.handleInputChange}/>
            <span style={{color:'red'}}>{this.state.usermailerr}</span>
          </div>
          <div>
            <label>password:</label>
            <input type='text' name='userpassword' id='userpassword' placeholder='userpassword'
            onChange={this.handleInputChange}/>
            <span style={{color:'red'}}>{this.state.userpasserr}</span>
          </div>
          <div>
            <button onClick={this.formSubmit}>submit</button>
          </div>
          <span>{this.state.username}</span>
          <br/>
          <span>{this.state.useremail}</span>
          <br/>
          <span>{this.state.userpassword}</span>
          <br/>
        </>
    );
    }
}
export default FormValidation;