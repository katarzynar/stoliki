import { RouterModule, Routes} from '@angular/router'; 
import { RestaurantsListComponent } from "./restaurants-list.component";
import { RestaurantComponent } from "./restaurant.component";
import { HomeComponent } from "./home.component";
import { FiltersComponent } from "./filters.component";
import { SearchComponent } from "./search.component";
import { ProfileComponent } from "./profile.component";
import { FavouriteComponent } from "./favourite.component";
import { ReservationsComponent } from "./reservations.component";
import { HistoryComponent } from "./history.component";

const routes:Routes = [
    
    { path:'', component: HomeComponent },
    { path:'list', component: RestaurantsListComponent }, 
    { path:'filtry', component: FiltersComponent },
    { path:'restaurant', component: RestaurantComponent },
    { path:'search', component: SearchComponent },
    { path:'profile', component: ProfileComponent },
    { path:'favourite', component: FavouriteComponent },
    { path:'reservations', component: ReservationsComponent },
    { path:'history', component: HistoryComponent }


   

    
    
     

    ]
    export const Routing = RouterModule.forRoot(routes)