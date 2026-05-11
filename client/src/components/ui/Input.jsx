const Input = ({ type, placeholder }) => {
  return (
    <input className="bg-[#22222740] rounded-full w-full h-12 px-4 placeholder:uppercase focus:outline-2 outline-[#22222740] transition" type={type} placeholder={placeholder} />
  )
}

export default Input