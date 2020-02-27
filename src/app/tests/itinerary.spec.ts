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

  it("Vincular una promoción", (done: DoneFn) => {
    service.addPromotionInItinerary(9).subscribe({
      next: (data: any) => {
        expect(data.code).toBe(200);
        done();
      }
    });
  });

  it("Error al vincular una promoción", (done: DoneFn) => {
    service.addPromotionInItinerary(undefined).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
        done();
      }
    });
  });
  it("Desvincular una promoción", (done: DoneFn) => {
    service.deletePromotionOfItinerary(9).subscribe({
      next: (data: any) => {
        expect(data.code).toBe(200);
        done();
      }
    });
  });
  it("Error al desvincular una promoción", (done: DoneFn) => {
    service.itinerary_id = undefined;
    service.deletePromotionOfItinerary(undefined).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
        done();
      }
    });
  });
  it("Obtener promociones ya vinculadas a un itinerario", (done: DoneFn) => {
    service.getPromotionByItineraryID().subscribe({
      next: (data: any) => {
        expect(data.code).toBe(200);
        done();
      }
    });
  });
  it("Error al obtener promociones ya vinculadas a un itinerario", (done: DoneFn) => {
    service.itinerary_id = undefined;
    service.getPromotionByItineraryID().subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
        done();
      }
    });
  });
  it("Obtener todas las promociones", (done: DoneFn) => {
    service.getAllPromotions().subscribe({
      next: (data: any) => {
        expect(data.code).toBe(200);
        done();
      }
    });
  });

  it("Error al obtener todas las promociones", (done: DoneFn) => {
    service.itinerary_id = undefined;
    service.getAllPromotions().subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
        done();
      }
    });
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
    const mockErrorResponse = { status: 500, statusText: "Bad Request" };
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
    httpMock
      .expectOne(`${environment.SERVER_BASE_URL}category/getAll`)
      .flush(data, mockErrorResponse);
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
      err => (errResponse = err)
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
  // 33
  it("Habilitar itinerario exitosamente", (done: DoneFn) => {
    service
      .changeActiveState(8, {
        name: "nombre de prueba",
        total_price: 10,
        price_per_day: 10,
        adult_number: 10,
        child_number: 10,
        description: "descripción de prueba",
        duration: 5,
        active: true,
        public: false,
        initial_date: Date.now(),
        final_date: Date.now()
      })
      .subscribe({
        next: (data: ResponseInterface) => {
          expect(data.message).not.toBeNull();
          expect(data.code).toBe(200);
          done();
        }
      });
  });
  // 34
  it("Deshabilitar itinerario exitosamente", (done: DoneFn) => {
    //spyOn(service, ).and.returnValue(of(response))
    service
      .changeActiveState(8, {
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
      })
      .subscribe({
        next: (data: ResponseInterface) => {
          expect(data.message).not.toBeNull();
          expect(data.code).toBe(200);
          done();
        }
      });
  });
  // 35
  it("Error al cambiar el estado de un itinerario", (done: DoneFn) => {
    service.changeActiveState(undefined, undefined).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.message).not.toBeNull();
        expect(err.status).toBe(500);
        done();
      }
    });
  });
  // 36
  it("Añadir itinerario a favoritos exitosamente", (done: DoneFn) => {
    service.addFavoriteItinerary(8, 14).subscribe({
      next: (data: ResponseInterface) => {
        expect(data.message).not.toBeNull();
        expect(data.code).toBe(200);
        done();
      }
    });
  });

  // 37
  it("Error al añadir itinerarios a favoritos", (done: DoneFn) => {
    service.addFavoriteItinerary(undefined, undefined).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.message).not.toBeNull();
        expect(err.status).toBe(500);
        done();
      }
    });
  });
  // 38
  it("Eliminar itinerario de favoritos exitosamente", (done: DoneFn) => {
    service.removeFavoriteItinerary(8, 14).subscribe({
      next: (data: ResponseInterface) => {
        expect(data.message).not.toBeNull();
        expect(data.code).toBe(200);
        done();
      }
    });
  });

  // 39
  it("Error al eliminar itinerarios de favoritos", (done: DoneFn) => {
    service.removeFavoriteItinerary(undefined, undefined).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.message).not.toBeNull();
        expect(err.status).toBe(500);
        done();
      }
    });
  });

  // 40
  it("Obtener los id de itinerarios en favoritos", (done: DoneFn) => {
    service.getFavoriteItinerary(19).subscribe({
      next: (data: ResponseInterface) => {
        expect(data.code).toBe(200);
        done();
      }
    });
  });

  // 41
  it("Obtener los id de itinerarios en favoritos ERROR", (done: DoneFn) => {
    const mockErrorResponse = { status: 500, statusText: "Bad Request" };
    service.getFavoriteItinerary(undefined).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
        done();
      }
    });
  });

  // 42
  it("Obtener los id de ofertas en favoritos", (done: DoneFn) => {
    service.getFavoriteOffer(19).subscribe({
      next: (data: ResponseInterface) => {
        expect(data.code).toBe(200);
        done();
      }
    });
  });

  // 43
  it("Obtener los id de ofertas en favoritos ERROR", (done: DoneFn) => {
    const mockErrorResponse = { status: 500, statusText: "Bad Request" };
    service.getFavoriteOffer(undefined).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
        done();
      }
    });
  });

  // 44
  it("Obtener info de itinerarios en favoritos", (done: DoneFn) => {
    service.getFavoriteItineraryMinimalInfoByUser(19).subscribe({
      next: (data: ResponseInterface) => {
        expect(data.code).toBe(200);
        done();
      }
    });
  });

  // 45
  it("Obtener info de itinerarios en favoritos ERROR", (done: DoneFn) => {
    const mockErrorResponse = { status: 500, statusText: "Bad Request" };
    service.getFavoriteItineraryMinimalInfoByUser(undefined).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
        done();
      }
    });
  });

  // 46
  it("Obtener info de ofertas en favoritos", (done: DoneFn) => {
    service.getFavoriteOfferInfoByUser(19).subscribe({
      next: (data: ResponseInterface) => {
        expect(data.code).toBe(200);
        done();
      }
    });
  });

  // 47
  it("Obtener info de ofertas en favoritos ERROR", (done: DoneFn) => {
    const mockErrorResponse = { status: 500, statusText: "Bad Request" };
    service.getFavoriteOfferInfoByUser(undefined).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
        done();
      }
    });
  });

  it("Error al obtener puntos de eventos geográficos por id del itinerario", () => {
    let response: any;
    let errResponse: any;
    const mockErrorResponse = { status: 400, statusText: "Bad Request" };
    const data = "Invalid request parameters";
    service.itinerary_id = 5;
    service.getEventGeomByItineraryID().subscribe(
      res => (response = res),
      (err: HttpErrorResponse) => (errResponse = err)
    );
    httpMock
      .expectOne(
        `${environment.SERVER_BASE_URL}itinerary/getEventGeomByItineraryID/5`
      )
      .flush(data, mockErrorResponse);
    expect(errResponse.error).toBe(data);
  });

  it("Obtener puntos de eventos geográficos por id del itinerario", (done: DoneFn) => {
    service.getEventGeomByItineraryID().subscribe({
      next: (data: ResponseInterface) => {
        expect(data.message).not.toBeNull();
        expect(data.code).toBe(200);
        done();
      }
    });
  });
});
