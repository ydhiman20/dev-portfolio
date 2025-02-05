function Heading({ heading, subHeading }) {
  return (
    <div className="text-center max-w-screen-md m-auto">
      <h2 className="text-theme text-2xl md:text-3xl font-bold md:-tracking-[0.2rem] -tracking-[0.1rem] dark:text-white">
        {heading}
      </h2>
      {subHeading && (
        <p className="mt-3 mb-3 text-base  dark:text-white">{subHeading}</p>
      )}
    </div>
  );
}

export default Heading;
