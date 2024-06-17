
const Pagination = () => {
  return (
    <section className="container mx-auto flex justify-center items-center my-8">
      <button className="mr-2 px-2 py-1 border border-gray-300 rounded">
        Previous
      </button>
      <span className="mx-2">Page 1 of 10</span>
      <button className="ml-2 px-2 py-1 border border-gray-300 rounded">
        Next
      </button>
    </section>
  );
};

export default Pagination;
