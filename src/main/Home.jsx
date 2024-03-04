import { Cards } from "./Cards/cards"
import { Parts } from "./Main/Parts/Parts"
import { Welcome } from "./Main/Welcome/welcome"
import { Hero } from "./Main/Hero/hero";

export const Home = () => {
  return (
    <>
      <Hero />
      <Parts />
      <Welcome />
      <Cards />
    </>
  )
}
