import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <div className="flex justify-center items-center m-4">
      <div className="bg-white shadow-lg rounded-lg p-8  w-full text-center">
        <img
          src={data.avatar_url}
          alt={`${data.login}'s avatar`}
          className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-blue-600"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{data.login}</h1>
        <p className="text-lg text-gray-600">
          <span className="font-semibold">{data.bio}</span>
        </p>
        {/* <p className="text-lg text-gray-600">
          Following: <span className="font-semibold">{data.following}</span>
        </p> */}
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch(`https://api.github.com/users/bajpaisatvic`);
  return res.json();
};

//   const [data1, setData1] = React.useState([]);

//   useEffect(() => {
//     fetch(`https://api.github.com/users/bajpaisatvic`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData1(data);
//       });
//   }, []);
