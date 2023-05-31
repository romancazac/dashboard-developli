

function ButtonIcon({icon, className, onClick,children}) {
   
    return (
        <button onClick={onClick} className={`${className} flex items-center justify-center rounded-full border border-[#F3F3F3] 
        ease-in-out duration-300 hover:border-[#47D18C] hover:text-green`}>
            <span className={icon}>{children}</span>
        </button>
    );
}

export default ButtonIcon;