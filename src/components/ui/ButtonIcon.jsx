

function ButtonIcon({icon, className, onClick}) {
   
    return (
        <button onClick={onClick} className={`${className}  rounded-full border border-[#F3F3F3] 
        ease-in-out duration-300 hover:border-[#47D18C] hover:text-green`}>
            <span className={icon}></span>
        </button>
    );
}

export default ButtonIcon;