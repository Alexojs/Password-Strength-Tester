import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent {
  password: string = '';
  bar1Color: string = 'gray';
  bar2Color: string = 'gray';
  bar3Color: string = 'gray';
  passwordStrengthMessage: string = '';
  showPassword: boolean = false;

  updatePasswordStrength() {
    const length = this.password.length;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*()_+{}[\]:;<>,.?~\\\-/\\\-]/.test(this.password);

    if (length === 0) {
      this.setBarsColor('gray', 'gray', 'gray');
      this.passwordStrengthMessage = '';
    } else if (length < 8) {
      this.setBarsColor('red', 'red', 'red');
      this.passwordStrengthMessage = 'Password is too short';
    } else if (hasLetters && hasDigits && hasSymbols) {
      this.setBarsColor('green', 'green', 'green');
      this.passwordStrengthMessage = 'Strong Password';
    } else if (hasLetters && (hasDigits || hasSymbols) || (hasDigits && hasSymbols)) {
      this.setBarsColor('yellow', 'yellow', 'gray');
      this.passwordStrengthMessage = 'Medium Password';
    } else {
      this.setBarsColor('red', 'gray', 'gray');
      this.passwordStrengthMessage = 'Weak Password';
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  setBarsColor(color1: string, color2: string, color3: string) {
    this.bar1Color = color1;
    this.bar2Color = color2;
    this.bar3Color = color3;
  }
}
