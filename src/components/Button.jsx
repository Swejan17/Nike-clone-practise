

const Button = ({label,iconURL,backgroundcolor,bordercolor,textcolor,fullwidth}) => {
  return (
    <button className= {`flex justify-center items-center px-7 py-4 border font-montserrat text-lg leading-none ${backgroundcolor ? `${backgroundcolor} ${bordercolor} ${textcolor} $` :"bg-coral-red text-white border-coral-red"}  rounded-full ${fullwidth &&'w-full'}  `}>
        {label}
        {iconURL?<img src={iconURL} alt="Arrow Right" className="ml-2 rounded-full w-5 h-5"/>:<></>}
    </button>
    )
}

export default Button
