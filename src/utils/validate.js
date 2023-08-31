
export const checkValidData= (email,password)=>{
  const isEmailVaild =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
  const isPassValid = /^(?= .*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-z]).{8,}$/.test(password)
  
  if(!isEmailVaild) return "Email Id not Valid"
  if(!isPassValid)  return "Password is not valid"

  return null;
}