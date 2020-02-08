import './MyExperience.scss';
import React from 'react';
import { MyCard } from './MyCard';
import Company from './experience/Company';

export default function MyExperience() {
  const companies = [
    {
      id: 'spd',
      position: 'Full-stack Software Engineer',
      period: 'Dec 2019 - Current',
      company: {
        name: 'Singapore Power',
        homepage: 'https://www.spgroup.com.sg/',
        icon: 'https://openaccount.spgroup.com.sg/favicon.ico',
      },
      projects: [
        {
          name: 'Application status',
          description:
            'a web application to check progress of an online registration/termination service process',
        },
        {
          name: 'Utilities account service',
          description:
            'develop a web application for utilities service self-registration',
        },
        {
          name: 'Centralized Cooling Sales kit',
          description:
            'develop a web app for proposing and selling of cooling service',
        },
      ],
      technology: ['JavaScript', 'ReactJS', 'Redux', 'Golang'],
    },
    {
      id: 'aviva',
      position: 'Software Engineer',
      period: 'Jun 2018 - Nov 2019',
      company: {
        name: 'Aviva Asia Pacific',
        homepage: 'https://www.aviva.com.sg/',
        icon:
          'https://cdn.aviva.com/static/core/v.4.13.0/images/favicon/favicon.ico',
      },
      projects: [
        {
          name: 'EzSub (easy submission)',
          description:
            'a point of sale iOS application used by financial advisors to manage and submit financial policies',
        },
        {
          name: 'eFNA (electronic Financial Needs Analysis)',
          description:
            'developing a web application which helps financial advisors analyze customers’ needs and advise them suited financial recommendations',
        },
      ],
      technology: [
        'JavaScript',
        'AngularJS & Angular (TypeScript)',
        'NodeJS',
        'Cordova',
        'HTML 5 / CSS 3',
        'Sass lang',
      ],
    },
    {
      id: 'lazada',
      position: 'Full-stack Software Engineer',
      period: 'Mar 2018 - Jun 2018',
      company: {
        name: 'Lazada eLogistics',
        homepage: 'https://www.lazada.com/',
        icon:
          'https://www.lazada.com/static/code_img/new-lazada-logo-small.png',
      },
      projects: [
        {
          name: 'Logistic management system:',
          description:
            'building & connecting sophisticated logistic systems (seller, warehouse, express) to help managing & delivering cargo become easy and efficient. The job requires heavy system integration tasks, writing 100% coverage unit tests and handling issues on production environment. Extensive usage of Docker container & microservices & CI/CD tools',
        },
      ],
      technology: [
        'ReactJS',
        'Redux',
        'Golang',
        'PHP, Laravel',
        'Docker',
        'Redis',
        'PostgreSQL',
        'HTML/CSS',
        'Sass lang',
      ],
    },
    {
      id: 'csc',
      position: 'Software Engineer',
      period: 'Jun 2016 - Mar 2018',
      company: {
        name: 'DXC Technology',
        homepage: 'http://www.dxc.technology/',
        icon:
          'https://www.dxc.technology/favicon.ico',
      },
      projects: [
        {
          name: 'IPOS Agent sales',
          description:
            'sophisticated insurance software used as a point of sale and financial analysis application for financial advisors. The systems was built based on complex microservices software architecture',
        },
        {
          name: 'IPOS Direct sales',
          description:
            'Straightforward point of sale for end customers to purchase insurance products. The application was built using the most advanced frontend technologies at the time (2018) backing by complex IPOS’s microservices',
        },
      ],
      technology: [
        'JavaScript',
        'AngularJS',
        'NodeJS, ExpressJS',
        'Golang',
        'Java, Spring',
        'MySQL, Microsoft SQL',
        'ElasticSearch, MongoDB',
        'eSignature',
        'Mule ESB',
        'Docker',
        'Amazon Web Services (AWS)',
        'HTML 5 / CSS 3',
        'Sass lang',
      ],
    },
  ];
  return (
    <MyCard title="Experience" id="experience">
      {companies.map(function(company) {
        return <Company key={company.id} {...company} />;
      })}
    </MyCard>
  );
}
