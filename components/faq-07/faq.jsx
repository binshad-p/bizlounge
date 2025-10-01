import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { PlusIcon } from "lucide-react";
import { faq } from "@/constant";


const FaqBizlounge = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 padding-x">
      <div className="w-full max-w-2xl ">
        <div className="px-4">
          <h2
            className=" text-[#2d3845] font-light text-[40px] max-sm:text-2xl text-center  sm:max-lg:text-2xl leading-[1.15]!  tracking-tighter">
            Frequently Asked<span className="font-semibold"> Questions</span>
          </h2>
          <p className="mt-2text-base text-muted-foreground text-[#898A9C] font-light text-center ">
            Quick answers to common questions about our services.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-8 sm:mt-10 space-y-4"
          defaultValue="question-0">
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="bg-accent py-1 px-4 rounded-xl border-none bg-[#f5f8fb]  border border-[#e5e5e5] ">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between pt-4 pb-3 font-semibold tracking-tight transition-all  [&[data-state=open]>svg]:rotate-45 text-[#2D3845] text-[22px]  max-sm:text-base sm:max-lg:text-base",
                    "text-start text-lg ",

                  )}>
                  {question}
                  {/* class=" text-[#2D3845] text-[22px] font-light max-sm:text-base sm:max-lg:text-base" */}
                  <PlusIcon
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 cursor-pointer" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-base text-muted-foreground text-[#898A9C] font-light">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqBizlounge;
