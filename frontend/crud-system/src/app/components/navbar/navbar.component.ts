import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() Drawer: any;

  usuarioLogado: string = "";

  constructor(private shared: SharedService) {
    shared.getUsername().subscribe((retorno: string) => {
      this.usuarioLogado = retorno;
    })
  }

  public showMenu() {
    this.Drawer.toggle();
  }
}
