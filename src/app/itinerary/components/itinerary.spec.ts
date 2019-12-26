import { TestBed, getTestBed } from "@angular/core/testing";
import { ItineraryService } from "../services/itinerary.service";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import {environment} from '../../../environments/environment';


describe("Promotions", () => {
  let injector: TestBed;
  let service: ItineraryService;
  let auxRoute: String = '';
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
  });

  it("Vincular una promoción", (done: DoneFn) => {
    service.addPromotionInItinerary(9).subscribe({
      next: (data: any) => {
        expect(data.code).toBe(200);
        done();
      }
    })
  });

  it("Error al vincular una promoción", (done: DoneFn) => {
    service.addPromotionInItinerary(undefined).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
        done();
      }
    })
  });
  it("Desvincular una promoción", (done: DoneFn) => {
    service.deletePromotionOfItinerary(9).subscribe({
      next: (data: any) => {
        expect(data.code).toBe(200);
        done();
      }
    })
  });
  it("Error al desvincular una promoción", (done: DoneFn) => {
    service.itinerary_id = undefined;
    service.deletePromotionOfItinerary(undefined).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
        done();
      }
    })
  });
  it("Obtener promociones ya vinculadas a un itinerario", (done: DoneFn) => {
    service.getPromotionByItinerayID().subscribe({
      next: (data: any) => {
        expect(data.code).toBe(200);
        done();
      }
    })
  });
  it("Error al obtener promociones ya vinculadas a un itinerario", (done: DoneFn) => {
    service.itinerary_id = undefined;
    service.getPromotionByItinerayID().subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
        done();
      }
    })
  });
  it("Obtener todas las promociones", (done: DoneFn) => {
    service.getAllPromotions().subscribe({
      next: (data: any) => {
        expect(data.code).toBe(200);
        done();
      }
    })
  });

  it("Error al obtener todas las promociones", (done: DoneFn) => {
    service.itinerary_id = undefined;
    service.getAllPromotions().subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
        done();
      }
    })
  });
});

