import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() Drawer: any;

  usuarioLogado: string = "";

  subscription !: Subscription;

  constructor(private shared: SharedService) {
   
  }

  ativar() {
    this.subscription = this.shared.getUsername().subscribe((retorno: string) => {
      this.usuarioLogado = retorno;
    });
  }

  desativar() {
    this.subscription.unsubscribe();
  }

  public showMenu() {
    this.Drawer.toggle();
  }
}
