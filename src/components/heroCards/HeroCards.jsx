import "../../lessons/lesson05/lesson05.css"

export default function HeroCards({ hero }) {
  return (
    <div className="heroCard">
      <h3>{hero.name}</h3>
      <div className={`imgHero ${hero.isDark ? "heroCardDark" : "heroCardLight"} `}>
        <img src={hero.image} alt="hero" />
      </div>
      <p>{hero.age} years old</p>
      <p>{hero.isDark ? "Villain 🦹" : "Hero 🦸"}</p>
      <p> Weapons: {hero.weapons.map(weapon => " | " + weapon)}</p>
    </div>
  );
}

