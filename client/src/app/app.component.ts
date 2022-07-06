import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient) {}

  // at the begining of a component this method ngOnInit() gets called always
  ngOnInit() {
    // we call our own method getUsers()
    this.getUsers();
  }

  // getUsers method to call our API server to get list of users
  getUsers() {
    this.http.get('http://localhost:5000/api/users').subscribe({
      next: response => this.users = response,
      error:error=>console.log(error)
    })
  }
}
