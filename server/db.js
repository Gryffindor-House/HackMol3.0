const connection = require("./config");

// Fetching shipwrecks data
async function fetch_shipwreck() {
  try {
    await client.connect();

    // Connect the client to the server
    //  Fetching Collection Data
    let results = await client
      .db("sample_geospatial")
      .collection("shipwrecks")
      .find({})
      .toArray();
    return results;
  } catch (e) {
    console.log(e);
    return false;
  } finally {
    await client.close();
  }
}

// Update shipwreck data

// Delete shipwreck data
// async function delete_shipwreck() {
//   try {
//     // Connect the client to the server

//     //  Fetching Collection Data
//     let results = await client
//       .db("sample_geospatial")
//       .collection("shipwrecks")
//       .deleteOne({ depth: { $gte: 10 } })
//       .then(function () {
//         console.log("Data Deleted");
//       })
//       .catch(function (error) {
//         console.log(error);
//       });

//     return results;
//   } catch (e) {
//     console.log(e);
//     return false;
//   } finally {
//     await client.close();
//   }
// }

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
async function register_shipwreck(params) {
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
  fetch_shipwreck: fetch_shipwreck,
  // delete_shipwreck: delete_shipwreck,
  authenticate_user: authenticate_user,
  register_user: register_user,
  register_shipwreck: register_shipwreck,
};
