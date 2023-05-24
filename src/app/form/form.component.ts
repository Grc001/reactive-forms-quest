import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

class User {
  constructor(
    public username: string,
    public email: string,
    public address: string,
    public password: string
  ) {}
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  username = new FormControl('');
  email = new FormControl('');
  address = new FormControl('');
  password = new FormControl('');

  user: User | null = null;

  createUser() {
    this.user = new User(
      this.username.value!,
      this.email.value!,
      this.address.value!,
      this.password.value!
    );
  }
}
