import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorBoundary: React.FC = () => {
  const error = useRouteError(); // Get error details

  console.error("Route Error:", error); // Log for debugging

  return (
    <div>
      <h2>Something went wrong</h2>
      {isRouteErrorResponse(error) ? (
        <p>
          Error {error.status}: {error.statusText}
        </p>
      ) : error instanceof Error ? (
        <p>{error.message}</p>
      ) : (
        <p>Unknown error occurred</p>
      )}
    </div>
  );
};

export default ErrorBoundary;
