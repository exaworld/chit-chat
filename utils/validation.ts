export class UserValidation {
    firstName(data: string) {
        if (data.length > 0 && data.length < 20) return true;
        throw new Error('Invalid first name');
    }
  
    lastName(data: string) {
        if (data.length > 0 && data.length < 25) return true;
        throw new Error('Invalid last name')
    }
  
    email(data: string) {
        if (new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(data)) return true;
        throw new Error('Invalid email')
    }
    
    password(data: string) {
        if (data.length > 6 && data.length < 20) return true;
        throw new Error('Password is invalid. Minimum 6 characters. Maximum 20 characters')
    }
  
    passwordConfirmation(password: string, password_confirmation: string) {
        if (password === password_confirmation) return true
        throw new Error('Password and password confirmation do not match')
    }
}
