import './MyEdu.scss';
import React from 'react';
import MyCard from './MyCard';

export default function MyEdu() {
  return (
    <MyCard title="Education & Awards" id="edu">
      <h3>University of Science</h3>
      <p>I am studying for a Bachelor degree in Information Technology</p>

      <h3>University of Economics</h3>
      <p>Bachelor of Business Administration & Marketing</p>

      <h3>Awards</h3>
      <ul>
        <li>Outstanding performance in the Java Fresher program</li>
        <li>
          Third prize in UEH 500 business startup contest: Mobifood business
          development
        </li>
        <li>First prize in Physics at Phu Nhuan High School</li>
      </ul>
    </MyCard>
  );
}
