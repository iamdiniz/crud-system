import { Component, OnInit } from '@angular/core';
import { UserModel } from './models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dataSource: UserModel[] = [];
  userAdd: UserModel = new UserModel();

  ngOnInit(): void {
    this.dataSource = [
      {
        id: 0,
        name: 'teste',
        email: 'teste@gmail.com'
      },
      {
        id: 1,
        name: 'teste1',
        email: 'teste1@gmail.com'
      },
    ];
  }

  btnSearch(user: UserModel): void {
      alert('buscando');
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
