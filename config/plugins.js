module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'smtp',
    providerOptions: {
      host: 'a2plcpnl0095.prod.iad2.secureserver.net', //SMTP Host
      port: 465, //SMTP Port
      secure: true,
      username: 'developer@thecodeworkers.com',
      password: 'thecodedev',
      rejectUnauthorized: true,
      requireTLS: true,
      connectionTimeout: 1,
    },
    settings: {
      defaultFrom: 'developer@thecodeworkers.com',
      defaultReplyTo: 'developer@thecodeworkers.com',
      testAddress: 'developer@thecodeworkers.com',
    },
  },
  graphql: {
    shadowCRUD: true,
  }
  // ...
});



