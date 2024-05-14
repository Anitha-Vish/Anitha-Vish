import { createClient } from "contentful";

async function getStaticProps() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    const res = await client.getEntries({ content_type: "cookBook" });
    console.log("Fetched data:", res.items);

    //    return {
    //     props: {
    //       cookBooks:res.items,
    //     },
    //    };

    // } catch (error) {

    // 	console.error("Error fetching data from Contentful:", error);

    //  return {
    //      props: {
    //         cookBooks: [],
    //       },

    //   };
    //   }
    //   }
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
  }
}

getStaticProps();

// function Newrecipe({ cookBooks }) {
//   console.log(cookBooks);

//   return <div>Recipe</div>;
// }

function Newrecipe() {

return <div>Recipe</div>;
}
export default Newrecipe;
