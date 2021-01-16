import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SpaceXDataService } from './services/space-xdata.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [FormsModule, BrowserModule, HttpClientModule],
  providers: [SpaceXDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
