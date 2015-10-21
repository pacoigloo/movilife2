Meteor.startup(function () {
  smtp = {
    username: 'felipe.zapata@igloo-lab.com',
    password: 'creativo123',
    server:   'smtp.gmail.com',
    port: 25
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});