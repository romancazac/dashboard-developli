import { Carousel, Typography } from "@material-tailwind/react";

export default function CarouselAuth() {
   return (
      <Carousel prevArrow={false} nextArrow={false} className="h-auto slider-auth">
         <div className="relative ">


            <Typography
               variant="h3"
               color="blackColor"
               className="mb-2 text-3xl md:text-4xl lg:text-5xl"
            >
               The Beauty of Nature
            </Typography>
            <Typography

               color="blackColor"
               className="mb-12  "
            >
               It is not so much for its beauty that the forest makes a claim
               upon men&apos;s hearts, as for that subtle something, that
               quality of air that emanation from old trees, that so
               wonderfully changes and renews a weary spirit.
            </Typography>



         </div>
         <div className="relative ">


            <Typography
               variant="h3"
               color="blackColor"
               className="mb-2 text-3xl md:text-4xl lg:text-5xl"
            >
               The Beauty of Nature
            </Typography>
            <Typography

               color="blackColor"
               className="mb-12  "
            >
               It is not so much for its beauty that the forest makes a claim
               upon men&apos;s hearts, as for that subtle something, that
               quality of air that emanation from old trees, that so
               wonderfully changes and renews a weary spirit.
            </Typography>



         </div>
         <div className="relative ">


            <Typography
               variant="h3"
               color="blackColor"
               className="mb-2 text-3xl md:text-4xl lg:text-5xl"
            >
               The Beauty of Nature
            </Typography>
            <Typography

               color="blackColor"
               className="mb-12  "
            >
               It is not so much for its beauty that the forest makes a claim
               upon men&apos;s hearts, as for that subtle something, that
               quality of air that emanation from old trees, that so
               wonderfully changes and renews a weary spirit.
            </Typography>



         </div>
      </Carousel>
   );
}