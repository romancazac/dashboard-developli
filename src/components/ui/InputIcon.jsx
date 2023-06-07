

export default function InputIcon(props) {
   return (
      <div className="flex gap-3 rounded-xl border border-color-[#F3F3F3] w-full h-[54px] overflow-hidden p-3">
         {props.icon}
         <input {...props} type="text" name={props.name} placeholder={props.placeholder} className="w-full h-full  outline-none text-sm text-blackColor" />
      </div>
   );
}