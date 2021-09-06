import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {BooksListComponent} from "./books-list/books-list.component";
import {BookDetailsComponent} from "./book-details/book-details.component";

const routes: Routes = [
  {path: 'books-list', component: BooksListComponent},
  {path: 'books/:bookId', component: BookDetailsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: '', redirectTo: '/books-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
