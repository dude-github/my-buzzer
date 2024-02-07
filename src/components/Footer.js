import React from 'react';
import { Container } from 'react-bootstrap';

export function FooterSimple() {
  return (
    <div id="footer-simple">
      <div>
        <p style={{ fontSize: 'small' }}>
          <span style={{ color: 'red' }}>Caution :</span> 'Please do not reload the page.'
        </p>
      </div>
      Developed By{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/dude-github"
      >
        Sagar Borkade
      </a>
    </div>
  );
}

/**
 * Footer component
 * @param {bool} mobileOnly - only display on mobile devices, <768 px
 */
export default function Footer({ mobileOnly = false }) {
  return (
    <footer className={mobileOnly ? 'd-block d-md-none' : null}>
      <Container>
        <div>
          <p style={{ fontSize: 'small' }}>
            <span style={{ color: 'red' }}>Caution :</span> 'Please do not reload the page.'
          </p>
        </div>
        <div>
          Developed By{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/dude-github"
          >
            Sagar Borkade
          </a>
        </div>
      </Container>
    </footer>
  );
}
