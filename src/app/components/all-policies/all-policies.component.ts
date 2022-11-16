import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { policy } from 'src/app/models/policy';
import { PoliciesService } from 'src/app/services/policies-service.service';
import { ModalDismissReasons, NgbModal  } from "@ng-bootstrap/ng-bootstrap";
//import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-all-policies',
  templateUrl: './all-policies.component.html',
  styleUrls: ['./all-policies.component.css']
})
export class AllPoliciesComponent implements OnInit {
  policies = new Array<policy>;
  constructor(private policyservice: PoliciesService,private toastr: ToastrService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.policyservice.GetAllPolicy()
      .subscribe({
        next: (response) => {
          this.policies = response;
        },
      })
  } 
 
  OnDeleteClick(content : any,pid: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {  
      if (result === 'yes') {  
        this.policyservice.DeletePolicy(parseInt(pid))
      .subscribe({
        next: (response) => {
          this.policies = response;
          this.toastr.warning("Deleted Successfully.")
        }
      }) 
      }  
    }, (reason) => {  
    });  
  }

}
