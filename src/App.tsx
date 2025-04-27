import "./App.css";
import Page from "./components/Page";
import Helmet from "react-helmet";
import { news } from "./data";

function App() {
  return (
    <>
      <Helmet
        link={[
          {
            rel: "icon",
            type: "image/svg+xml",
            href: `${news[0].DOM}${news[0].FAV}`,
          },
        ]}
      />
      <Page />
    </>
  );
}

export default App;
