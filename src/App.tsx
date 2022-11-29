import { RouterProvider } from "react-router";

import router from "./Router";
import store from "./store";

import { Provider } from "react-redux";
import { useEffect } from "react";
import i18n from "./i18n/i18n";

function App() {
  const lang = navigator.language.split(/[-_]/).join("").toLocaleLowerCase();
  console.log(lang);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
