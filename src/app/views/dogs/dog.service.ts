import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Dog } from "./dog.model";

@Injectable({
    providedIn: "root",
})
export class DogService {
    constructor(private http: HttpClient) {}

    private urlApi: string = "https://dog.ceo/api/breed/hound/images/random/";

    getDogs(qt?: number): Promise<any> {
        return this.http.get(this.urlApi + qt).toPromise();
    }
}
