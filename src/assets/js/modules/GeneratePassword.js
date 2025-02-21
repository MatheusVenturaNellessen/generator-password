import generateChar from './generateChar'

export default class GeneratePassword {
    static addNumber(amount) {
        const password = [];

        for(let i = 0; i < amount; i++) {
            password.push(generateChar(48, 57))
        }

        return password.join('');
    }

    static addUpperCase(password, amount) {
        if(!password) {
            const passwordWithUpperCase = [];

            for(let i = 0; i < amount; i++) {
                passwordWithUpperCase.push(generateChar(65, 90));
            }

            return passwordWithUpperCase.join('');
        } else {
            const passwordWithUpperCase = Array.from(password); 
    
            for(let i = 0; i < amount; i++) {
                if(i % 3 === 0) {
                    passwordWithUpperCase[i] = generateChar(65, 90);
                }
            }
    
            return passwordWithUpperCase.join('');
        }
    }
    
    static addLowerCase(password, amount) {
        if(!password) {
            const passwordWithLowerCase = [];

            for(let i = 0; i < amount; i++) {
                passwordWithLowerCase.push(generateChar(99, 122));
            }

            return passwordWithLowerCase.join('');
        } else {
            const passwordWithLowerCase = Array.from(password); 
    
            for(let i = 0; i < amount; i++) {
                if(i % 4 === 0) {
                    passwordWithLowerCase[i] = generateChar(99, 122);
                }
            }
    
            return passwordWithLowerCase.join('');
        }
    }

    static addEspecialChar(password, amount) {
        if(!password) {
            const passwordWithEspecialChar = [];
            const specialChars = '.,:;?!+-*/=%@#$&()_-{}[]<>|/^~';

            for(let i = 0; i < amount; i++) {
                passwordWithEspecialChar.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
            }

            return passwordWithEspecialChar.join('');
        } else {
            const passwordWithEspecialChar = Array.from(password);
            const specialChars = '.,:;?!+-*/=%@#$&()_-{}[]<>|/^~';
    
            for(let i = 0; i < amount; i++) {
                if(i % 5 === 0) {
                    passwordWithEspecialChar[i] = specialChars[Math.floor(Math.random() * specialChars.length)];
                }
            }
    
            return passwordWithEspecialChar.join('');    
        }
    }
}