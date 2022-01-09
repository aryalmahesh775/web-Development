const test = () => {
  return (
    <>
      <div>
        <h1 className="bg-amber-400 text-2xl">test Page</h1>
        <div className="flex justify-center h-20">
          <div className="container my-4 w-[500px] bg-red-100 border-solid border-2 border-orange-600 flex items-center justify-center">
            this is inside container
          </div>
        </div>
        <div className="my-20 mx-auto flex justify-center bg-blue-100 w-[50vw] items-center shadow-2xl h-[100px]">
          <p className="bg-green-300 h-[50px] flex items-center ">
            this is test
          </p>
        </div>
      </div>
    </>
  );
};

export default test;
