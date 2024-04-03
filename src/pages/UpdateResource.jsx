import { useLoaderData } from "react-router";

function UpdateResource() {
  const resourceId = useLoaderData();
  return <div>UpdateResource for Resource ID: {resourceId}</div>;
}
export default UpdateResource;

async function loader({ params }) {
  return params.resourceId;
}

UpdateResource.loader = loader;
