import './App.css';
import Nav from './components/Nav';
import React from 'react';
import profileimage from './assets/profileimage.webp';
import CardSlider from './components/CardSlider';

export default function App() {
  return (
    <>
      <Nav/>
      <div className='H1'>
        <div className='H2'>
          <div className='MeetCouncil'>
            <h1>Meet the Council</h1>
          </div>
          <div className='CouncilMembers'>
            <div className='CouncilMember'>
              <img className='imgprofile' src={profileimage}></img>
              <div className='links'>
                <h3 className='Name'>Proff</h3>
              </div>
            </div>
            <div className='CouncilMember'>
              <img className='imgprofile' src={profileimage}></img>
              <div className='links'>
                <h3 className='Name'>Proff</h3>
              </div>
            </div>
            <div className='CouncilMember'>
              <img className='imgprofile' src={profileimage}></img>
              <div className='links'>
                <h3 className='Name'>Proff</h3>
              </div>
            </div>
            <div className='CouncilMember'>
              <img className='imgprofile' src={profileimage}></img>
              <div className='links'>
                <h3 className='Name'>Proff</h3>
              </div>
            </div>
            <div className='CouncilMember'>
              <img className='imgprofile' src={profileimage}></img>
              <div className='links'>
                <h3 className='Name'>Proff</h3>
              </div>
            </div>
            <div className='CouncilMember'>
              <img className='imgprofile' src={profileimage}></img>
              <div className='links'>
                <h3 className='Name'>Proff</h3>
              </div>
            </div>
            <div className='CouncilMember'>
              <img className='imgprofile' src={profileimage}></img>
              <div className='links'>
                <h3 className='Name'>Proff</h3>
              </div>
            </div>
            <div className='CouncilMember'>
              <img className='imgprofile' src={profileimage}></img>
              <div className='links'>
                <h3 className='Name'>Proff</h3>
              </div>
            </div>
          </div>
        </div>
        <CardSlider/>
      </div>
    </>
  );
}