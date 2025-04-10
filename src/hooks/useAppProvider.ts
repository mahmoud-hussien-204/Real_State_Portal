import {appContext} from "@/providers/AppProviders";

import {useContext} from "react";

const useAppProvider = () => useContext(appContext);

export default useAppProvider;
