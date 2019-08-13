// IIFE


(function init() {
    console.log("Intializing ...... from iife");
})();


(function initDB(db) {
    console.log("Intializing ...... DB, " + db);
})('MySQL');




