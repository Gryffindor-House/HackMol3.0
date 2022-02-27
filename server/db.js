const ResponseLike = require("responselike");
const connection = require("./config");

// Fetching shipwrecks data
function fetch_disasters(callback) {
  connection.query("SELECT * from disaster_map", (err, results, fields) => {
    if (err) {
      return callback(false);
    } else {
      return callback(results);
    }
  });
}

// Authenticate user
function authenticate_user(params, callback) {
  connection.query(
    "SELECT count(*) from user where name=? and password =?",
    [params.user_name, params.password],
    (err, results, fields) => {
      if (err || results.length == 0) {
        console.log(err);
        return callback(false);
      }
      return callback(true);
    }
  );
}

// Register User
function register_user(params, callback) {
  connection.query(
    "INSERT into user (name,email_id,password) values (?,?,?)",
    [params.name, params.email_id, params.password],
    (err, results, fields) => {
      if (err || results.length == 0) {
        console.log(err);
        return callback(false);
      }
      return callback(true);
    }
  );
}

// Add shipwreck data
// Register User
async function register_disaster(params) {
  try {
    // Connect the client to the server
    await client.connect();

    params["coordinates"] = Array(
      parseFloat(params.londec),
      parseFloat(params.latdec)
    );

    //  Fetching Collection Data
    let results = await client
      .db("sample_geospatial")
      .collection("shipwrecks")
      .insertOne(params);

    console.log(results);

    return results.acknowledged;
  } catch (e) {
    console.log(e);
    return false;
  } finally {
    await client.close();
  }
}

module.exports = {
  fetch_disasters: fetch_disasters,
  authenticate_user: authenticate_user,
  register_user: register_user,
  register_disaster: register_disaster,
};
