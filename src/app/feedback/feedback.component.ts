import { Component, OnInit } from '@angular/core';
import {FeedbackService} from "./feedback.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  providers: [FeedbackService]
})
export class FeedbackComponent implements OnInit {

  questions: any;

  constructor(private feedbackService: FeedbackService) {
    console.log("Feeddback Service initialized");
  }

  ngOnInit() {
      this.feedbackService.retrieveQuestions().subscribe(questions => this.questions = questions);
  }


}
