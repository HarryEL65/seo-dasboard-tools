import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'seo-tls-dbrd-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile;
  constructor(private authService: AuthenticationService) { }

  ngOnInit( ) {
    this.userProfile = this.authService.getCurrentUserProfile();
  }
  onUpdateProfile() {
    // tslint:disable-next-line:max-line-length
    this.authService.updateProfile({displayName: 'Harry ELnekave', photoURL: 'https://www.google.co.il/imgres?imgurl=https%3A%2F%2Fyt3.ggpht.com%2F-Oyn_bH_Z4dc%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2F98Y5yBCN53I%2Fs900-c-k-no-mo-rj-c0xffffff%2Fphoto.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fuser%2Feitan454&docid=Bp39jasPnG7NcM&tbnid=aWcQ6lSJMYQdgM%3A&vet=10ahUKEwiT9qb-p53XAhWFuBoKHaK6A3sQMwg8KAAwAA..i&w=900&h=900&itg=1&bih=900&biw=1920&q=harry%20elnekave&ved=0ahUKEwiT9qb-p53XAhWFuBoKHaK6A3sQMwg8KAAwAA&iact=mrc&uact=8'})
  }

}
