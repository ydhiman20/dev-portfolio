function Heading({ heading, subHeading }) {
  return (
    <div className="text-center max-w-screen-md m-auto">
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        {heading}
      </h2>
      {subHeading && (
        <p className="mt-3 mb-3 text-xl dark:text-white">{subHeading}</p>
      )}
    </div>
  );
}

export default Heading;
