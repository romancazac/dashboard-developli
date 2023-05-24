import { Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,

} from "@material-tailwind/react";
import { CheckboxC } from "../CheckboxC/CheckboxC";



export default function Spollers({ item,handleOpen,open,mount }) {
 


  return (
    <Fragment>
           
      <Accordion open={open === item.id}
        icon={<span className={`${item.id === open ? "rotate-180" : ""
          } text-[6px] text-gray-400 icon-arr-filter block mt-[8px]`} />}>
        <AccordionHeader onClick={() => handleOpen(item.id)} className='border-0 text-[16px] py-[10px]'>
          {item.title}
        </AccordionHeader>
        <AccordionBody>
          {
            item?.items?.map((data,i) =>
            
              <div className="flex items-center" key={data.id}>
                <div className="flex-auto">
                  <CheckboxC {...data} label={item.label} mount={mount } />
                </div>
                <span className="flex items-center  bg-[rgba(56,96,226,0.05)] px-[10px] py-[5px] h-[24px] rounded-[10px]">{data.count}</span>
              </div>

            )
          }
        </AccordionBody>

      </Accordion>


    </Fragment>
  );
}