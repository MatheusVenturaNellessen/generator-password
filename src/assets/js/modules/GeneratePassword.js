export default class GeneratePassword {
    static rand(min = 0, max = 9) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    static addNumber(amount) {
        const password = [];

        for(let i = 0; i < amount; i++) {
            password.push(GeneratePassword.rand());
        }

        return password.join('');
    }

    static addUpperCase(password, amount) {
        if(!password) {
            const passwordWithUpperCase = [];

            for(let i = 0; i < amount; i++) {
                const randomUpperCase = String.fromCharCode(65 + Math.floor(Math.random() * 26));
                passwordWithUpperCase.push (randomUpperCase);
            }

            return passwordWithUpperCase.join('');
        } else {
            const passwordWithUpperCase = Array.from(password); 
    
            for(let i = 0; i < amount; i++) {
                if(i === 0 || i % 3 === 0) {
                    passwordWithUpperCase[i] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
                }
            }
    
            return passwordWithUpperCase.join('');
        }
    }
    
    static addLowerCase(password, amount) {
        if(!password) {
            const passwordWithLowerCase = [];

            for(let i = 0; i < amount; i++) {
                const randomLowerCase = String.fromCharCode(97 + Math.floor(Math.random() * 26));
                passwordWithLowerCase.push(randomLowerCase);
            }

            return passwordWithLowerCase.join('');
        } else {
            const passwordWithLowerCase = Array.from(password); 
    
            for(let i = 0; i < amount; i++) {
                if(i === 0 || i % 4 === 0) {
                    passwordWithLowerCase[i] = String.fromCharCode(97 + Math.floor(Math.random() * 26));
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
                if(i === 0 || i % 5 === 0) {
                    passwordWithEspecialChar[i] = specialChars[Math.floor(Math.random() * specialChars.length)];
                }
            }
    
            return passwordWithEspecialChar.join('');    
        }
    }
}