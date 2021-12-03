import React, { useContext, useEffect } from "react";
import Card from "../Components/Card";
import "./Repos.css";

import Context from "../Context";
import { Link } from "react-router-dom";

function Repos() {
  const { state } = useContext(Context);
  const { repos } = state;

  const ListRepos = () =>
    repos.map((repo, key) => (
      <li key={key}>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <h3>{repo.name}</h3>
        </a>
      </li>
    ));

 
    if (!repos) {
      window.location.href = "/";
    }


  return (
    <div className="Repos">
      <Card>
        <h1>
          Repositórios de <span>{state.user.name.split(" ")[0]}</span>
        </h1>
        <ul className="list-repos">
          <ListRepos />
        </ul>
      </Card>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Repos;
