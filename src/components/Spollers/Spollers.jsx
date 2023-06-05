import { Fragment, useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Spinner,

} from "@material-tailwind/react";
import { CheckboxC } from "../CheckboxC/CheckboxC";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { useAppServices } from "../../services/appServices";
import { calcTotalJob } from "../../utils/calcTotalJob";



export default function Spollers({ item, handleOpen, open, mount }) {

  const { getAllJobs, loading } = useAppServices()
  const [allJobs, setAllJobs] = useState([])


  useEffect(() => {
    getAllJobs().then((res) => setAllJobs(res))
  }, [])

  return (
    <Fragment>

      <Accordion
        open={open === item.id}
        icon={<ChevronDownIcon className={`${item.id === open ? "rotate-180" : ""
          } w-5 block `} />}>
        <AccordionHeader onClick={() => handleOpen(item.id)} className='border-0 text-[16px] py-[10px]'>
          {item.title}
        </AccordionHeader>
        <AccordionBody>
          {
            item?.items?.map((data) =>

              <div className="flex items-center" key={data.id}>
                <div className="flex-auto">

                  <CheckboxC {...data} label={item.label} mount={mount} />
                </div>
                <span className="flex items-center  bg-[rgba(56,96,226,0.05)] px-[10px] py-[5px] h-[24px] rounded-[10px]">
                  {calcTotalJob(allJobs, item.label, data.title)}
                </span>
              </div>

            )
          }
        </AccordionBody>

      </Accordion>


    </Fragment>
  );
}