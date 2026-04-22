import { useEffect, useState, createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/tasks.json");
      const json = await response.json();
      setTasks(json);
      setLoading(false);
    };
    fetchData();
    // const [loading, setLoading] = useState(true);
    // fetch("/data/tasks.json")
    //   .then((res) => {
    //     console.log(res);
    //     if (!res.ok) {
    //       throw new Error("Network error");
    //     } else {
    //       setLoading(true);
    //     }
    //     return res.json();
    //   })
    //   .then((json) => setTasks(json));
  }, []);

  return <DataContext value={{ tasks, loading }}>{children}</DataContext>;
}
