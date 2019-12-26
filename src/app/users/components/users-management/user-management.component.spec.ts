import { TestBed, getTestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { UserManagementService } from '../../services/user-management.service';
import { SharedModule } from 'src/app/shared.module';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
describe("User-Management", () => {
  let injector: TestBed;
  let service: UserManagementService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      imports: [HttpClientModule, SharedModule, HttpClientTestingModule],
      providers: [UserManagementService]
    });

    injector = getTestBed();
    service = injector.get(UserManagementService);
    httpMock = injector.get(HttpTestingController);
  });

  it("Habilitar un usuario", (done: DoneFn) => {
    let testInfo = {
      name: "asd123",
      lastName: "asd123",
      businessName: "asd123",
      email: "asd@asd",
      password: "ads123",
      available: true,
      state: false
    }
    service.changeAvailableOrStateUser(18, testInfo as any).subscribe({
      next: (data: any) => {

        expect(data.code).toBe(200);
        done();
      }
    })
  });

  it("Error al habilitar un usuario", (done: DoneFn) => {

    service.changeAvailableOrStateUser(18,undefined).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
        done();
      }
    })
  });

  it("Deshabilitar un usuario", (done: DoneFn) => {
    let testInfo = {
      name: "asd123",
      lastName: "asd123",
      businessName: "asd123",
      email: "asd@asd",
      password: "ads123",
      available: false,
      state: false
    }
    service.changeAvailableOrStateUser(18, testInfo as any).subscribe({
      next: (data: any) => {

        expect(data.code).toBe(200);
        done();
      }
    })
  });

  it("Error al deshabilitar un usuario", (done: DoneFn) => {
    service.changeAvailableOrStateUser(22,undefined).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
        done();
      }
    })
  });

  it("Validar un usuario empresario", (done: DoneFn) => {
    let testInfo = {
      name: "asd123",
      lastName: "asd123",
      businessName: "asd123",
      email: "asd@asd",
      password: "ads123",
      available: false,
      state: true
    }
    service.changeAvailableOrStateUser(18, testInfo as any).subscribe({
      next: (data: any) => {

        expect(data.code).toBe(200);
        done();
      }
    })
  });

  it("Error al validar un usuario", (done: DoneFn) => {
    service.changeAvailableOrStateUser(4,undefined).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
        done();
      }
    })
  });

  it("Get all users error", () => {
    let response: any;
    let errResponse: any;
    const mockErrorResponse = { status: 400, statusText: "Bad Request" };
    const data = "Invalid request parameters";
    service.getAllUser().subscribe(
      res => (response = res),
      (err: HttpErrorResponse) => (errResponse = err)
    );
    httpMock.expectOne(`${environment.SERVER_BASE_URL}category/getAll`).flush(data, mockErrorResponse);
    expect(errResponse.error).toBe(data);
  });

  it("Get all users", (done: DoneFn) => {
    service.getAllUser().subscribe({
      next: (data: any) => {
        expect(data.code).toBe(200);
        done();
      }
    })
  });
});


