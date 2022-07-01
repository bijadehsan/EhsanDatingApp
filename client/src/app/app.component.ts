import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  testUsers: any;

  constructor(private http: HttpClient) {

  }

  // at the begining of a component this method ngOnInit() gets called always
  ngOnInit(): void {
    // we call our own method getUsers()
    this.getTestUsers();
  }

  // getUsers method to call our API server to get list of users
  getTestUsers() {
    this.http.get('http://localhost:5000/api/users/test').subscribe(result => {
      this.testUsers = result;
      console.log(this.testUsers);
    }, error => {
      console.log(error);
    })
  }
}
