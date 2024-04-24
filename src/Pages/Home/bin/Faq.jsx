import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { FlexCol } from "../../../Elements/Flex";

const Faq = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div>
      <FlexCol className="mt-12 items-center">
        <h1 className="mb-6 text-6xl font-semibold">FAQ</h1>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly growing. We&apos;re
            constantly making mistakes. We&apos;re constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
      </FlexCol>
    </div>
  );
};

export default Faq;
