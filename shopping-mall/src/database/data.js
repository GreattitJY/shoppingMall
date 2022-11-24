import { createContext } from "react";

const callAPI = async () => {
    const response = await fetch("http://test.api.weniv.co.kr/mall");
    const result = await response.json();
    return result;
};

export const data = createContext(callAPI());
