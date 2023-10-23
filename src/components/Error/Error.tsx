import { useRouteError } from "react-router-dom";
import './Error.scss'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <code>
          <i>{JSON.stringify(error)}</i>
        </code>
      </p>
    </div>
  );
}