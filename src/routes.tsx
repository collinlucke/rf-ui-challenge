import App from "./App";
import EventPage from "./pages/EventPage/EventPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <EventPage /> }],
  },
];

export default routes;
