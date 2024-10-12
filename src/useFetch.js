import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);

    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not fetch data from the server!");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Error:", error);
          setIsLoading(false);
        }
      });

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
