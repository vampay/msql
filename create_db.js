con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    con.query("CREATE DATABASE IF NOT EXISTS mydb", function(err, result) {
         if (err) throw err;
        console.log("Database created");
    });
});



    
    