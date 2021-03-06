import React, {Component} from "react";

class SignIn extends Component {

    onRegister = () => {
		this.props.onChangeRoute('register');		
    }
    
    onSubmit = () => {
        this.props.onChangeRoute('home');
    }

	
	render(){
		const {onChangeRoute} = this.props;

		return(
			<article className="br2 ba dark-gray b--black-10 mv4 w-80 w-80-m w-80-l  center">
				<main className="pa4 black-80 shadow-5">
				  <div className="measure center">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f3 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="email" 
				        	name="email-address"  
				        	id="email-address"
			        	/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	name="password"  
				        	id="password"	 
			        	/>
				      </div>
				    </fieldset>
				    <div className="">
				      <input 
				      	onClick={this.onSubmit}
				      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      	type="submit" 
				      	value="Sign in"/>
				    </div>
				    <div className="lh-copy mt3">
				      <a 
				      	onClick={this.onRegister}
				      	href="#0" 
				      	className="f6 link dim black db underline pointer"
				      	>Register</a>
				    </div>
				  </div>
				</main>
			</article>
		);
	}
}

export default SignIn;