import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'todo',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4300/remoteEntry.js',
      remoteName: 'mfeApp',
      exposedModule: './TodoListModule'
    }).then(m => m.TodoListModule).catch(err => console.log(err))
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
