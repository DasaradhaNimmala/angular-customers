import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codewelltech';
  userData = [{ name: "John Smith", location: "Bangalore", gender: "Male" ,age:35},
  { name: "Vishawk Shen", location: "Hyderabad", gender: "Male" ,age:35},
  { name: "Sushma", location: "Delhi", gender: "Female",age:35 },
  { name: "Lalitha", location: "Delhi", gender: "Female",age:35 }];
}