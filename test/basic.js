var Sails = require("sails").Sails;

describe("Basic tests :: ", function() {
  var sails;

  before(function(done) {
    this.timeout(11000);

    Sails().lift(
      {
        hooks: {
          "sails-hook-transformer": require("../"),
          grunt: false
        },
        log: { level: "error" }
      },
      function(err, _sails) {
        if (err) {
          return done(err);
        }

        sails = _sails;

        return done();
      }
    );
  });

  after(function(done) {
    if (sails) {
      return sails.lower(done);
    }

    return done();
  });

  it("sails does not crash", function() {
    return true;
  });
});
