import React from "react";
import { Link } from "gatsby";

const A = () => (
    <div class="flex flex-col m-2 shadow bg-black text-white">
        {" "}
        <Link class="rounded p-1 font-medium m-2 text-xl transition-colors hover:text-blue-600">
            {" "}
            <ion-icon name="logo-facebook"></ion-icon>{" "}
        </Link>{" "}
        <Link class="rounded p-1 font-medium m-2 text-xl transition-colors hover:text-red-600">
            {" "}
            <ion-icon name="logo-youtube"></ion-icon>{" "}
        </Link>{" "}
        <Link class="rounded p-1 font-medium m-2 text-xl transition-colors hover:text-cyan-600">
            {" "}
            <ion-icon name="logo-tumblr"></ion-icon>{" "}
        </Link>{" "}
        <Link class="rounded p-1 font-medium m-2 text-xl transition-colors hover:text-gray-300">
            {" "}
            <ion-icon name="mail-sharp"></ion-icon>{" "}
        </Link>{" "}
        <Link class="rounded p-1 font-medium m-2 text-xl transition-colors hover:text-yellow-600">
            {" "}
            <ion-icon name="logo-google"></ion-icon>{" "}
        </Link>{" "}
    </div>
);

export default A;
