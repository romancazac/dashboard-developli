import { Checkbox, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setFilters } from "../../redux/slices/filterSlice";




export const CheckboxC = ({ title, label }) => {

   // const dispatch = useDispatch();
   // const { experience, category, employment, salary, location } = useSelector(state => state.filter)
   const [items, seItems] = useState([])
   
//    const handleCheckboxChange = (e, title) => {
//       const value = e.target.title
//       dispatch(setFilters({ title, value }));
//    };

//    useEffect(() => {
//       seItems([...experience, ...category, ...employment, ...salary, ...location]) 
//    }, [experience, category, employment, salary, location])

   return (

      <Checkbox
         id={title}
         className='hover:before:hidden checked:bg-green checked:border-0 border-grey'
         title={label}
         name={title}
         onChange={e => handleCheckboxChange(e, title)}
         // checked={items.some((i) =>  i === title ? true : false)}
         label={
            (
               <Typography
                  variant="small"
                  color="gray"
                  className=" font-normal"
               >
                  {title}

               </Typography>
            )

         }

         containerProps={{ className: "-ml-2.5 " }}

      />
   )
}