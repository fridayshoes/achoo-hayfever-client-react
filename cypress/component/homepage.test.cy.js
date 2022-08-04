import * as React from 'react';
import App from '../../src/App';
import { mount }  from '@cypress/react';
  
  it('checks for home page title', () => {
    // cy.mount()
    mount(<App />);
    cy.contains(/learn react/i).should('be.visable');
  });

