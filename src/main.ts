/*导入方法*/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
/*整个项目的入口，Angular通过这个文件来启动项目*/
if (environment.production) {
  /*如果是生产模式  就关闭开发者模式*/
  enableProdMode();
}
/*程序的起点，整个程序就是从这里运行的，AppModule指向的是
/app/app.module，也就是说程序启动时会去加载/app/app.module这个文件*/
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
