import { RouterProvider } from "react-router";

import router from "./Router";
import store from "./store";

import { Provider } from "react-redux";

function App() {
  // useEffect(() => {
  //   i18n.changeLanguage("en");
  // }, [i18n]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
