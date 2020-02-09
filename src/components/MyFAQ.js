import './MyFAQ.scss';
import React from 'react';
import MyCard from './MyCard';

export default function MyFAQ() {
  return (
    <MyCard title="FAQ" id="faq">
      <ul>
        <li>
          <b>Where and how did you study code?</b> I'm a self-taught engineer.
          There 4 major sources that help me to acquire proficiency in
          programming:
          <ul>
            <li>
              <b>Mentors</b> who are professional developers and architects
            </li>
            <li>
              My job at <b>DXC Technology</b>
            </li>
            <li>
              <b>
                <a
                  href="https://teachyourselfcs.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  teachyourselfcs.com
                </a>
              </b>{' '}
              is a guide to self-study a complete Computer Science degree for
              free using open courses
            </li>
            <li>
              <b>Books.</b> I admit that I'm a serious bookworm
            </li>
          </ul>
        </li>
        <li>
          <b>Why did you choose to become a coder?</b> I didn't. My dream is to
          become an entrepreneur and to build a real-time analytic system to
          analyze and study behavior of users on the web in order to help
          marketers make good decisions on marketing stuffs (I study marketing
          and market research). But I didn't know how to code at the time. So...
          I taught myself coding. Eventually, the more I dive deep into code,
          the more fun it becomes, then, i totally forgot about my initial goal
          to become an entrepreneur. I fall in love with code and become very
          good at it
        </li>
      </ul>
    </MyCard>
  );
}
