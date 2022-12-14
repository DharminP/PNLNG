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
    ptype: "null",
    pgrade: 0,
    pstatus: "Active",
    pdesc_short: "",
    pdesc: "",
    pCoverage: 0,
    pPremium: 0,
    gender: "null",
    ageGroup: "null",
    members: "null",
    insurer: "null"
  }
  constructor(private policyservice: PoliciesService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  OnClickCreatePolicy() {
    console.log(this.policy)
    debugger;
    if (this.policy.pname == "") {
      this.toastr.warning("Please enter policy name.")
      return;
    }
    else if (this.policy.ptype == "null") {
      this.toastr.warning("Please select policy type.")
      return;
    }
    else if (this.policy.pgrade == 0) {
      this.toastr.warning("Please select policy grade.")
      return;
    }
    else if (this.policy.insurer == "null") {
      this.toastr.warning("Please select insurer.")
      return;
    }
    else {
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

}
