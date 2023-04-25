import { Link } from "react-router-dom";

export default function App() {
  return (
    <nav>
      <ul className="list-disc list-inside text-3xl">
        <li className="hover:underline hover:text-blue-600">
          <Link to={"fetch/"}>Fetch</Link>
        </li>
        <li className="hover:underline hover:text-blue-600">
          <Link to={"fetchzod/"}>Fetch With Zod</Link>
        </li>
        <li className="hover:underline hover:text-blue-600">
          <Link to={"form/"}>Form</Link>
        </li>
        <li className="hover:underline hover:text-blue-600">
          <Link to={"formzod/"}>Form with Zod</Link>
        </li>
      </ul>
    </nav>
  );
}
