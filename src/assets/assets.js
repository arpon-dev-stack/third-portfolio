import facebook from "./facebook.png"
import github from "./github.png"
import instagram from "./instagram.png"
import twitter from "./twitter.png"
import thinker from "./thinker.png"
import code from "./code.png"
import code1 from "./code2.png"
import social from "./social.png"
import nodejs from "./node-js.png"
import react from "./react.png"
import database from "./database.png"
import html from "./html.png"
import css from "./css-3.png"
import javascript from "./js.png"

export const assets = {
    connect: [facebook, github, instagram, twitter],
    thinker,
    skills: [social, nodejs, react, database, html, css, javascript],
    decorator: [code, code1],
    project: [
            {
                src: "Fullstack Ecommerce website",
                title: "Fullstack Ecommerce website",
                description: "User authentication and authorization, show statistics, get the perfect metric of database and a specific item growth, and user get overview of his position and manage the platform effectively.",
                technology: "React, Node.js, Express, MongoDB, PostgreSql, Jwt, React-router.",
                id: 1,
                credit: {
                    id: 1,
                    src: code,
                    name: "Name"
                }
            },
            {
                src: "Admin Dashboard",
                title: "Admin Dashboard",
                description: "User authentication and authorization, show statistics, get the perfect metric of database and a specific item growth, and user get overview of his position and manage the platform effectively.",
                technology: "React, Node.js, Express, MongoDB, PostgreSql, Jwt, React-router.",
                id: 2,
                credit: {
                    id: 2,
                    src: code1,
                    name: "Name"
                }   
            },
            {
                src: "Functional Chatbot interface",
                title: "Functional Chatbot interface",
                description: "Better UX on chatting with AI for user problem save history of chatting, pin prompt for future use and deep research get different interface with different desire of user.", 
                id: 3,
                credit: {
                    id: 3,
                    src: thinker,
                    name: "Name"
                }
            }
        ]
}