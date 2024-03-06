import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BikesModule } from './bikes/bikes.module';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/services/search.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SearchComponent, BikesModule],
  providers: [SearchService],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
