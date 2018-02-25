
@NgModule({

})
export class AppRountingModule {
const appRoutes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent}, // :
  ]},
  {path: 'servers', component: ServersComponent, children: [
    {path: ':id/edit', component: EditServerComponent},
    {path: ':id', component: ServerComponent}
  ] },
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found,'} // ** is wildcard, catch all path that was not declare , needed to place in the end since path is parsing in order
]

}