const db = require('./connection');
const helper = require('../helpers/helper');
const config = require('./config');
const bcrypt = require("bcrypt")

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * 
    FROM users LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function getAuth(email, password){
    const sqlSearch = await db.query(`SELECT * FROM users WHERE email ='${email}'`);
    const data = helper.emptyOrRows(sqlSearch);
    if(data.length > 0) {
        const hashedPassword = data[0].password
        if (await bcrypt.compare(password, hashedPassword)) {
            return {
                message: 'login berhasil',
                code: 200,
                data: {
                    accessToken: '1234567890',
                    name: data[0].name,
                    email: data[0].email,
                    userId: data[0].id,
                    username: data[0].name,
                    role: data[0].roles 
                }
            }
        }else{
            return {
                message: 'Password Incorrect',
                code: 401,
                data: {}
            }
        }
    }else{
        return {
            message: 'user does not exist',
            code: 404,
            data: {}
        }
    }
}

async function createUser(payload){
    const email = payload.email;
    const hashedPassword = await bcrypt.hash(payload.password,10);
    const sqlSearch = await db.query(`SELECT * FROM users WHERE email ='${email}'`);
    const data = helper.emptyOrRows(sqlSearch);
    let response= {};
    if(data.length === 0){
        const userInsert = await db.query(`Insert INTo users (name, email, password) values ('${payload.name}', '${payload.email}', '${hashedPassword}')`);
        let message = 'Error in creating programming language';
        let success = false;
        let code = 500;
        if (userInsert.affectedRows) {
          success = true;
          code = 201;
          message = 'Programming language created successfully';
        }
        response = {
            success,
            code,
            message,
            data: {}
        };
    }else{
        response = {
            success: false,
            code: 409,
            message: "user is already axist",
            data: {}
        };
    }

    return response;
}

module.exports = {
  getMultiple,
  getAuth,
  createUser
}