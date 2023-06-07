import { Checkbox, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/slices/jobsSlice";



export const CheckboxC = ({ title, label }) => {

   const dispatch = useDispatch();
   const {filter} = useSelector(state => state.jobs)   

   const handleCheckboxChange = (e, title) => {
      const value = e.target.title
      dispatch(setFilters({[value]:title}))

   };

   return (

      <Checkbox
         id={title}
         className='hover:before:hidden checked:bg-green checked:border-0 border-grey'
         title={label}
         name={title}
         onChange={e => handleCheckboxChange(e, title)}
         checked={filter.some((i) =>   Object.values(i).toString() === title ? true : false)}
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