import { TestBed, getTestBed } from "@angular/core/testing";
import { ItineraryService } from "../itinerary/services/itinerary.service";
import {
  HttpTestingController,
  HttpClientTestingModule
} from "@angular/common/http/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";
import { HttpClientModule, HttpErrorResponse } from "@angular/common/http";
import { ResponseInterface } from "../globalModels/Response.interface";

describe("offers and related tests", () => {
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

  it("Agregar un nuevo día al itinerario", (done: DoneFn) => {
    service.addDay(7, 7, "detalles del día", 5).subscribe({
      next: (data: ResponseInterface) => {
        expect(data.code).toBe(200);
        done();
      }
    });
  });

  it("Error al agregar un nuevo día al itinerario", (done: DoneFn) => {
    service.addDay(7, 2, "detalles del día", 5).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
        done();
      }
    });
  });

  // TODO: revisar cuales ofertas están o no enlazadas con el día
  it("Cambiar la distribución de los días", (done: DoneFn) => {
    let distArray = [
      {
        it: 9,
        offer_id: 1,
        day_number: 1,
        initial_time: "21:40:12.585447",
        final_time: "21:40:12.585447"
      }
    ];

    service.updateDayDistribution(distArray).subscribe({
      next: (result: ResponseInterface) => {
        expect(result.code).toBe(200);
        done();
      }
    });
  });

  // TODO: revisar cuales ofertas están o no enlazadas con el día
  it("Error al cambiar la distribución de los días", (done: DoneFn) => {
    let distArray = [
      {
        it: 7,
        offer_id: 1,
        day_number: 1,
        initial_time: "21:40:12.585447",
        final_time: "21:40:12.585447"
      }
    ];

    service.updateDayDistribution(distArray).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
        done();
      }
    });
  });

  // TODO: revisar algún enlace existente
  it("Desvincular una oferta con un día", (done: DoneFn) => {
    service.unlinkOffer(1, 7, 3).subscribe({
      next: (result: ResponseInterface) => {
        expect(result.code).toBe(200);
        done();
      }
    });
  });

  // TODO: revisar algún enlace existente
  it("Error al desvincular una oferta con un día", (done: DoneFn) => {
    service.unlinkOffer(1, 7, 3).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
        done();
      }
    });
  });

  it("Añadir oferta a favoritos", (done: DoneFn) => {
    service.addFavoriteOffer(4, 14).subscribe({
      next: (data: ResponseInterface) => {
        expect(data.message).not.toBeNull();
        expect(data.code).toBe(200);
        done();
      }
    });
  });

  it("Error al añadir oferta a favoritos", (done: DoneFn) => {
    service.addFavoriteOffer(undefined, undefined).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.message).not.toBeNull();
        expect(err.status).toBe(500);
        done();
      }
    });
  });

  it("Eliminar oferta de favoritos", (done: DoneFn) => {
    service.removeFavoriteOffer(4, 14).subscribe({
      next: (data: ResponseInterface) => {
        expect(data.message).not.toBeNull();
        expect(data.code).toBe(200);
        done();
      }
    });
  });

  it("Error al eliminar oferta de favoritos", (done: DoneFn) => {
    service.removeFavoriteOffer(undefined, undefined).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.message).not.toBeNull();
        expect(err.status).toBe(500);
        done();
      }
    });
  });

  it("Add offer to favorites error", (done: DoneFn) => {
    service.addFavoriteOffer(undefined, undefined).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.message).not.toBeNull();
        expect(err.status).toBe(500);
        done();
      }
    });
  });

  it("getDaysDetails successfully by itinerary", (done: DoneFn) => {
    service.getDaysDetails(5).subscribe({
      next: (data: ResponseInterface) => {
        expect(data.data).not.toBeNull();
        expect(data.code).toBe(200);
        done();
      }
    });
  });

  it("error on getDaysDetails by itinerary", (done: DoneFn) => {
    service.getDaysDetails(undefined).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.message).not.toBeNull();
        expect(err.status).toBe(500);
        done();
      }
    });
  });

  it("getDayInfo successfully by itinerary", (done: DoneFn) => {
    service.getDayInfo(5).subscribe({
      next: (data: ResponseInterface) => {
        expect(data.data).not.toBeNull();
        expect(data.code).toBe(200);
        done();
      }
    });
  });

  it("getDayInfo null data by itinerary", (done: DoneFn) => {
    service.getDayInfo(undefined).subscribe({
      next: (data: ResponseInterface) => {
        expect(data.data).toBeNull();
        expect(data.code).toBe(200);
        done();
      }
    });
  });

  it("error on getDayInfo  by itinerary", (done: DoneFn) => {
    service.getDayInfo(undefined).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.message).not.toBeNull();
        expect(err.status).toBe(500);
        done();
      }
    });
  });
});
