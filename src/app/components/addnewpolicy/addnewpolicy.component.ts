import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { policy } from 'src/app/models/policy';
import { PoliciesService } from 'src/app/services/policies-service.service';

@Component({
  selector: 'app-addnewpolicy',
  templateUrl: './addnewpolicy.component.html',
  styleUrls: ['./addnewpolicy.component.css']
})
export class AddnewpolicyComponent implements OnInit {
  policy: policy = {
    pid: 0,
    pname: "",
    ptype: "",
    pgrade: 0,
    pstatus: "A",
  }
  constructor(private policyservice: PoliciesService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  OnClickCreatePolicy() {
    console.log(this.policy)
    this.policyservice.CreatePolicy(this.policy)
      .subscribe({
        next: () => {
          this.toastr.success("Saved Successfully!!!");
          //alert("Saved Successfully!!!");
          this.router.navigate(['../../allpolicies']);
        }
      });
  }
  
}
