import './MyExperience.scss';
import React from 'react';
import { MyCard } from './MyCard';

export function MyExperience() {
  return (
    <MyCard title="Experience" id="experience">
      <div className="company">
        <h3>Full-stack Software Engineer</h3>
        <p>
          <a
            href={'https://www.spgroup.com.sg/'}
            rel={'nofollow'}
            className={'employerLink'}
          >
            Singapore Power
          </a>{' '}
          <small className="text-secondary">(Dec 2019 - Current)</small>
        </p>
        <label>Projects: TBD</label>
        <ul></ul>
        <label>Technology: TBD</label>
        <ul></ul>
      </div>
      <div className="company">
        <h3>Software Engineer</h3>
        <p>
          <a
            href={'https://www.aviva.com.sg/'}
            rel={'nofollow'}
            className={'employerLink'}
          >
            Aviva Asia Pacific
          </a>{' '}
          <small className="text-secondary">(Jun 2018 - Nov 2019)</small>
        </p>
        <label>Projects:</label>
        <ul>
          <li>
            <b>
              <abbr title="Easy Submission">EzSub</abbr>
            </b>
            : a point of sale iOS application used by financial advisors to
            manage and submit financial policies.
          </li>
          <li>
            <b>
              <abbr title="e-Financial Needs Analysis">eFNA</abbr>
            </b>
            : developing a web application which helps financial advisors
            analyze customers&rsquo; needs and advise them suited financial
            recommendations.
          </li>
        </ul>
        <label>Technology:</label>
        <ul className="technology-list">
          <li>JavaScript</li>
          <li>AngularJS & Angular 7</li>
          <li>NodeJS</li>
          <li>Cordova</li>
          <li>HTML 5 / CSS 3</li>
          <li>Sass lang</li>
        </ul>
      </div>
      <div className="company">
        <h3>Full-stack Software Engineer</h3>
        <p>
          <a
            href={'https://www.lazada.com/'}
            rel={'nofollow'}
            className={'employerLink'}
          >
            Lazada eLogistics
          </a>{' '}
          <small className="text-secondary">(Mar 2018 - Jun 2018)</small>
        </p>
        <label>Projects:</label>
        <ul>
          <li>
            <b>Logistic management system</b>: building & connecting
            sophisticated logistic systems (seller, warehouse, express) to help
            managing & delivering cargo become easy and efficient. The job
            requires heavy <strong>system integration</strong> tasks, writing{' '}
            <strong>100% coverage unit tests</strong> and handling issues on
            production environment. Extensive usage of <em>Docker</em> container
            & <em>microservices</em> & <em>CI/CD</em> tools.
          </li>
        </ul>
        <label>Technology:</label>
        <ul className="technology-list">
          <li>ReactJS</li>
          <li>Redux</li>
          <li>Golang</li>
          <li>PHP, Laravel</li>
          <li>Docker</li>
          <li>Redis</li>
          <li>PostgreSQL</li>
          <li>HTML/CSS</li>
          <li>Sass lang</li>
        </ul>
      </div>
      <div className="company">
        <h3>Software Engineer</h3>
        <p>
          <a
            href={'http://www.dxc.technology/'}
            rel={'nofollow'}
            className={'employerLink'}
          >
            DXC Technology
          </a>{' '}
          <small className={'text-secondary'}>(Jun 2016 - Mar 2018)</small>
        </p>
        <p>
          From <b>junior developer</b> to <b>system integration leader</b> (what
          a journey)
        </p>
        <label>Projects:</label>
        <ul>
          <li>
            <b>
              <abbr title="Integral Point of Sale">IPOS</abbr> Agent sales
            </b>
            : sophisticated insurance software used as a point of sale and
            financial analysis application for financial advisors. The systems
            was built based on complex <strong>microservices </strong>
            software architecture.
          </li>
          <li>
            <b>
              <abbr title="Integral Point of Sale">IPOS</abbr> Direct sale
            </b>
            : Straightforward point of sale for end customers to purchase
            insurance products. The application was built using{' '}
            <b>the most advanced frontend technologies</b> at the time (2018)
            backing by complex IPOS&rsquo;s microservices.
          </li>
        </ul>
        <label>Technology:</label>
        <ul className="technology-list">
          <li>JavaScript</li>
          <li>AngularJS</li>
          <li>NodeJS, ExpressJS</li>
          <li>Golang</li>
          <li>Java, Spring</li>
          <li>MySQL, Microsoft SQL</li>
          <li>ElasticSearch, MongoDB</li>
          <li>eSignature</li>
          <li>Mule ESB</li>
          <li>Docker</li>
          <li>Amazon Web Services (AWS)</li>
          <li>HTML 5 / CSS 3</li>
          <li>Sass lang</li>
        </ul>
      </div>
    </MyCard>
  );
}
