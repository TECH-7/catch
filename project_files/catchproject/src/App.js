import { useState } from 'react';
import axios from 'axios';
import './App.css';
 
function App() {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [mobile,setMobile] = useState('');
  const [email,setEmail] = useState('');
  const [acceptTerms, setAcceptTerms] = useState('');
  const [marketing, setMarketing] = useState('');
  const [notes, setNotes] = useState('');
 
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleSubmit = () => {
    if(firstName.length === 0){
      alert("Name has left Blank!");
    }
    else if(mobile.length === 0){
      alert("Mobile has left Blank!");
    }
    else if(email.length === 0 || !validateEmail(email)){
      alert("Email is not Valid!");
    }
    else if(acceptTerms.length === 0){
      alert("Terms has not been accepted!");
    }    
    else{
      const url = 'http://localhost/catchphp/lead_submit.php';
      let fData = new FormData();
      fData.append('firstName', firstName);
      fData.append('lastName', lastName);
      fData.append('mobile', mobile);
      fData.append('email', email);
      fData.append('acceptTerms', acceptTerms);
      fData.append('marketing', marketing);
      fData.append('notes', notes);
      axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
    }
  }
 
  return (
    <div className="vh-100 gradient-custom">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card">
              <div className="card-body p-5">
                <h3 className="text-center mb-5">Lead Capture Form</h3>
                <form>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="name">First Name</label>
                    <input type="text" className="form-control form-control-lg" name="firstName" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="name">Last Name</label>
                    <input type="text" className="form-control form-control-lg" name="lasttName" id="lasttName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="email">Your Email</label>
                    <input type="email" className="form-control form-control-lg" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="mobile">Mobile Number</label>
                    <input type="text" className="form-control form-control-lg" name="mobile" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="marketing">Marketing Referral Data</label>
                    <input type="text" className="form-control form-control-lg" name="marketing" id="marketing" value={marketing} onChange={(e) => setMarketing(e.target.value)} />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="notes">Notes</label>
                    <textarea className="form-control form-control-lg" name="notes" id="notes" onChange={(e) => setNotes(e.target.value)}>{notes}</textarea>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="1" id="acceptTerms" name="acceptTerms" onChange={(e) => setAcceptTerms(e.target.value)} />
                    <label className="form-check-label" for="acceptTerms">
                      I accept the <a href="#!" className="text-body"><u>Terms of service</u></a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center">
                  <input type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-white" name="submit" id="submit" value="Send" onClick={handleSubmit} />
                  </div>
 
                </form>
            </div>
            </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
 
export default App;