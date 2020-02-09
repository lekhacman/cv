import React from 'react';
import { render } from '@testing-library/react';
import Company from './Company';

describe('Company', function() {
  it('should render company with link', function() {
    const props = {
      id: 'lazada',
      position: 'Full-stack Software Engineer',
      period: 'Mar 2018 - Jun 2018',
      company: {
        name: 'Lazada',
        homepage: 'https://www.lazada.com/',
        icon:
          'https://www.lazada.com/static/code_img/new-lazada-logo-small.png',
      },
      projects: [
        {
          name: 'lo',
          description: 'bla',
        },
      ],
      technology: ['JavaScript'],
    };
    const { container } = render(<Company {...props} />);

    const img = container.querySelectorAll('.employerLink');
    expect(img.length).toBeGreaterThan(0);
  });

  it('should render company without link', function() {
    const props = {
      id: 'lazada',
      position: 'Full-stack Software Engineer',
      period: 'Mar 2018 - Jun 2018',
      company: {
        name: 'Lazada',
        homepage: '',
        icon:
          'https://www.lazada.com/static/code_img/new-lazada-logo-small.png',
      },
      projects: [
        {
          name: 'lo',
          description: 'bla',
        },
      ],
      technology: ['JavaScript'],
    };
    const { container } = render(<Company {...props} />);

    const img = container.querySelectorAll('.employerLink');
    expect(img.length).toEqual(0);
  });
});
