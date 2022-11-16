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
  }

  constructor(private policyservice: PoliciesService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (param) => {
        const id = param.get('pid')
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
    this.policyservice.UpdatePolicy(this.policy)
    .subscribe({
      next:(Response)=>{
        this.toastr.success("Updated Successfully.")
        this.router.navigate(['../../allpolicies']);
      }
    })
  }
}
