import React,{useState} from 'react'
import Modal from '../components/Modal'
import { Link,useNavigate } from 'react-router-dom';
import { post } from '../api/myBackend/myBackend';
import Loading from '../components/booking/Loading';
import Input from '../components/inputs/Input';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState('');

    let navigate = useNavigate();

    const handleSubmit =  (e) => {
      e.preventDefault();
      const userData = { email,password}
      setLoading(true)
      loginUser(userData)
    };

const loginUser = async (userData)=>{
try {
  const result = await post('login',userData)
  if(result.success){
    setLoading(false)
    localStorage.setItem("token", result.token);
    console.log(result.token)
    navigate('/')
  }
  else{
    setError(result.error)
 setLoading(false)
  }
} catch (err) {
  console.log(err) 
   setLoading(false)
   setError(err.message);
}
}

  return (
    <Modal>
         <form onSubmit={handleSubmit}>
          <h2 className='text-center text-2xl font-semibold'>Log In Form</h2>
              <div className="mb-4">
                <label className="block  text-gray-400 font-semibold mb-2" htmlFor="email">Email</label>
                <Input type='email'  placeholder='Enter your email'  id="email"  value={email} handelChange={setEmail} />
              </div>
              <div className="mb-4">
                <label className="block  text-gray-400 font-semibold mb-2" htmlFor="password">Password</label>
               <Input type="password" placeholder='Enter your password' id="password"  value={password}  handelChange={setPassword} />
              </div>
              {error && <div className="text-red-500 mb-4">{error}</div>}
              <button
                type="submit"
                className="bg-black text-white font-bold py-2 px-4 rounded shadow-lg"
              >
               {
                  loading?<Loading/> :"Log in"
                }
              
              </button>
              <p className='mt-4'>You don't have account <span className='text-blue-600 cursor-pointer'>  
              <Link to={'/register'}>
              Register
              </Link>
              
              </span></p>
            </form>
    </Modal>
  )
}

export default Login