import { Box, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styledComp from "styled-components";

function App() {
    return (
        <HomeBox>
            <span>
                Welcome to our Hospital Dashboard, designed to transform data
                into actionable insights. Leveraging the powerful React
                framework with Laravel, this platform offers a seamless and
                robust solution for generating comprehensive reports, insights,
                and analyses.
            </span>
            <br />
            <br />
            <span>
                The frontend, built with React, Redux, and Material UI, ensures
                a responsive and user-friendly experience, while sophisticated
                data visualizations are powered by Recharts and Chroma. The
                backend, developed with Laravel, guarantees efficient data
                processing and management, seamlessly integrated with MySQL for
                reliable data storage.
            </span>
            <br />
            <br />
            <span>
                This platform supports a table called patients using which we
                display our{" "}
                <CustomLink to="/dashboard">Dashboard Page</CustomLink>. With
                advanced analytics capabilities, user can effortlessly generate
                and visualize data through various graphs such as bar graphs,
                and pie charts.
            </span>
            <br />
            <br />
            <span>
                This dashboard equips user with the tools he need to make
                data-driven decisions with confidence.
            </span>
        </HomeBox>
    );
}

export default App;

const HomeBox = styled(Box)({
    width: "80%",
    height: "95%",
    margin: "12rem auto",
    padding: "3rem",
    textAlign: "justify",
    backgroundColor: "#2d2d34",
    color: "#f7d299",
    fontWeight: "300",
    fontSize: "2.5rem",
    borderRadius: "1rem",
    boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)",
});

const CustomLink = styledComp(Link)({
    textDecoration: "none",
    color: "#0b8f78",
    fontStyle: "italic",
});
