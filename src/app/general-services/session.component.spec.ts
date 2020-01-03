import { TestBed, getTestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { SharedModule } from 'src/app/shared.module';
import { SessionService } from './session.service';
describe("Authentication", () => {
  let injector: TestBed;
  let service: SessionService;
  beforeEach(() => {
    //jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      imports: [HttpClientModule, SharedModule],
      providers: [SessionService]
    });
    injector = getTestBed();
    service = injector.get(SessionService);
  });

  it("Autenticación de usuario correctamente", (done: DoneFn) => {

    service.login('o@o','o').subscribe({
      next: (data: any) => {
        expect(data.code).toBe(200);
        done();
      }
    })
  });

  it("Error en la autenticación de usuario", (done: DoneFn) => {

    service.login('o@o','o23ca').subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(401);
        done();
      }
    })
  });

  it("Error al enviar el código para cambiar contraseña", (done: DoneFn) => {
    service.sendCodePassword('o@oasdasd').subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.error.messaje).not.toBeNull();
        done();
      }
    })
  });
  it("Error al cambiar la contraseña por código", (done: DoneFn) => {
    service.changePasswordByCode('1234','123456').subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.error.messaje).not.toBeNull();
        done();
      }
    })
  });

  it("Cambio de contraseña por código correctamente", (done: DoneFn) => {
    service.changePasswordByCode('1234','68111733952').subscribe({
      next: (data: any) => {
        expect(data.code).toBe(200);
        done();
      }
    })
  });
});
