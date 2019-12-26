import { TestBed, getTestBed } from "@angular/core/testing";
import { ItineraryService } from "../services/itinerary.service";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";
import { HttpClientModule } from '@angular/common/http';
import { User } from 'src/app/users/models/User.class';
describe("Itinerary service", () => {
  let injector: TestBed;
  let service: ItineraryService;
  //let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ItineraryService]
    });

    injector = getTestBed();
    service = injector.get(ItineraryService);
    //httpMock = injector.get(HttpTestingController);
  });

  it("should return an Observable<Itinerary[]>", (done: DoneFn) => {
    //spyOn(service, ).and.returnValue(of(response))
    service.getItineraryMinimalInfoByUser(9).subscribe({
      next: (data: any) => {
        expect(data.data.length).toBe(11);
        done();
      }
    })
  });
});
