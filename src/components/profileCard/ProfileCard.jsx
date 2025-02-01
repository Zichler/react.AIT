
export default function ProfileCard({avatar, firstName, lastName, occupation, hobbies}) {
  return (
<div className="ProfileCard">
<img src={avatar} alt={`${firstName} ${lastName}`} className="profile-avatar" />
<h1>{firstName} {lastName}</h1>
<p>Род деятельности: {occupation}</p>
<p>Хобби: {hobbies.join(", ")}</p>



</div>


  )
}
