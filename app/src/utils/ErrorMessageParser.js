export default function(errorCode){

    switch(errorCode){

        case 'auth/email-already-exists':
            return "Email already exists. Please try using a different email address.";

        case 'auth/email-already-in-use':
            return "Email already in use by another account. Please try using a different email address.";

        case 'auth/invalid-email':
            return "Invalid email address. Please ensure that the email address is entered correctly and try again.";

        case 'auth/invalid-password':
            return "Invalid password. Please ensure that the password is entered correctly and try again.";
        
        case 'auth/wrong-password':
            return "Wrong password. Please ensure that the password is entered correctly and try again."
       
        case 'auth/user-not-found':
            return "The user account associated with this email address could not be found. Please ensure that the email address is entered correctly or sign up to create a new account.";
        
        default:
            return errorCode;
    }
}