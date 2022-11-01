import { Component, OnInit } from '@angular/core';
import { policy } from 'src/app/models/policy';
import { PoliciesService } from 'src/app/services/policies-service.service';

@Component({
  selector: 'app-all-policies',
  templateUrl: './all-policies.component.html',
  styleUrls: ['./all-policies.component.css']
})
export class AllPoliciesComponent implements OnInit {
  policies = new Array<policy>;
  constructor(private policyservice: PoliciesService) { }

  ngOnInit(): void {
    this.policyservice.GetAllPolicy()
      .subscribe({
        next: (response) => {
          this.policies = response;
        },
      })
  }
  OnDeleteClick(pid: any): void {    
    this.policyservice.DeletePolicy(parseInt(pid))
      .subscribe({
        next: (response) => {
          this.policies = response;
        }
      })
  }

}
