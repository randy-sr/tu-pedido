import React from "react";
import { render } from "@testing-library/react";
import CategoriasSidebarEdition from "../components/CategoriasSidebarEdition";

describe("CategoriasSidebarEdition", () => {
  test("renderiza el logotipo y las categorías correctamente", () => {
    const categorias = [
      { id: 1, nombre: "Categoria 1" },
      { id: 2, nombre: "Categoria 2" },
      { id: 3, nombre: "Categoria 3" },
    ];
    const { getByAltText, getByText } = render(
      <CategoriasSidebarEdition categorias={categorias} />
    );
    const logo = getByAltText("Imagen Logo");
    const categoria1 = getByText("Categoria 1");
    const categoria2 = getByText("Categoria 2");
    const categoria3 = getByText("Categoria 3");
    expect(logo).toBeInTheDocument();
    expect(categoria1).toBeInTheDocument();
    expect(categoria2).toBeInTheDocument();
    expect(categoria3).toBeInTheDocument();
  });
});
