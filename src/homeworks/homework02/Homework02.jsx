
import ProfileCard from '../../components/profileCard/ProfileCard';
// import usersData from '../../components/object/Object';
import '../../components/profileCard/ProfileCard.css'

export default function Homework02() {
  return (
    <div className='homework02'>
        <ProfileCard avatar={'https://media1.faz.net/ppmedia/aktuell/sport/2892387591/1.9451443/default/lionel-messi-hier-nach-dem.jpg'}
         firstName={'Lionel'}
         lastName={'Messi'}
         occupation={'Football player'}
         hobbies={["Treveling", "Sport", "Reading"]}
       />
       <ProfileCard avatar={'https://image.gala.de/22991206/t/r7/v6/w960/r0.6667/-/selena-gomez.jpg'}
         firstName={'Selena'}
         lastName={'Gomez'}
         occupation={'Singer'}
         hobbies={["Treveling", "Musik", "Cooking"]}
       />
       <ProfileCard avatar={'https://thecity.m24.ru/b/d/SYketSiveYg4J_LSfurQC04VAxhsdX2wl4VGK3kftkTqqpuDxHXYBEb3KdEqJFNmHN2I2j8tqA3PYdbYIe71F2MJ5xZVjA8=00oMnnKdua4K_KEVXDiLKw.jpg'}
         firstName={'Jason'}
         lastName={'Statham'}
         occupation={'Actor'}
         hobbies={["Treveling", "Boxing", "Stunman"]}
       />
       
    </div>
  )
}
