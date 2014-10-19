module.exports = function(app) {

  app.post('/auth_token', function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    if (req.body.grant_type === 'password') {
      if (req.body.username === 'letme' && req.body.password === 'in') {
        res.send({
          access_token: 'secret token!',
          token_type: "bearer",
          user_id: 1
        });
      } else {
        res.status(400).send({ error: 'invalid_grant' });
      }
    } else {
      res.stauts(400).send({ error: 'unsupported_grant_type' });
    }
  });

  app.get('/me', function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    res.send({
      "user": {
        "id": 1,
        "username": "boris.rorsvort@gmail.com",
        "favorites": [1, 2, 3]
      },
      "favorites": [
        {"id":1, "question": 18572, type: 'oral'},
        {"id":2, "question": 18403},
        {"id":3, "question": 18401}
      ]
    });
  });

  app.post('/revoke', function(req, res) {
    if (req.body.token_type_hint === 'access_token' || req.body.token_type_hint === 'refresh_token') {
      res.send('');
    } else {
      res.stauts(400).send({ error: 'unsupported_token_type' });
    }
  });
};
