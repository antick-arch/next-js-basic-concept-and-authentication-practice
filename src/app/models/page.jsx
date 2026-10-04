import React from "react";

const ModelPage = async () => {
  // const res = await fetch('http://localhost:8000/application/',{cache:'no-cache'});
  //   const res = await fetch("http://localhost:8000/application/", {
  //     cache: "no-store",
  //   });
  const res = await fetch("http://localhost:8000/application/", {
    next: {
      revalidate: 10,
    },
  });

  const data = await res.json();

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl text-center font-semibold my-3">
        This is model secton
      </h2>
      <div className="grid lg:grid-cols-5 gap-5">
        {data.map((app) => (
          <div
            key={app.id}
            className="bg-black text-white p-5 space-y-3 rounded-2xl"
          >
            <h2 className="text-xl">{app.title}</h2>
            <p>{app.companyName}</p>
            <div className="flex justify-between">
              <button className="text-purple-500 text-xl">{app.reviews}</button>
              <button className="btn">{app.ratingAvg}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelPage;
