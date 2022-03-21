const ContentSecurityPolicy = `
  default-src 'self' *.fabrique.social.gouv.fr;
  img-src 'self' data: *.fabrique.social.gouv.fr https://dummyimage.com/;
  script-src 'self' *.fabrique.social.gouv.fr ${
    process.env.NODE_ENV !== "production" && "'unsafe-eval'"
  };
  frame-src 'self' *.fabrique.social.gouv.fr;
  style-src 'self' 'unsafe-inline';
  font-src 'self' data: blob:;
  prefetch-src 'self' *.fabrique.social.gouv.fr;
`;

module.exports = ContentSecurityPolicy;