import { DogService } from "./views/dogs/dog.service";
import { DogsComponent } from "./views/dogs/dogs.component";
import { HomeComponent } from "./views/home/home.component";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
    NativeScriptHttpClientModule,
    NativeScriptModule,
} from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
    ],
    declarations: [AppComponent, HomeComponent, DogsComponent],
    providers: [DogService],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
