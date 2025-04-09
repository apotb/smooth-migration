import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-legal-popup',
  templateUrl: './legal-popup.page.html',
  styleUrls: ['./legal-popup.page.scss'],
  imports: [CommonModule, IonicModule],
})
export class LegalPopupPage implements  AfterViewInit {
  @ViewChild(IonContent) scrollableContent!: IonContent;

  constructor(private router: Router) { }

  ngAfterViewInit() {
      let acceptButton = document.getElementById('accept-button');
      this.scrollableContent?.getScrollElement().then(sc => {
          sc.addEventListener('scroll', () => {
              if (this.isAtBottom(sc)) {
                  acceptButton?.removeAttribute('disabled');
              }
          });
      });
  }

  isAtBottom(scrollable_content: HTMLElement): boolean {
      if (!scrollable_content) {return false;}
      return scrollable_content.scrollHeight - scrollable_content.scrollTop <= scrollable_content.clientHeight + 10;
  }

  public acceptClick() {
      this.router.navigate(['/tabs']);
  }

  public declineClick() {
      this.router.navigate(['/']);
  }

}
