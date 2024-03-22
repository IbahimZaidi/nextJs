//
//
//
import getDAtaId from "@/src/helper/functions/getDataId";

export async function generateMetadata({ params }) {
  const postIdEleme = await getDAtaId(params.id);

  return {
    title: postIdEleme.postOfId[0].title,
    description: postIdEleme.postOfId[0].body,
  };
}

const layout = ({ children }) => {
  return <div>{children}</div>;
};

export default layout;
