import Heading from "../components/Heading";
import TimeLine from "../components/Timeline";

function Page() {
  return (
    <div className="container m-auto">
      <Heading
        heading="Timeline"
        subHeading="A chronological overview of key milestones and notable moments so far. For more details, feel free to visit my LinkedIn."
      />
      <div className="my-20"></div>
      <TimeLine />
    </div>
  );
}

export default Page;
