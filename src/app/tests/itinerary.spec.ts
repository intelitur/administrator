import { TestBed, getTestBed } from "@angular/core/testing";
import { ItineraryService } from "../itinerary/services/itinerary.service";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";
import { HttpClientModule, HttpErrorResponse } from "@angular/common/http";
import { Itinerary } from "../itinerary/models/Itinerary";
import { ResponseInterface } from "../globalModels/Response.interface";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { environment } from "src/environments/environment";

describe("Itinerary service", () => {
  let injector: TestBed;
  let service: ItineraryService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [ItineraryService]
    });

    injector = getTestBed();
    service = injector.get(ItineraryService);
    httpMock = injector.get(HttpTestingController);
  });

  // 25
  it("get itineraries minimal info", (done: DoneFn) => {
    //spyOn(service, ).and.returnValue(of(response))
    service.getItineraryMinimalInfoByUser(9).subscribe({
      next: (data: ResponseInterface) => {
        expect(data.code).toBe(200);
        done();
      }
    });
  });

  // 26
  it("get itineraries minimal info ERROR", (done: DoneFn) => {
    const mockErrorResponse = { status: 500, statusText: 'Bad Request' };
    service.getItineraryMinimalInfoByUser(undefined).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
        done();
      }
    });

    
  });


  // 27
  it("get categories", (done: DoneFn) => {
    //spyOn(service, ).and.returnValue(of(response))
    service.getCategories().subscribe({
      next: (data: ResponseInterface) => {
        expect(data.data).not.toBeNull();
        expect(data.code).toBe(200);
        done();
      }
    });
  });

  // 28
  it("get categories ERROR", () => {
    let response: any;
    let errResponse: any;
    const mockErrorResponse = { status: 400, statusText: "Bad Request" };
    const data = "Invalid request parameters";
    service.getCategories().subscribe(
      res => (response = res),
      (err: HttpErrorResponse) => (errResponse = err)
    );
    httpMock.expectOne(`${environment.SERVER_BASE_URL}category/getAll`).flush(data, mockErrorResponse);
    expect(errResponse.error).toBe(data);
  });

  // 29
  it("get group types", (done: DoneFn) => {
    //spyOn(service, ).and.returnValue(of(response))
    service.getGroupTypes().subscribe({
      next: (data: ResponseInterface) => {
        expect(data.data).not.toBeNull();
        expect(data.code).toBe(200);
        done();
      }
    });
  });

  it("get group types ERROR", () => {
    let response: any;
    let errResponse: any;
    const mockErrorResponse = { status: 400, statusText: "Bad Request" };
    const data = "Invalid request parameters";
    service.getGroupTypes().subscribe(
      res => {
        response = res;
      },
      (err) => (errResponse = err)
    );
    httpMock
      .expectOne(`${environment.SERVER_BASE_URL}groupType/getAll`)
      .flush(data, mockErrorResponse);
    expect(errResponse.error).toBe(data);
  });

  // 31
  it("save itinerary successfully", (done: DoneFn) => {
    //spyOn(service, ).and.returnValue(of(response))
    service
      .saveItinerary(
        new Itinerary(
          {
            name: "nombre de prueba",
            total_price: 10,
            price_per_day: 10,
            adult_number: 10,
            child_number: 10,
            description: "descripción de prueba",
            duration: 5,
            active: false,
            public: false,
            initial_date: Date.now(),
            final_date: Date.now()
          },
          1
        ),
        [1]
      )
      .subscribe({
        next: (data: ResponseInterface) => {
          expect(data.message).not.toBeNull();
          expect(data.code).toBe(200);
          done();
        }
      });
  });

  // 32
  it("save itinerary error", (done: DoneFn) => {
    //spyOn(service, ).and.returnValue(of(response))
    service
      .saveItinerary(
        new Itinerary(
          {
            name: "nombre de prueba",
            total_price: 10,
            price_per_day: 10,
            adult_number: 10,
            child_number: 10,
            description: "descripción de prueba",
            duration: 5,
            active: false,
            public: false,
            initial_date: Date.now(),
            final_date: Date.now()
          },
          undefined
        ),
        [null, undefined]
      )
      .subscribe({
        error: (err: HttpErrorResponse) => {
          expect(err.message).not.toBeNull();
          expect(err.status).toBe(500);
          done();
        }
      });
  });
});
