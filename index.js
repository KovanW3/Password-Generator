let characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","F","G","E","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",0,1,2,3,4,5,6,7,8,9,"!","@","#","$","%","^","&","*","_","?"]
let totalCharacters = characters.length
let randomPassword = ""
let copytexttone = ""
let passwords = [0, 1]
passwords[0] = document.getElementById("password-one")
passwords[1] = document.getElementById("password-two")

let inputLength = 0

function generatePassword() {
    
    let numbersCheckbox = document.getElementById("numbers-checkbox").checked
    
    if (numbersCheckbox === true) {
        totalCharacters = 72
        for (i = 0; i < 2; i++) {
            
            randomString()
            passwords[i].textContent = randomPassword
            randomPassword = ""
        }
    } else { 
        totalCharacters = 52
        for (i = 0; i < 2; i++) {
            
            randomString()
            passwords[i].textContent = randomPassword
            randomPassword = ""
        }       
    } 
}

function randomString() {
    
     inputLength = document.getElementById("input-length").value
     for (let i = 0; i < inputLength; i++) {
         let randomNumber = Math.floor (Math.random() * totalCharacters)
         let randomCharacter = characters[randomNumber]
         randomPassword += randomCharacter
        
     }
}
 


