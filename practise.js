
// connect to database
const db = new sqlite3.Database("test.db",sqlite3.OPEN_READWRITE,(err)=>{
    if (err) return console.error(err.message);    
});
