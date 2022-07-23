import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { InputSearch } from "../../components/Input";
import { Modal } from "../../components/Modal";
import { getHeroes } from "../../services";
import { HomeContainer } from "./styles";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [heroes, setHeroes] = useState([]);

  console.log(loading);

  useEffect(() => {
    setLoading(true);
    getHeroes()
      .then((response) => {
        setHeroes(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <HomeContainer>
      {heroes?.data?.map((hero) => {
        console.log(hero);
        return <Card {...hero} />;
      })}
    </HomeContainer>
  );
};
