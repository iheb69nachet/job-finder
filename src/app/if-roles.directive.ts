import { Input, OnInit, Directive, ViewContainerRef, TemplateRef, OnDestroy } from "@angular/core";
import {  Subscription } from "rxjs";
import { AuthenticationService } from './_services';

@Directive({
  selector: '[appHasRole]'
})
export class IfRolesDirective implements OnInit, OnDestroy {
  private subscription: Subscription[] = [];
  @Input() appHasRole: string;
  // roles:Array<string>=["candidate","admin","company"]
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private authenticationService: AuthenticationService

  ) {

  }
  public ngOnInit(): void {
    console.log(this.appHasRole)

    this.subscription.push(
    
    this.authenticationService.currentUser.subscribe(res => {
      const role =res.role
      

      role!=this.appHasRole?this.viewContainerRef.clear(): this.viewContainerRef.createEmbeddedView(this.templateRef);
   
      })
    );
  }
  public ngOnDestroy(): void {
    this.subscription.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

}
