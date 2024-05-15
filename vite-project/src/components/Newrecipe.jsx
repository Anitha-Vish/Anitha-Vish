import React, { useState, useEffect } from "react";
import { createClient } from "contentful";

const ContentfulComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const client = createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
      accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    });

    const fetchData = async () => {
      try {
        const response = await client.getEntries({ content_type: "cookBook" });
        console.log("Fetched data:", response.items);
        setData(response.items);
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
      }
    };

    fetchData();

    return () => {
      // Cleanup
    };
  }, []); // Empty dependency array means it runs only once after the initial render

  return (
    <div>
      <h1>Contentful Data</h1>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.sys.id}>{item.fields.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ContentfulComponent;