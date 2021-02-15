import { DogService } from "./dog.service";
import { OnInit, Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Dog } from "./dog.model";

@Component({
    selector: "dogs",
    templateUrl: "./dogs.component.html",
    styleUrls: ["./custom.css"],
})
export class DogsComponent implements OnInit {
    dogs;
    constructor(private dogService: DogService) {
        dogService.getDogs(6).then((data) => {
            this.dogs = data;
        });
    }

    ngOnInit(): void {}
}
