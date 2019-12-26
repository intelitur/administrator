import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";
import { TestBed, getTestBed } from "@angular/core/testing";
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { UserProfileService } from '../../services/user-profile.service';
import { SessionService } from 'src/app/general-services/session.service';
import { BusinessMan } from '../../models/Businessman.class';

describe("User profile service", () => {
  let injector: TestBed;
  let service: UserProfileService;
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UserProfileService]
    });

    injector = getTestBed();
    service = injector.get(UserProfileService);
  });

  it("Error al obtener un usuario", (done: DoneFn) => {
    service.getUser(-1).subscribe({
      next: (data: any) => {
        expect(data.code).toBe(500);
        done();
      }
    })
  });

  it("Obtener un usuario", (done: DoneFn) => {
    service.getUser(15).subscribe({
      next: (data: any) => {
        expect(data.code).toBe(200);
        done();
      }
    })
  });

  it("Error al actualizar un usuario", (done: DoneFn) => {
    let idTest = -1;
    let infoTest  = {
      name: "asd123",
      lastName: "asd123",
      businessName: "asd123",
      email: "asd@asd",
      password: "ads123",
      available: true,
      state: false
    };
    let passChanged = false;
    service.updateUser(idTest, infoTest as any, passChanged).subscribe({
      next: (data: any) => {
        expect(data.code).toBe(500);
        done();
      }
    })
  });

  it("Actualizar un usuario", (done: DoneFn) => {
    let idTest = 15;
    let infoTest = {
      name: "asd123",
      lastName: "asd123",
      businessName: "asd123",
      email: "asd@asd",
      password: "ads123",
      available: true,
      state: false
    };
    let passChanged = false;
    service.updateUser(idTest, infoTest as any, passChanged).subscribe({
      next: (data: any) => {
        expect(data.code).toBe(200);
        done();
      }
    })
  });
});

describe("Sesion service", () => {
  let injector: TestBed;
  let service: SessionService;
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SessionService]
    });
    injector = getTestBed();
    service = injector.get(SessionService);
  });

  it("Add bussines user error", (done: DoneFn) => {
    service.saveUser(undefined, 2).subscribe({
      next: (data: any) => {
        expect(data.code).toBe(500);
        done();
      }
    })
  });

  it("Add bussines user", (done: DoneFn) => {
    let infoTest : BusinessMan = {
      name: "asd123",
      lastName: "asd123",
      businessName: "asd123",
      email: "asd@asd",
      password: "ads123",
      available: true,
      state: false
    };
    service.saveUser(infoTest, 2).subscribe({
      next: (data: any) => {
        expect(data.code).toBe(200);
        done();
      }
    })
  });

  it("Add admi user error", (done: DoneFn) => {
    service.saveUserAdmi(undefined, 1).subscribe({
      next: (data: any) => {
        expect(data.code).toBe(500);
        done();
      }
    })
  });

  it("Add admi user", (done: DoneFn) => {
    let infoTest : BusinessMan = {
      name: "asd123",
      lastName: "asd123",
      businessName: "asd123",
      email: "asd@asd",
      password: "ads123",
      available: true,
      state: false
    };
    service.saveUserAdmi(infoTest, 1).subscribe({
      next: (data: any) => {
        expect(data.code).toBe(200);
        done();
      }
    })
  });
});


