import { DogService } from "./../dogs/dog.service";
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
@Component({
    template: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./custom.css"],
})
export class HomeComponent implements OnInit {
    imgDogApi;
    constructor(private dogService: DogService) {
        dogService.getDogs().then((data) => {
            this.imgDogApi = data;
        });
    }
    ngOnInit(): void {}
}
