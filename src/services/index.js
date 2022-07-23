import axios from "axios";

export const getHeroes = () => {
  const url = `https://akabab.github.io/superhero-api/api/all.json`;
 return  axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};
