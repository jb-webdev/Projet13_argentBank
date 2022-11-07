// fuction validate => email
// function validate => password
// function validate => firstName
// function validate => lastName
// function validate => remenber check box

// je doit retourner un message d'ereur 


export function validateEmail (emailValue) {
    console.log(emailValue)
    let email = emailValue
    let regexInput = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let errorInput = false
    let msgError = document.getElementById("erreurEmail");
    if (!email) {
        msgError.innerHTML = "Le champ ne doit pas être vide !";
        errorInput = false;
      } else if(!regexInput.test(email)) {
        msgError.innerHTML = "Votre email est invalide";
        errorInput = false;
      } else if (regexInput.test(email)) {
        msgError.innerHTML = "";
        errorInput = true;
      }
      console.log(errorInput)
      return errorInput;
}