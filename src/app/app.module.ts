import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [/*声明模块中有什么东西  只能声明 组件  指令 管道*/
    AppComponent, NavbarComponent, FooterComponent, SearchComponent, CarouselComponent, ProductComponent, StarsComponent
  ],
  imports: [/*声明该模块所依赖的模块*/
    BrowserModule,
    AppRoutingModule
  ],
  /*声明模块中听过的服务*/
  providers: [],
  bootstrap: [AppComponent]/*声明模块中的主组件*/
})
export class AppModule { }
