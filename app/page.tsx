"use client"
import { Provider } from "react-redux";
import Hero from "./components/Hero";
import { store } from "./store/reduxStore";



export default function Home() {
    return (
        <div>
            <Provider store={store}>
                <Hero />
            </Provider>
        </div>
    );
}
