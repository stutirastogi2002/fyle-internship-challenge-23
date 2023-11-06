import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }
  getRepos(username: string, perPage: number, startIndex: number) {
    const url = `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${startIndex / perPage + 1}`;
    console.log("i got this" + this.httpClient.get(url));
    return this.httpClient.get(url);
  }
  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
