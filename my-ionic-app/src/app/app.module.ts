import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component'; // Import MenuComponent

@NgModule({
  declarations: [AppComponent], // Do NOT declare MenuComponent here
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, MenuComponent,  IonicStorageModule.forRoot()], // Import it instead
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
