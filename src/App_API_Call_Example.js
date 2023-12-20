import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);  
  const [multipersons, setMultiPersons] = useState("");
  // [person1, person2, person3]

  const fetchData = async (pageIndex) => {
    try {
      const response = await fetch("https://randomuser.me/api?" + pageIndex);
      if (!response.ok) {
        throw new Error("API issue");
      }

      const data = await response.json();
      setPersons([...persons, ...data.results]);
      setLoading(false);
      console.log(persons);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading......</div>;

  const getNext = async () => {
    const nextIndex = index + 1;
    await fetchData(nextIndex);
    setIndex(nextIndex);
    console.log(persons);
  };

  const getPrev = () => {
    if(index === 0){
      alert("You are at the beginning of the page!");
    } else {
      setIndex(index - 1);
    }
  };

  const get10 = () => {
    for (let i = 0; i < 10 && i <= index; i++){
      if( i == 0){
        multipersons = i + ": " + persons[i].name.first;
      } else {
        multipersons = multipersons + "<br/>" + i + ": " + persons[i].name.first;
      }
      
      setMultiPersons(multipersons);
      console.log(i + ": " + persons[i].name.first);
    }
  };

  return (
    <div className="App">
      <div>
        {persons[index].name.first + " " + persons[index].name.last  + ", " + 
        persons[index].location.street.number + " " + persons[index].location.street.name + ", " +
        persons[index].location.city + ", " + persons[index].location.state + ", " +
        persons[index].location.country + ", " + persons[index].location.postcode + ", " + persons[index].email + " "
        } <img src={persons[index].picture.thumbnail} alt="person's picture" />
      </div>
{/*       <div>
        {" "}
        <img src={persons[index].picture.large} alt="person's picture" />
</div> */}
      <p/>
      <div>
        <button onClick={getPrev}>Prev</button>
        <button onClick={getNext}>Next</button>
        <button onClick={get10}>Get 10</button>
      </div>
      <div>
        {multipersons};
      </div>
      <div>Page {index}</div>
    </div>
  );
}