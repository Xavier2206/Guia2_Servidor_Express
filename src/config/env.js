require('dotenv').config();
const{get}=require('env-var');
const envs = {
    PORT: get('PORT').default(3000).asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}
module.exports = {
    envs
}