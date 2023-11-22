import { Component, OnInit } from '@angular/core';
import { UserModel } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dataSource: UserModel[] = [];
  userAdd: UserModel = new UserModel();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.dataSource = [];
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAll().subscribe((result: UserModel[]) => {
      console.log(result);
      this.dataSource = result;
    })
  }

  btnSearch(user: UserModel): void {
      this.userService.getById(user.id).subscribe((resultado: UserModel) => {
          let json = JSON.stringify(resultado);
          alert(json);
      });
  }

  btnDelete(user: UserModel): void {
      alert('deletado');
      let index = this.dataSource.findIndex((item) => item == user );
      this.dataSource.splice(index, 1);
      this.dataSource = Array.from(this.dataSource);
  }

  btnSave(): void {
      if (this.userAdd.name) {
        alert('salvo');

        this.dataSource.push(this.userAdd);
        this.dataSource = Array.from(this.dataSource);
      }
  }

}
