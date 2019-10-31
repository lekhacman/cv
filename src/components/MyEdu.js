import './MyEdu.scss';
import React from 'react';
import { MyCard } from './MyCard';

export function MyEdu() {
  return (
    <MyCard title="Education & Awards" id="edu">
      <h3>University of Economics HCMC</h3>
      <p>Bachelor of Business Administration & Marketing</p>

      <h3>Awards</h3>
      <p>
        <ul>
          <li>Outstanding performance in the Java Fresher program</li>
          <li>
            Third prize in UEH 500 contest: busi- ness project - Mobifood
            business develop- ment
          </li>
        </ul>
      </p>
    </MyCard>
  );
}
