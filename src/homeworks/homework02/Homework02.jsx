
import React from 'react'
import ProfileCard from '../../components/profileCard/ProfileCard';
import usersData from '../../components/object/Object';
import '../../components/profileCard/ProfileCard.css'

export default function Homework02() {
  return (
    <div className='homework02'>
        <ProfileCard
        avatar={usersData[0].avatar}
        firstName={usersData[0].firstName}
        lastName={usersData[0].lastName}
        occupation={usersData[0].occupation}
        hobbies={usersData[0].hobbies}
      />
       <ProfileCard
        avatar={usersData[1].avatar}
        firstName={usersData[1].firstName}
        lastName={usersData[1].lastName}
        occupation={usersData[1].occupation}
        hobbies={usersData[1].hobbies}
      />
       <ProfileCard
        avatar={usersData[2].avatar}
        firstName={usersData[2].firstName}
        lastName={usersData[2].lastName}
        occupation={usersData[2].occupation}
        hobbies={usersData[2].hobbies}
      />
    </div>
  )
}
