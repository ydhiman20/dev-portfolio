function Heading({ heading, subHeading }) {
  return (
    <div className="text-center max-w-screen-md m-auto">
      <h2 className="text-theme text-3xl md:text-4xl font-bold -tracking-[0.3rem]">
        {heading}
      </h2>
      {subHeading && (
        <p className="mt-3 mb-3 text-base  dark:text-white">{subHeading}</p>
      )}
    </div>
  );
}

export default Heading;
