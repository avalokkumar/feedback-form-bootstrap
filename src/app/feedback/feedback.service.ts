import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class FeedbackService {

  constructor(private http: Http) {
    console.log("http service initialized");
  }

  retrieveQuestions(){
    return this.http.get('src/data/questions.json')
      .map((response: Response) => response.json().questions)
      .do((data) => {
        console.log('Data incoming')
        console.log(data)
      })
      .catch(this.handleErrors);
  }

  handleErrors(error:Response){
    console.log("Error Occured "+error);
    return Observable.throw(error.json().error || 'Server Error Occurred');
  }
}
