import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'ad-astra',
    loadChildren: () => import('./filmes/ad-astra/ad-astra.module').then( m => m.AdAstraPageModule)
  },
  {
    path: 'resgate',
    loadChildren: () => import('./filmes/resgate/resgate.module').then( m => m.ResgatePageModule)
  },
  {
    path: 'flash',
    loadChildren: () => import('./series/flash/flash.module').then( m => m.FlashPageModule)
  },
  {
    path: 'legends-of-tomorrow',
    loadChildren: () => import('./series/legends-of-tomorrow/legends-of-tomorrow.module').then( m => m.LegendsOfTomorrowPageModule)
  },
  {
    path: 'simpsons',
    loadChildren: () => import('./desenhos/simpsons/simpsons.module').then( m => m.SimpsonsPageModule)
  },
  {
    path: 'futurama',
    loadChildren: () => import('./desenhos/futurama/futurama.module').then( m => m.FuturamaPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
