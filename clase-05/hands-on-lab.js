const { promises } = require('dns');
const fs = require('fs')

const crypto = require('crypto')

class UsersManager {
    constructor(path) {
        this.path = path;
    }

    async create(user) {
        const { firstName, lastName, email,  age, cours, password } = user;
        if(!firstName || !lastName || !email || !age || !cours || !password) {
            throw new Error('Todos los campos son obligatorios.')
        }
        const users = await getJSONFromFile(this.path);
        const id = users.lenght +1;
        const newUser = { 
            id, 
            firstName, 
            lastName, 
            email,
            age, 
            cours, 
            password: encriptarPassword(password) 
        };
        users.push(newUser);
        return saveJSONToFile(this.path, users)
    }

    get(){
        return getJSONFromFile(this.path)
    }
    async login(email, password){
        const users = await getJSONFromFile(this.path);
        const user = users.find((user) => user.email === email)

        if (!users) {
            throw new Error('usuario no encontrado')
        }
        if(!validarPassword(password, user.password)){
            throw new Error('Contraseña incorrecta')
        }

        return true;
    }
}

const existFile = async (path) => {
    try {
        await fs.promises.access(path);
        return true;
    } catch (error) {
        return false;
    }
};

const getJSONFromFile = async (path) => {
    if(!await existFile(path)) {
        return [];
    }

    let content;

    try {
        content = await fs.promises.readFile(path, 'utf-8');
    }catch (error) {
        throw new Error(`el archivo ${path} no pudo ser leido`);
    }

    try {
        return JSON.parse(content);
    } catch (error) {
        throw new Error(`El archivo ${path} no tiene un formato JSON valido`)
    }
};


const saveJSONToFile = async (path, data) => {
    const content = JSON.stringify(data, null, '\t');
    try {
        await fs.promises.writeFile(path, content, 'utf-8');
    } catch (error) {
        throw new Error(`el archivo ${path} no pudo ser escrito`)
    }
}
 
const SALT = /* crypto.randomBytes(16) */ 'shhhhhh';

const encriptarPassword = (passwordPlain) => {
    let passwordEncrypted;

    passwordEncrypted = crypto.pbkdf2Sync(passwordPlain, SALT, 100000, 64, 'sha512').toString('hex');

    return passwordEncrypted;
}

const validarPassword = (passwordPlain, passwordEncrypted) => {
    const result = crypto.pbkdf2Sync(passwordPlain, SALT, 100000, 64, 'sha512').toString('hex');

    return result === passwordEncrypted
}

async function test() {
    const usersManager = new UsersManager('.users.json')

    /* await usersManager.create({
        firstName: 'victor',
        lastName: 'grajales',
        email: 'vmg@mail.com',
        age: 32,
        cours: ['node.js', 'javascript', 'HTML', 'CSS'],
        password: 'coderhouse1506*'
    }); */

    

    /* const users = await usersManager.get();
    console.log('aca los usuarios', users) */
    const  result =   await usersManager.login('vmg@mail.com', 'coderhouse1506*')
    console.log(result)

    /* const result = encriptarPassword('myPassword');

    console.log(result)

    console.log(validarPassword('myPassword', result)) */
}


test()