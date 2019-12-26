/*import { Substitute, Arg } from "@fluffy-spoon/substitute";
import { Foto } from "./foto";
import { Person } from "./person";
import { Grupo } from "./grupo";
import { Album } from "./album";

describe("Casos de prueba para foto y grupo", () => {
  let p: Person = new Person("mail@mail.com", "Nombre", "Apellido1", "Apellido2", "Password", "H");
  beforeEach(async () => {
    p = new Person("mail@mail.com", "Nombre", "Apellido1", "Apellido2", "Password", "H");
  });

  afterEach(async() => {
    p = null;
  });

  // 1
  it("Obtener tamaño del array foto", () => {
    const fotoAccess = Substitute.for<Foto>();

    p.setListaFotos(fotoAccess);
    expect(p.getListaFotos().length).toBe(1);
  });

  // 2
  it("Obtener tamaño del array grupo", () => {
    const grupoAccess = Substitute.for<Grupo>();
    p.setListaGrupos(grupoAccess);
    expect(p.getListaGrupos().length).toBe(1);
  });

  // 3

  it("Obtener etiquetas de foto enviando un nombre de fichero que no existe", () => {
    const fotoAccess = Substitute.for<Foto>();

    p.setListaFotos(fotoAccess);
    expect(p.verEtiquetas(null)).toBe("");
  });

  // 4
  it("Agregar foto", () => {
    const fotoAccess = Substitute.for<Foto>();
    p.setListaAlbumes(new Album("album1", "hola"));

    p.agregarFoto("album1", fotoAccess);

    expect(
      p
        .getListaAlbumes()
        .find(a => a.getNombre() === "album1")
        .getListaFotos().length
    ).toBe(1);
  });
});*/

import { TestBed, inject } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { SharedModule } from "src/app/shared.module";
import { ItineraryService } from "../services/itinerary.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

describe("Itinerary service", () => {
  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      imports: [HttpClientModule, SharedModule],
      providers: [ItineraryService]
    });
  });

  it("should be created", inject(
    [ItineraryService],
    (service: ItineraryService) => {
      expect(service).toBeTruthy();
    }
  ));
});
