import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from 'src/app/users/services/user.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CompanyUsersService } from 'src/app/company/services/company-users.service';
import { CommonService } from 'src/app/general-services/common.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-company-add-user',
  templateUrl: './company-add-user.component.html',
  styleUrls: ['./company-add-user.component.scss']
})
export class CompanyAddUserComponent implements OnInit {

  users: any[]

  loading = false

  filter = {
    input: '',
    filter: ({info}: any) => ((info.name.toLowerCase() + ' ' + info.lastName.toLowerCase()).indexOf(this.filter.input.toLowerCase()) > -1)
  }

  constructor(
    private usersService: UserService,
    private companyUsersService: CompanyUsersService,
    private commonService: CommonService,
    public dialogRef: MatDialogRef<CompanyAddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.usersService.getAllUser().subscribe(({code, data}: any) => {
      if(code == 200){
        console.log(data)
        this.users = data
        
        let companyUsers : any[] = this.data.users.map(user => user.user_id)
        this.users = this.users.filter((user) => !companyUsers.includes(user.user_id))
      }
    })
  }

  addUserToCompany(user: any, isAdmin = false){
    this.loading = true;
    console.log(user)
    this.companyUsersService.addUserToCompany(user.user_id, this.data.company.company_id, isAdmin).subscribe(
      {
        next: (data: any) => {
          if (data.status == 204) {
            this.users = this.users.filter((u: any) => u != user)
            this.commonService.openSnackBar(
              `Se ha asociado el usuario ${user.info.name} a la empresa ${this.data.company.name} como ${isAdmin? 'administrador': 'empleado'}`,
              "OK"
            );
          } else {
            this.commonService.openSnackBar(
              `Error al asociar el usuario: ${data.error}`,
              "OK"
            );
          }
          this.loading = false
        },
        error: (err: HttpErrorResponse) => {
          console.log(err)
          this.commonService.openSnackBar(`Error: ${err.message}`, "OK")
          this.loading = false
        }
        
      }
    )
  }

}
