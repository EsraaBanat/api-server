'use strict'
function validator() {
    return (
        (req, res, next) => {
           let { name } = req.query;
            let regex = /^[A-Za-z]{1,29}$/i;
            if (name) {
                if (regex.test(name)) {
                    next();
                }
                else {
                    next('Invalid Name !! Please send a valid one ');
                 }
                
            }
            else {
                next('Name not provided');
            }
        }
    )
        
}

module.exports = validator()