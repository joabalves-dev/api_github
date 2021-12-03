import React, { useContext, useRef } from "react";
import Card from "../Card";
import "./index.css";

import Context from '../../Context';

const InputSearch = (_) => {
  const url = "https://api.github.com/users";
  const input = useRef();

  const context = useContext(Context)

  async function handleClick() {
    context.setstate(await Api());
  }

  async function Api() {
    const resultUse = await fetch(url + `/${input.current.value}`);
    const resultRepos = await fetch(url + `/${input.current.value}/repos`);
    const ResultUseJson = await resultUse.json();
    const ResultReposJson = await resultRepos.json();

    return { user:ResultUseJson, repos:ResultReposJson };
  }

  return (
    <Card>
      <div className="InputSearch">
        <input type="text" name="search" id="search" ref={input} />
        <button onClick={handleClick}>Buscar</button>
      </div>
    </Card>
  );
};

export default InputSearch;
