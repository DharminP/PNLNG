import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-termsconditionspopup',
  templateUrl: './termsconditionspopup.component.html',
  styleUrls: ['./termsconditionspopup.component.css']
})
export class TermsconditionspopupComponent implements  AfterViewInit {
  @ViewChild('termsconditions') termsconditions: any;

  constructor(private modalService: NgbModal) { } 
  ngAfterViewInit(): void {
    this.modalService.open(this.termsconditions, {centered: true});
  }
}
