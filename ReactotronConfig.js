import reactotronZustand from "reactotron-plugin-zustand";
import Reactotron from "reactotron-react-native";

import { useUserStore } from "./store/userStore";

Reactotron.configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(
    //add this line 🙌
    reactotronZustand({
      stores: [{ name: "user", store: useUserStore }],
      omitFunctionKeys: true,
    }),
  )
  .connect(); // let's connect!
