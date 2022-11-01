import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { policy } from '../models/policy';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {
  controller = "Policy"
  DomainUrl = environment.DomainAddress;
  Url = this.DomainUrl + '/' + this.controller;
  constructor(private httpclient: HttpClient) { }

  public GetAllPolicy(): Observable<policy[]> {
    console.log("Get---" + this.Url);
    return this.httpclient.get<policy[]>(this.Url);
  }
  public CreatePolicy(policy: policy): Observable<policy[]> {
    console.log("Create---" + this.Url + '--' + policy);
    return this.httpclient.post<policy[]>(this.Url, policy);
  }
  public GetPolicyById(id: number): Observable<policy> {
    return this.httpclient.get<policy>(this.Url + '/' + id);
  }
  public UpdatePolicy(policy: policy): Observable<policy> {
    return this.httpclient.put<policy>(this.Url, policy);
  }
  public DeletePolicy(id: number): Observable<policy[]> {
    return this.httpclient.delete<policy[]>(this.Url + '/' + id);
  }
}
