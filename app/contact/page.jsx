import Enquiry from "@/components/Enquiry";
import Banner from "@/containers/Contact/Banner";
import ContactDetails from "@/containers/Contact/ContactDetails";

const page = () => {
  return (
    <div className="pt-[6.8rem] ">
      {/* //header */}
      <Banner />

      <ContactDetails />

      <Enquiry />
    </div>
  );
};

export default page;
