import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

  })
  export class loginComponent {
    valor1: number;
    valor2: number;
    operacion: string = "ninguna";
    resultado: number;
  }