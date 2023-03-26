import { useState } from 'react';
import './app.css';
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [userCaptcha, setUserCaptcha] = useState('');
  const [nightMode, setNightMode] = useState(false);
  const refreshHandler = (event) =>{
    event.preventDefault();
    setCaptcha(generateCaptcha);
  }
  return (
    <div className="app">
        <button className={`switchMode ${nightMode? 'moon':'sun'}`}  onClick={()=>setNightMode(!nightMode)}>
          { 
            nightMode?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>

          }
        </button>
        <form className='formContainer'>
          <h1 className='header'>Sign Up</h1>
          <div className='singleInput'>
            <label htmlFor="name">
              Name:
            </label> 
            <input
              name='name' 
              type="text" 
              placeholder="John Doe" 
              value={name} 
              onChange={(event)=>setName(event.target.value)}
            />
          </div>
          <div className='singleInput'>
            <label htmlFor="email">
              Email:
            </label> 
            <input 
              name='email'
              type="email" 
              placeholder="johndoe@gmail.com" 
              value={email} 
              onChange={(event)=>setEmail(event.target.value)}
            />
          </div>
          <div className='singleInput'>
            <label htmlFor="password">
              Password:
            </label> 
            <input 
              name='password'
              type="password" 
              placeholder="********" 
              value={password} 
              onChange={(event)=>setPassword(event.target.value)}
            />
          </div>
          <div className='captcha'>
              <p>{captcha}</p>
              <div className='cover' onClick={refreshHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
          </div>
          <div className='singleInput'>
            <label htmlFor="userCaptcha">
              Enter Captcha:
            </label> 
            <input 
              name='userCaptcha'
              type="text" 
              value={userCaptcha} 
              onChange={(event)=>setUserCaptcha(event.target.value)}
            />
          </div>
          <div className='singleInput'>
            <button className='btn' type='submit'>Submit</button>
          </div>
        </form>
    </div>
  )
}

export default App;

const generateCaptcha = () =>{
  const KEY = 'abcdefghijklmnopqrstuvwxyz0123456789@!#$%^&*_-+:~.';
  let value='';
  for(let i=0;i<8;i++){
    value+=KEY[Math.floor(Math.random()*KEY.length)];
  }
  return value;
}
