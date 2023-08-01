
const generatePassword = require('generate-password');


function generateRandomPassword() {
  
  const passwordOptions = {
    length: 10, 
    numbers: true, 
    symbols: true, 
    uppercase: true, 
    lowercase: true, 
    excludeSimilarCharacters: true, 
  };

  
  const password = generatePassword.generate(passwordOptions);

  
  console.log('Generated Password:', password);
}


generateRandomPassword();
