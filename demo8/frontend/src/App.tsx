import { useEffect, useState } from "react";

export default function App() {
  const [dataArray, setdataArray] = useState([]);
  useEffect(() => {
    loadData();
  });

  const loadData = async () => {
    const response = await fetch("http://localhost:8080");
    setdataArray(await response.json());
  };

  return (
    <div>
      <ul>
        {dataArray.map((e: { _id: string; name: string }) => (
          <li key={e._id}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
}
