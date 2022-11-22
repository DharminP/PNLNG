import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { policy } from 'src/app/models/policy';
import { PoliciesService } from 'src/app/services/policies-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editpolicy',
  templateUrl: './editpolicy.component.html',
  styleUrls: ['./editpolicy.component.css']
})
export class EditpolicyComponent implements OnInit {

  policy: policy = {
    pid: 0,
    pname: "",
    ptype: "",
    pgrade: 0,
    pstatus: "A",
    pdesc_short: "",
    pdesc: "",
    pCoverage: 0,
    pPremium: 0,
    gender: "",
    ageGroup: "",
    members: "",
    insurer: ""
  }
  constructor(private policyservice: PoliciesService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (param) => {
        const id = param.get('pid')
        debugger;
        if (id) {
          this.policyservice.GetPolicyById(parseInt(id))
            .subscribe({
              next: (response) => {
                this.policy = response;
              }
            })
        }
      }
    })
  }

  OnClickSavePolicy() {
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
      this.policyservice.UpdatePolicy(this.policy)
        .subscribe({
          next: (Response) => {
            this.toastr.success("Updated Successfully.")
            this.router.navigate(['../../allpolicies']);
          }
        })
    }
  }
}
