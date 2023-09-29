import React from "react";
import { Link } from "gatsby";

const A = () => (
    <div class="flex flex-col m-2 space-y-2">
        {" "}
        <Link class="rounded p-1 bg-blue-500 hover:bg-white transition-colors text-white hover:text-blue-500 m-1 px-2 text-lg">
            {" "}
            <ion-icon name="logo-github" class="mt-1"></ion-icon>{" "}
        </Link>{" "}
        <Link class="rounded p-1 bg-yellow-500 hover:bg-white transition-colors text-white hover:text-yellow-500 m-1 px-2 text-lg">
            {" "}
            <ion-icon name="logo-tumblr" class="mt-1"></ion-icon>{" "}
        </Link>{" "}
        <Link class="rounded p-1 bg-green-400 hover:bg-white transition-colors text-white hover:text-green-400 m-1 px-2 text-lg">
            {" "}
            <ion-icon name="logo-whatsapp" class="mt-1"></ion-icon>{" "}
        </Link>{" "}
        <Link class="rounded p-1 bg-red-500 hover:bg-white transition-colors text-white hover:text-red-500 m-1 px-2 text-lg">
            {" "}
            <ion-icon name="logo-youtube" class="mt-1"></ion-icon>{" "}
        </Link>{" "}
    </div>
);

export default A;
