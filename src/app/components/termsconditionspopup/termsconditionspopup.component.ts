import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-termsconditionspopup',
  templateUrl: './termsconditionspopup.component.html',
  styleUrls: ['./termsconditionspopup.component.css']
})
export class TermsconditionspopupComponent implements AfterViewInit {
  @ViewChild('termsconditions') termsconditions: any;
  
  constructor(private modalService: NgbModal) { }

  ngAfterViewInit(): void {
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false,
      centered: true
};
    this.modalService.open(this.termsconditions, ngbModalOptions);
  }
}
