
import { fellowship } from "./fellowship";
import "./lesson05.css";
import HeroCards from "../../components/heroCards/HeroCards";

export default function Lesson05() {
  return (
    <div>
      <h2>React map() components</h2>
      <div>
        {fellowship.map((hero) => (
          <HeroCards hero={hero} key={hero.id}  />
        ))}
      </div>
    </div>
  );
}
