import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from './supabase.service';
import { AboutmeServices } from './vista/aboutme/aboutme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  session: any;
  aboutme: any;

  constructor( private router: Router, private supabaseService: SupabaseService, public github:AboutmeServices)
  {
    this.session = this.supabaseService.getSession();
  }


  public ngOnInit(): void {
    this.supabaseService.authChanges((_, session) => this.session = session);
    this.github.getUsuario().subscribe((r) => { this.aboutme = r; console.log(r)})
  }

  public isAuthenticated(): boolean {
    if (this.session) {
      return true;
    }
    return false;
  }

  public signOut(): void {
    this.supabaseService.signOut()
    .then(() => {
      this.router.navigate(['/signIn']);
    });
  }

}