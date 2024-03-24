import Image from "next/image";
import { Inter } from "next/font/google";
import { trpc } from "../../utils/trpc";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [firstName, setFirstName] = useState("Robiul");
  const [lastName, setLastName] = useState("Alam");

  const { data, isLoading, refetch } = trpc.example.getName.useQuery({
    firstName,
    lastName,
  });

  const [firstNameN, setFirstNameN] = useState("Robiul");
  const [lastNameN, setLastNameN] = useState("Alam");

  const fetchData = () => {
    setFirstName(firstNameN);
    setLastName(lastNameN);
    // refetch({ firstName: firstNameN, lastName: lastNameN }); // Sending new payload
  };
  return (
    <main>
      <div>
        <h1>{data?.fullName}</h1>
        {isLoading && <h1>Is Loading ....</h1>}
        <input
          type="text"
          className="w-full h-10 bg-gray-100 text-black block mt-1"
          onChange={(e) => setFirstNameN(e.target.value)}
        />
        <input
          type="text"
          className="w-full h-10 bg-gray-100 text-black block mt-1"
          onChange={(e) => setLastNameN(e.target.value)}
        />
        <button onClick={fetchData}>Fetch</button>
      </div>
    </main>
  );
}
